# Deployment

This site deploys via **GitHub → Vercel**. Pushing to `main` auto-deploys.

## Rules
- **DO NOT** deploy to Firebase. There is no Firebase hosting.
- **DO NOT** change the git remote URL. It must stay as HTTPS: `https://github.com/Cynthia-Concierge/JoshuaHalpernLegal.git`
- **DO NOT** run `firebase deploy`, `vercel deploy`, or any manual deploy command.
- Just `git commit` — a post-commit hook handles `git push` automatically, and Vercel deploys from the push.

## Workflow
1. Make your code changes
2. `git add` + `git commit`
3. Done. Push and deploy happen automatically.
