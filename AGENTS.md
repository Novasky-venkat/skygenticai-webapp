# Multi-Agent Operating Guide (AGENTS.md)

This repository is optimized for autonomous development by Google Antigravity agents, subagents, and peer agents.

## Core Roles & Delegation Patterns

1. **Design System Guardian (self / subagent)**:
   - Verifies that all new components use CSS tokens from `styles/tokens.css` and typography from `styles/typography.css`.
   - Ensures responsive layouts across mobile (`<480px`), tablet (`768px-991px`), and desktop (`>992px`).

2. **Fullstack / UI Builder Agent**:
   - Scaffolds new pages in `pages/` and reusable modules in `components/`.
   - Integrates state management and backend APIs.

3. **Security & Quality Reviewer Agent**:
   - Checks against OWASP vulnerabilities, XSS in React/HTML rendering, and hardcoded secrets.
   - Audits bundle size and font loading performance.

## Fast Verification Commands
```bash
# Start local development server
npm run dev

# Check git status
git status
```
