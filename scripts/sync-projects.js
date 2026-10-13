import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(ROOT_DIR, 'config', 'incidents.json');
const DATA_PATH = path.join(ROOT_DIR, 'src', 'data', 'projects-data.json');

async function main() {
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Portfolio-Project-Sync',
  };
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  let repos = [
    'sam28iksha/AankhoDekha',
    'martand-codes/MoneyTrack',
    'martand-codes/GameStation',
  ];

  if (fs.existsSync(CONFIG_PATH)) {
    try {
      const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
      if (Array.isArray(config.repositories) && config.repositories.length > 0) {
        repos = config.repositories;
      }
    } catch (e) {
      console.warn('Could not read config/incidents.json:', e);
    }
  }

  let projectsData = {};
  if (fs.existsSync(DATA_PATH)) {
    try {
      projectsData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    } catch {
      // ignore
    }
  }

  for (const repo of repos) {
    const key = repo.split('/')[1] || repo;
    const existing = projectsData[key] || {};

    try {
      console.log(`Fetching metadata for ${repo}...`);
      const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
      if (!res.ok) {
        console.warn(`Failed to fetch repo ${repo}: ${res.status}`);
        continue;
      }
      const data = await res.json();
      projectsData[key] = {
        name: key,
        fullName: repo,
        description: data.description || existing.description || '',
        stars: data.stargazers_count ?? existing.stars ?? 0,
        forks: data.forks_count ?? existing.forks ?? 0,
        openIssues: data.open_issues_count ?? existing.openIssues ?? 0,
        lastUpdate: data.pushed_at || data.updated_at || existing.lastUpdate,
        language: data.language || existing.language || 'TypeScript',
        url: data.html_url || `https://github.com/${repo}`,
      };
    } catch (err) {
      console.error(`Error syncing repo ${repo}:`, err);
    }
  }

  projectsData._meta = {
    lastSynced: new Date().toISOString(),
  };

  fs.writeFileSync(DATA_PATH, JSON.stringify(projectsData, null, 2) + '\n', 'utf-8');
  console.log(`Successfully synced projects telemetry to ${DATA_PATH}`);
}

main().catch((err) => {
  console.error('Fatal projects sync error:', err);
  process.exit(1);
});
