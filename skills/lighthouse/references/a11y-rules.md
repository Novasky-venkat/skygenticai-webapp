# Lighthouse Accessibility Audit Rules & Standards Reference

### 1. Names and Labels
* `button-name`: Buttons must have discernible text or an `aria-label`.
* `link-name`: Links must have discernible text or an `aria-label`.
* `image-alt`: Image elements must have descriptive `alt` text (or `alt=""` with `aria-hidden="true"` if decorative).
* `label`: Every form input must have an associated `<label for="...">` or `aria-label`.

### 2. Contrast & Color
* `color-contrast`: Foreground and background colors must have at least a **4.5:1** contrast ratio for regular text and **3.0:1** for large text / UI controls.
* Primary Sapphire CTA on Dark Obsidian: **8.5:1 (AAA)**.
* Platinum Text on Dark Obsidian: **17.5:1 (AAA)**.

### 3. Navigation & Focus
* `bypass`: Page must contain a skip link (`<a href="#main-content" class="skip-link">`) to allow keyboard users to bypass navigation.
* `heading-order`: Headings must follow a sequential order (`H1` -> `H2` -> `H3`).
* `focus-visible`: Interactive elements must display a distinct focus ring on keyboard navigation.

### 4. ARIA Standards
* `aria-roles`: ARIA roles must be valid and conform to W3C specifications.
* `aria-expanded` & `aria-controls`: Dynamic disclosures (accordions/dropdowns) must bind triggers to their corresponding target containers.
* `landmark-one-main`: The page must have exactly one `<main>` landmark.

### 5. Mobile Tap Targets
* `tap-targets`: Interactive elements must measure at least **48x48px** with at least **8px** of separation.
