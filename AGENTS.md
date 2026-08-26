# Multi-Agent Operating Guide (AGENTS.md)

This repository is strictly governed by **Hallmark Engineering & UI Craft Standards**. Autonomous development by Google Antigravity agents, subagents, and peer agents must unconditionally abide by the following non-negotiable rules.

## Mandatory Hallmark Design & UI Craft Rules (Strict & Non-Negotiable)

1. **ZERO EMOJIS & ZERO CHEESY AI ICONS**:
   - Strictly prohibit the use of emojis (e.g., ⚡, 🧠, 🎙️, 🔒, 📈, 🤝, 🎯, ✨) in production UI components, chips, cards, or hero elements.
   - Do NOT use cheesy "AI" glyphs or "Ai✦" badge icons.
   - All visual indicators must use pixel-perfect, clean Hallmark SVG vector line icons or sleek typographic treatments.

2. **NO FLOATING AI PILL BADGES**:
   - Absolutely no floating pill status boxes (e.g., "• Autonomous Agent Live", "• AI Skill Active").

3. **STRICT 3-TIER TOKEN & TYPOGRAPHY INHERITANCE**:
   - Tier 1 (Primitive): Hex values defined only in `styles/tokens.css`.
   - Tier 2 (Semantic): Semantic surface, text, and border aliases.
   - Tier 3 (Component): Component-scoped CSS variables.
   - Typography must strictly use `var(--font-family-display)` (`'Clash Display'`, system-ui) and `var(--font-family-body)` (`'Satoshi'`, system-ui). No unapproved external fonts.

4. **CANVAS-FIRST RESEARCH & USER VISUAL CONFIRMATION**:
   - Research modern web APIs and a11y standards before modifying layouts.
   - Maintain visual hierarchy specifications in `docs/canvas-specs.md`.
   - Present visual previews to the User and verify with Lighthouse (100/100 A11y & SEO).

## Fast Verification Commands
```bash
# Start local preview server
npm run dev

# Run automated tests (Asset budget + a11y + SEO + Hallmark tokens)
npm test

# Check git status
git status
```
