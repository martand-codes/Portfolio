import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(ROOT_DIR, 'config', 'incidents.json');
const DATA_PATH = path.join(ROOT_DIR, 'src', 'data', 'incidents-data.json');

function cleanTitle(rawTitle) {
  return rawTitle.replace(/^\[INCIDENT\]:?\s*/i, '').trim();
}

function parseSections(body) {
  if (!body) {
    return {
      inputState: '',
      failure: '',
      investigation: '',
      rootCause: '',
      resolution: '',
      lessons: '',
    };
  }

  // Remove HTML comments e.g. <!-- ... -->
  const cleanBody = body.replace(/<!--[\s\S]*?-->/g, '');

  const sections = {
    inputState: '',
    failure: '',
    investigation: '',
    rootCause: '',
    resolution: '',
    lessons: '',
  };

  const headerRegex = /^#{2,3}[ \t]+([A-Za-z0-9_ -]+)[ \t]*$/gm;
  const matches = [];
  let match;

  while ((match = headerRegex.exec(cleanBody)) !== null) {
    const rawHeader = match[1].trim().toUpperCase().replace(/[\s-]+/g, '_');
    matches.push({
      header: rawHeader,
      index: match.index,
      headerLength: match[0].length,
    });
  }

  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const startIndex = current.index + current.headerLength;
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : cleanBody.length;
    const content = cleanBody.slice(startIndex, endIndex).trim();

    switch (current.header) {
      case 'INPUT_STATE':
        sections.inputState = content;
        break;
      case 'FAILURE':
        sections.failure = content;
        break;
      case 'INVESTIGATION':
        sections.investigation = content;
        break;
      case 'ROOT_CAUSE':
        sections.rootCause = content;
        break;
      case 'RESOLUTION':
        sections.resolution = content;
        break;
      case 'LESSONS':
        sections.lessons = content;
        break;
      default:
        break;
    }
  }

  return sections;
}

async function fetchRepoIssues(repo, token) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Portfolio-Incident-Sync',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  const url = `https://api.github.com/repos/${repo}/issues?state=all&per_page=100`;
  console.log(`Fetching issues from ${repo}...`);

  const response = await fetch(url, { headers });

  if (!response.ok) {
    console.warn(`Failed to fetch issues for ${repo}: ${response.status} ${response.statusText}`);
    return [];
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    return [];
  }

  // Filter out PRs (GitHub issues API includes PRs)
  const issues = data.filter((item) => !item.pull_request);

  // Match issues that are labeled as engineering-incident OR have [INCIDENT] title
  const projectName = repo.split('/')[1] || repo;

  const incidents = [];

  for (const issue of issues) {
    const hasIncidentLabel = Array.isArray(issue.labels) && issue.labels.some((l) => {
      const name = typeof l === 'string' ? l : l.name;
      return name && name.toLowerCase() === 'engineering-incident';
    });

    const hasIncidentTitle = /\[incident\]/i.test(issue.title);

    // If labeled engineering-incident, has [INCIDENT] in title, or is in the engineering template
    if (hasIncidentLabel || hasIncidentTitle) {
      const parsed = parseSections(issue.body);

      incidents.push({
        id: issue.id,
        number: issue.number,
        title: cleanTitle(issue.title),
        status: issue.state === 'closed' ? 'RESOLVED' : 'INVESTIGATING',
        createdAt: issue.created_at,
        closedAt: issue.closed_at,
        githubUrl: issue.html_url,
        projectName,
        inputState: parsed.inputState,
        failure: parsed.failure,
        investigation: parsed.investigation,
        rootCause: parsed.rootCause,
        resolution: parsed.resolution,
        lessons: parsed.lessons,
      });
    }
  }

  return incidents;
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.log('Notice: GITHUB_TOKEN not found. Running unauthenticated (subject to lower rate limits).');
  }

  let repos = [];
  if (fs.existsSync(CONFIG_PATH)) {
    try {
      const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
      repos = config.repositories || [];
    } catch (e) {
      console.error('Error reading config/incidents.json:', e);
    }
  }

  if (repos.length === 0) {
    repos = [
      'sam28iksha/AankhoDekha',
      'martand-codes/MoneyTrack',
      'martand-codes/GameStation',
    ];
  }

  let existingData = { _meta: { lastSynced: new Date().toISOString() }, incidents: [] };
  if (fs.existsSync(DATA_PATH)) {
    try {
      existingData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    } catch {
      // Keep default
    }
  }

  const allIncidents = [];
  for (const repo of repos) {
    try {
      const incidents = await fetchRepoIssues(repo, token);
      allIncidents.push(...incidents);
    } catch (err) {
      console.error(`Error processing repo ${repo}:`, err);
    }
  }

  // If GitHub API returned results, sort newest to oldest
  if (allIncidents.length > 0) {
    allIncidents.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    existingData.incidents = allIncidents;
  }

  existingData._meta = {
    lastSynced: new Date().toISOString(),
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(existingData, null, 2) + '\n', 'utf-8');
  console.log(`Successfully synced ${existingData.incidents.length} incidents to ${DATA_PATH}`);
}

main().catch((err) => {
  console.error('Fatal sync error:', err);
  process.exit(1);
});
