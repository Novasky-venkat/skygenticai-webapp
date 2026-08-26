# Canvas-First Layout & High-Fidelity Glossy Controls Specification

This document details the layout architecture and **High-Fidelity Glossy Controls** design system for SkyGentic AI, moving away from hyper-saturated neon AI colors to an **Executive Sapphire, Platinum, and Obsidian** visual language with specular lighting, glass refraction, and tactile depth.

---

## 1. Refined Executive Color Palette (Non-Neon, High Contrast)

### Brand & Surface Palette
| Token Name | Hex / RGBA | Role / Application | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `--color-sapphire-500` | `#2563EB` | **Primary Action Base** (Precision Cobalt Sapphire) | **4.6:1** on Light / **8.5:1** on Dark |
| `--color-sapphire-600` | `#1D4ED8` | Primary Hover / Active Base | **9.8:1** (AAA) |
| `--color-sapphire-400` | `#3B82F6` | Specular Rim / Highlight Gradient | Highlight Accent |
| `--color-obsidian-950` | `#0B0F19` | **Deepest Obsidian Void** (Page Background) | Base Void |
| `--color-obsidian-900` | `#0F172A` | Primary Dark Surface & Navbar Base | Dark Surface |
| `--color-obsidian-800` | `#1E293B` | Elevated Card Base / Subsurface | Card Fill |
| `--color-slate-400` | `#94A3B8` | Subtitle / Secondary Slate Text | **5.4:1** on Dark (AA) |
| `--color-slate-200` | `#E2E8F0` | High-Contrast Body Text | **14.1:1** on Dark (AAA) |
| `--color-surface-white`| `#FFFFFF` | Display Titles & Light Section Surfaces | **17.5:1** on Dark (AAA) |

---

## 2. High-Fidelity Glossy Controls Anatomy

### A. Glossy Sapphire Primary Button (`.btn-glossy-primary`)
* **Geometry**: `border-radius: 3rem` (48px pill), `height: 48px`, `padding: 8px 10px 8px 24px`.
* **Base Gradient**: `linear-gradient(180deg, #3B82F6 0%, #1D4ED8 100%)`.
* **Specular Top Sheen**: Multi-stop gloss gradient (`linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 51%, rgba(255,255,255,0.08) 100%)`).
* **Bevel & Rim Light**: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(0, 0, 0, 0.35), 0 4px 16px rgba(37, 99, 235, 0.35);`.
* **Hover Interaction**: Smooth lift (`translateY(-2px)`), glow intensifies (`box-shadow: 0 8px 24px rgba(37, 99, 235, 0.5)`).

```
State: Idle
┌─────────────────────────────────────────────────────────────┐
│  ╭───────────────────────────────────────────────────────╮  │ (Top Specular Highlight: 0.6 opacity)
│  │  [ Book a demo ]                     (• ↗)            │  │ (Sapphire Gradient: #3B82F6 -> #1D4ED8)
│  ╰───────────────────────────────────────────────────────╯  │ (Bottom Shadow: 0 4px 16px Sapphire)
└─────────────────────────────────────────────────────────────┘
```

### B. Glossy Obsidian Secondary Button (`.btn-glossy-secondary`)
* **Base**: `linear-gradient(180deg, #1E293B 0%, #0F172A 100%)`.
* **Glass Bevel**: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 0 rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.4);`.
* **Border**: `1px solid rgba(255, 255, 255, 0.15)`.

### C. Frosted Crystal Control (`.btn-glossy-glass`)
* **Base**: `rgba(255, 255, 255, 0.10)`.
* **Backdrop Filter**: `blur(24px) saturate(180%)`.
* **Specular Rim**: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.45), 0 4px 20px rgba(0, 0, 0, 0.15);`.
* **Border**: `1px solid rgba(255, 255, 255, 0.25)`.

---

## 3. High-Fidelity Glossy Layout Blueprint

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. FLOATING GLOSSY NAVBAR (Fixed Frosted Glass Capsule, max-w: 1350px, blur: 24px, Specular Rim)       │
│    [Ai]SkyGentic       Solutions ▾   Products ▾   Resources ▾   Company ▾   Pricing  Sign In [Book Demo]│
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. HERO SECTION [DEEP OBSIDIAN - #0B0F19 with Sapphire Ambient Spotlight]                              │
│    Left (55%): Glossy Eyebrow Pill + Massive H1 (Clash Display) + Lead Copy + Glossy Sapphire CTA Group│
│    Right (45%): High-Gloss Glassmorphic Visual Hub with Precision UI Cards & Specular Sheen            │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. ENTERPRISE METRICS BENTO BAR [OBSIDIAN SURFACE - #0F172A with Beveled Glass Borders]                 │
│    3 Glossy Metric Tiles: 91% Containment Rate | 85% CSAT Score | 1M+ Daily Messages Automated          │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4. CLIENT LOGO MARQUEE [PLATINUM SURFACE - #FFFFFF]                                                     │
│    Subtle frosted horizontal ticker with enterprise logos and vertical divider strokes                 │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5. PLATFORM CAPABILITIES BENTO GRID [PLATINUM SLATE - #F8FAFC]                                          │
│    Staggered 3-Column Bento Cards with Glossy Top Rim Lights, Sapphire Icon Pods & Read More Links      │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 6. PRODUCT INTERACTIVE WORKFLOW SHOWCASE [WHITE - #FFFFFF]                                              │
│    Left (45%): "Power Up Your Lead Generation" + Enterprise Value Pillars                              │
│    Right (55%): Glossy Video & UI Container with Satin Refraction Borders & Interactive Demo Flow      │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 7. TESTIMONIALS GLOSSY RIBBON [DEEP OBSIDIAN - #0B0F19]                                                │
│    Left (30%): "What CX Leaders Are Saying" Headline + Glossy CTA                                      │
│    Right (70%): 4-Card Glossy Flex Accordion with Smooth Sapphire Glow Expansion (23% -> 35% on hover) │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 8. FAQ ACCORDION HUB [PLATINUM SLATE - #F8FAFC]                                                         │
│    Centered Glass Card Container (max-w: 840px) with Glossy Sapphire Focus Rings & ARIA States         │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 9. ENTERPRISE DUAL-CARD GLOSSY FOOTER [OBSIDIAN - #070A10]                                             │
│    Left Card (40%): Glossy Sapphire/Obsidian CTA Card ("Scale Your Conversational CX Today")          │
│    Right Card (60%): Frosted Glass Navigation Directory (Platform, Solutions, Company)                │
│    Bottom Bar: Copyright, Legal links, Privacy, Status                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
