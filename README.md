# Splunk Core User Exam Hub

A complete static study site for the Splunk Core Certified User exam. It is designed for GitHub Pages and requires no framework, build command, database, or external API.

## What is included

- A five-day study sprint with persistent checkboxes
- Eight full lessons aligned to the official exam domains and weights
- Hands-on `index=test` searches and plain-English explanations
- An interactive browser-based SPL learning simulator
- 75 original practice questions
- Quick diagnostic, domain drills, and a weighted 60-question mock
- Accurate 57-minute mock timer based on elapsed clock time
- Domain-level results and answer explanations after submission
- Final readiness checklist and downloadable offline PDF
- Local progress storage and offline caching after the first visit
- Responsive desktop, tablet, and mobile layouts

The questions are original study material and are not copied exam questions. The project is not affiliated with or endorsed by Splunk.

## Publish with GitHub Pages

### Option A: Create a new repository

1. Sign in to GitHub and create a public repository named `splunk-exam-hub`.
2. Upload every file and folder from this project, keeping `downloads/` intact.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then save.
7. GitHub will publish the site at `https://YOUR-USERNAME.github.io/splunk-exam-hub/`.

### Option B: Publish with Git from the project folder

```bash
git init
git add .
git commit -m "Launch Splunk Core User Exam Hub"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/splunk-exam-hub.git
git push -u origin main
```

Then enable Pages from `main` and `/(root)` in the repository settings.

## Run locally

Opening `index.html` directly works for most features. To test offline caching and match GitHub Pages behavior, use a small local server:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Updating content

- Lesson content, study plans, questions, checklist items, and lab recipes: `data.js`
- Page layout and labels: `index.html`
- Interactions, quiz logic, timer, and SPL simulator: `app.js`
- Visual design and responsive behavior: `styles.css`

If cached changes do not appear after deployment, change `CACHE_NAME` in `service-worker.js` from `v1` to `v2` and redeploy.
