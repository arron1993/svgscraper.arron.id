import requests

from bs4 import BeautifulSoup

from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/api/scrape', methods=['POST'])
def index():
    url = request.get_json().get("url")
    try:
        resp = requests.get(url, timeout=(2, 10))
    except Exception:
        return {"success": False, "svgs": [], "reason": "Request timed out"}

    if resp.ok:
        soup = BeautifulSoup(resp.content, features="html.parser")
        svgs = list(map(str, soup.findAll("svg")))
        return {"success": True, "svgs": svgs}
    else:
        return {"success": False, "svgs": []}


# We only need this for local development.
if __name__ == '__main__':
    app.run()
