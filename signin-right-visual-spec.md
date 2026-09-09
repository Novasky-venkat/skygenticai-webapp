# Sign-in Right Panel Refinement Specification (Revision 3)

**Status:** LOCKED\
**Priority:** CRITICAL\
**Applies To:** `signin.html` Right Visual Panel ONLY

---

# Objective

Refine the existing sign-in page until the right panel matches the approved design language.

This is a **polish and refinement task**, NOT a redesign.

The current implementation is approximately 85-90% complete.

The remaining work is to restore visual hierarchy, ambient flow, depth, and viewport behavior while preserving everything that already matches.

---

# Scope

ONLY modify the **right visual panel**.

The following are OUT OF SCOPE:

- Left sign-in panel
- Form
- Typography
- Buttons
- Inputs
- Footer
- Authentication
- Layout proportions
- Existing card styling

Any modification to these areas is considered a failure.

---

# Locked Sections (DO NOT MODIFY)

## LEFT PANEL

Everything on the left side is approved.

DO NOT change:

- logo
- heading
- spacing
- typography
- inputs
- buttons
- remember me
- forgot password
- social login
- footer
- sizing
- responsiveness

Changing ANY element on the left panel is a FAILURE.

---

# Existing Approved Components

The following are already approved.

DO NOT redesign them.

- Card size
- Card corner radius
- Card shadows
- Card typography
- Card icon styling
- Card spacing
- Headline
- Background color palette
- Blue accent color

These must remain visually identical.

---

# Functional Requirements

## FR-001

Desktop must have NO vertical scrolling.

PASS: Entire page fits inside one viewport.

FAIL: Any vertical scrollbar appears.

## FR-002

Desktop height must remain locked to 100vh.

PASS: No content extends below viewport.

## FR-003

Responsive behavior must remain unchanged.

Desktop, tablet, and mobile must continue working exactly as before.

---

# Visual Requirements

## VR-001

Restore the workflow flow.

The workflow MUST NOT look like five independent floating cards.

Instead they must visually belong to one continuous flow.

## VR-002

The connection must NOT be:

- SVG connector
- visible line
- glowing dots
- node graph
- timeline
- pipe

## VR-003

Instead create an **ambient workflow ribbon**.

Characteristics:

- extremely soft
- blurred
- white-blue
- follows S curve
- blends into background
- only subtly visible
- disappears naturally into surrounding gradient

The ribbon is NOT an object.

It is background atmosphere.

## VR-004

The ribbon MUST flow behind the cards.

Cards must appear to float above it.

Depth order:

Background -> Gradient -> Ribbon -> Cards

## VR-005

Ribbon opacity must remain very low.

Approximately 5-10%.

Never brighter than the cards.

## VR-006

There must NEVER be:

- hard edges
- sharp curves
- visible path
- visible stroke
- outlined connector

---

# Background Requirements

## BG-001

Current background is too flat.

Restore layered depth.

## BG-002

Background should contain multiple subtle layers.

Layer order:

Layer 1: Soft white canvas

Layer 2: Very soft blue gradient

Layer 3: Large blurred atmospheric glow

Layer 4: Fine wave mesh

Layer 5: Ambient ribbon

Layer 6: Workflow cards

## BG-003

The background must feel dimensional without becoming decorative.

It should remain minimal.

## BG-004

No dramatic effects.

Forbidden:

- large glowing blobs
- orbs
- glass spheres
- particles
- sparkles
- noise
- lens flares
- 3D objects

---

# Wave Requirements

## WV-001

The bottom wave currently disappears into the background.

Increase visibility slightly.

## WV-002

Wave should be approximately 10-15% more visible.

NOT brighter.

NOT thicker.

Only slightly more distinguishable.

## WV-003

Wave must still remain secondary.

Headline and cards remain primary focus.

---

# Card Flow Requirements

## CF-001

Cards should visually read as one journey.

User eye should naturally travel:

Card 1 -> Card 2 -> Card 3 -> Card 4 -> Card 5

without needing connector lines.

## CF-002

Cards should maintain S-curve layout.

Do not stack vertically.

Do not align perfectly.

## CF-003

Maintain generous white space.

No crowding.

---

# Motion Requirements

## AN-001

Cards must gently float.

Movement: translateY approximately +/-4px.

## AN-002

Animation duration: 14-18 seconds.

## AN-003

Every card must have different delay.

Motion must feel organic.

## AN-004

Movement must never attract attention.

User should only notice it subconsciously.

## AN-005

Reduced motion users receive no animation.

---

# Lighting Requirements

## LT-001

Cards remain brightest objects.

## LT-002

Ribbon is always dimmer.

## LT-003

Background glow remains behind content.

Never above.

---

# Performance Requirements

Maintain:

- CSS budget
- HTML budget
- Lighthouse
- SEO
- Accessibility
- Hallmark validation

No regressions allowed.

---

# Forbidden Changes

DO NOT:

- add orb
- add sphere
- add particles
- add dots
- add visible connectors
- add SVG workflow line
- add decorative illustrations
- add gradients over cards
- change typography
- change left panel
- change spacing
- change card size
- change card radius
- change workflow copy
- change approved colors
- introduce scrolling

Any of the above is an automatic FAILURE.

---

# Validation Requirements

After EVERY implementation pass the page MUST be validated against THIS specification.

Validation process:

Implement -> Compare against every Requirement ID -> List every failed requirement -> Fix failures -> Validate again -> Repeat

The implementation MUST NOT stop while any requirement fails.

---

# Final Acceptance Checklist

## Layout

- [ ] No scrolling
- [ ] 100vh maintained
- [ ] Responsive unchanged

## Cards

- [ ] Same size
- [ ] Same spacing
- [ ] Same styling
- [ ] Same typography

## Ambient Flow

- [ ] Ribbon restored
- [ ] No visible connector
- [ ] No dots
- [ ] No SVG line
- [ ] Cards visually connected

## Background

- [ ] Layered depth restored
- [ ] Soft atmospheric glow
- [ ] Mesh wave visible
- [ ] Ribbon behind cards

## Motion

- [ ] Gentle floating
- [ ] Independent timing
- [ ] Reduced motion supported

## Regression

- [ ] Left panel untouched
- [ ] Lighthouse unchanged
- [ ] Accessibility unchanged
- [ ] SEO unchanged
- [ ] CSS budget passes
- [ ] Hallmark passes

---

# Definition of Done

The task is COMPLETE only when:

- Every requirement in this specification passes.
- Every checkbox in the Final Acceptance Checklist is true.
- There are ZERO regressions.
- The implementation is visually indistinguishable from the approved design intent.
- Any mismatch, however small, is treated as a failure requiring another refinement cycle.

"Close enough" is NOT acceptable.
