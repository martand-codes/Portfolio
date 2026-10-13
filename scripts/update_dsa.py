import os
import re
import json
import urllib.request
import urllib.error

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'dsa-data.json')
REPO = 'martand-codes/DSA_JOURNEY'

def fetch_readme():
    token = os.environ.get('GITHUB_TOKEN')
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-DSA-Sync'
    }
    if token:
        headers['Authorization'] = f'token {token}'

    # Try GitHub API first (uses token if available)
    api_url = f'https://api.github.com/repos/{REPO}/contents/readme.md'
    try:
        req = urllib.request.Request(api_url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            import base64
            content = base64.b64decode(data['content']).decode('utf-8')
            return content
    except Exception as e:
        print(f"API fetch failed: {e}. Trying raw GitHub URL...")

    # Fallback to raw usercontent
    for branch in ['main', 'master']:
        raw_url = f'https://raw.githubusercontent.com/{REPO}/{branch}/readme.md'
        try:
            req = urllib.request.Request(raw_url, headers={'User-Agent': 'Portfolio-DSA-Sync'})
            with urllib.request.urlopen(req) as resp:
                return resp.read().decode('utf-8')
        except Exception:
            continue

    return None

def parse_markdown_table(md_content):
    if not md_content:
        return []

    # Look for table rows: | Pattern | Problems Solved |
    # | Two Pointers | 12 |
    results = []
    lines = md_content.splitlines()
    in_table = False

    for line in lines:
        line_clean = line.strip()
        if not line_clean.startswith('|'):
            if in_table and line_clean:
                # End of table reached
                break
            continue

        columns = [c.strip() for c in line_clean.strip('|').split('|')]
        if len(columns) < 2:
            continue

        col0, col1 = columns[0], columns[1]

        # Check if header or separator
        if 'pattern' in col0.lower() or 'problem' in col1.lower():
            in_table = True
            continue
        if re.match(r'^-+$', col0.replace('-', '')) or re.match(r'^-+$', col1.replace('-', '')):
            continue

        # Extract number from col1
        num_match = re.search(r'\d+', col1)
        if num_match:
            count = int(num_match.group())
            name = col0
            results.append({'name': name, 'count': count})
            in_table = True

    # Sort descending by count (highest questions solved first)
    results.sort(key=lambda x: x['count'], reverse=True)
    return results

def main():
    content = fetch_readme()
    if not content:
        print("Failed to fetch readme.md from DSA_JOURNEY. Retaining existing data.")
        return

    items = parse_markdown_table(content)
    if not items:
        print("No items parsed from markdown table. Retaining existing data.")
        return

    total = sum(i['count'] for i in items)
    print(f"Parsed {len(items)} patterns, total {total} problems solved.")

    with open(DATA_PATH, 'w', encoding='utf-8') as f:
        json.dump(items, f, indent=2)
        f.write('\n')

    print(f"Successfully saved sorted DSA data to {DATA_PATH}")

if __name__ == '__main__':
    main()
