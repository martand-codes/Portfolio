import os
import json
import urllib.request
import urllib.error

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'dsa-data.json')
REPO = 'martand-codes/DSA_JOURNEY'

def fetch_dsa_data():
    token = os.environ.get('GITHUB_TOKEN')
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-DSA-Sync'
    }
    if token:
        headers['Authorization'] = f'token {token}'

    url = f'https://api.github.com/repos/{REPO}/contents'
    req = urllib.request.Request(url, headers=headers)

    try:
        with urllib.request.urlopen(req) as resp:
            items = json.loads(resp.read().decode('utf-8'))
            topics = []
            for item in items:
                if item.get('type') == 'dir' and not item['name'].startswith('.'):
                    name = item['name'].replace('_', ' ').replace('-', ' ').title()
                    # Count files inside folder if possible or placeholder count
                    topics.append({'name': name, 'count': 0})
            if topics:
                return topics
    except Exception as e:
        print(f"Notice: Could not fetch from {REPO}: {e}")
    return None

def main():
    fetched = fetch_dsa_data()
    if fetched:
        # Load existing counts if available to preserve detailed numbers
        if os.path.exists(DATA_PATH):
            try:
                with open(DATA_PATH, 'r', encoding='utf-8') as f:
                    existing = json.load(f)
                    counts = {item['name'].lower(): item['count'] for item in existing if 'name' in item}
                    for item in fetched:
                        k = item['name'].lower()
                        if k in counts:
                            item['count'] = counts[k]
            except Exception:
                pass
        with open(DATA_PATH, 'w', encoding='utf-8') as f:
            json.dump(fetched, f, indent=2)
            f.write('\n')
        print(f"DSA data updated successfully at {DATA_PATH}")
    else:
        print("DSA data kept intact.")

if __name__ == '__main__':
    main()
