/* Tweaks: palette + font pairing.
   Loaded on every page so the user can experiment from anywhere. */

function NovaTweaks() {
  const defaults = /*EDITMODE-BEGIN*/{
    "palette": ["oklch(53% 0.200 258)", "oklch(60% 0.120 190)"],
    "fontPair": "ibm-plex"
  }/*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(defaults);

  const ibmPlex = {
    display: '"IBM Plex Sans", system-ui, sans-serif',
    body: '"IBM Plex Sans", system-ui, sans-serif',
    subheading: '"IBM Plex Sans Condensed", "IBM Plex Sans", system-ui, sans-serif',
    gf: ["IBM+Plex+Sans:wght@400;500","IBM+Plex+Sans+Condensed:wght@500"]
  };
  const fonts = {
    "ibm-plex": ibmPlex,
    "geist-inter": ibmPlex,
    "fraunces-inter": ibmPlex,
    "space-grotesk": ibmPlex,
    "instrument-ibm": ibmPlex,
    "geist-mono": ibmPlex,
  };

  // Apply palette
  React.useEffect(() => {
    const pal = Array.isArray(t.palette) ? t.palette : ["oklch(53% 0.200 258)", "oklch(60% 0.120 190)"];
    const [a, a2] = pal;
    const r = document.documentElement;
    r.style.setProperty("--accent", a);
    r.style.setProperty("--accent-2", a2);
    const withAlpha = (color, alpha) => color.replace(/\)$/, ` / ${alpha})`);
    r.style.setProperty("--accent-glow", withAlpha(a, 0.35));
    r.style.setProperty("--accent-2-glow", withAlpha(a2, 0.3));
  }, [t.palette]);

  // Apply fonts (inject google font link, update CSS vars)
  React.useEffect(() => {
    const f = fonts[t.fontPair] || fonts["ibm-plex"];
    const r = document.documentElement;
    r.style.setProperty("--font-display", f.display);
    r.style.setProperty("--font-body", f.body);
    r.style.setProperty("--font-subheading", f.subheading);

    const id = "gf-tweak";
    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    if (f.gf && f.gf.length) {
      link.href = `https://fonts.googleapis.com/css2?${f.gf.map(g => "family=" + g).join("&")}&display=swap`;
    }
  }, [t.fontPair]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Color palette" />
      <TweakColor
        label="Accents"
        value={t.palette}
        options={[
          ["oklch(53% 0.200 258)", "oklch(60% 0.120 190)"],
          ["oklch(53% 0.200 258)", "oklch(29% 0.080 258)"],
          ["oklch(94% 0.035 190)", "oklch(70% 0.140 250)"],
          ["oklch(98% 0.010 250)", "oklch(53% 0.200 258)"],
          ["oklch(96% 0.018 250)", "oklch(19% 0.025 255)"],
        ]}
        onChange={v => setTweak("palette", v)}
      />

      <TweakSection label="Typography" />
      <TweakSelect
        label="Font pairing"
        value={t.fontPair}
        onChange={v => setTweak("fontPair", v)}
        options={[
          { value: "ibm-plex",       label: "IBM Plex" },
        ]}
      />
    </TweaksPanel>
  );
}

// Mount tweaks to its own root so it doesn't interfere with page content
const tweakMount = document.createElement("div");
tweakMount.id = "__nova_tweaks_mount";
document.body.appendChild(tweakMount);
ReactDOM.createRoot(tweakMount).render(<NovaTweaks />);
