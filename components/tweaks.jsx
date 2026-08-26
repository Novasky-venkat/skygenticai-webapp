/* Tweaks: palette + font pairing.
   Loaded on every page so the user can experiment from anywhere. */

function NovaTweaks() {
  const defaults = /*EDITMODE-BEGIN*/{
    "palette": ["#38bdf8", "#5eead4"],
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
    const pal = Array.isArray(t.palette) ? t.palette : ["#38bdf8", "#5eead4"];
    const [a, a2] = pal;
    const r = document.documentElement;
    r.style.setProperty("--accent", a);
    r.style.setProperty("--accent-2", a2);
    // Build glow rgba approximations
    const hexToRgba = (hex, alpha) => {
      const h = hex.replace("#", "");
      const n = parseInt(h, 16);
      const rr = (n >> 16) & 255, gg = (n >> 8) & 255, bb = n & 255;
      return `rgba(${rr},${gg},${bb},${alpha})`;
    };
    r.style.setProperty("--accent-glow", hexToRgba(a, 0.35));
    r.style.setProperty("--accent-2-glow", hexToRgba(a2, 0.3));
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
          ["#38bdf8", "#5eead4"],
          ["#7c3aed", "#06b6d4"],
          ["#f97316", "#ec4899"],
          ["#84cc16", "#3b82f6"],
          ["#0b1220", "#64748b"],
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
