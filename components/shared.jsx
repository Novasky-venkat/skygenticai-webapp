/* Shared components: Nav, Header, Footer, ChatWidget, primitives */

const { useState, useEffect, useRef } = React;

// ============ HEADER with CHEVRONS ============
function Header({ current = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropdownCloseTimers = useRef({});
  const scrolledRef = useRef(false);

  useEffect(() => {
    let rafId = null;

    const syncScrolled = () => {
      rafId = null;
      const nextScrolled = window.scrollY > 12;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    const scheduleSync = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(syncScrolled);
    };

    syncScrolled();
    window.addEventListener("scroll", scheduleSync, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleSync);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const writeParticleVars = () => {
      rafId = null;
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      document.documentElement.style.setProperty("--site-particle-x", `${(currentX * 18).toFixed(2)}px`);
      document.documentElement.style.setProperty("--site-particle-y", `${(currentY * 14).toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        rafId = window.requestAnimationFrame(writeParticleVars);
      }
    };

    const scheduleWrite = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(writeParticleVars);
    };

    const onPointerMove = (event) => {
      targetX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
      targetY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
      scheduleWrite();
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      scheduleWrite();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    return () => {
      Object.values(dropdownCloseTimers.current).forEach(clearTimeout);
    };
  }, []);

  const openDropdown = (name) => {
    clearTimeout(dropdownCloseTimers.current[name]);
    setOpenDropdowns(prev => ({ ...prev, [name]: true }));
  };

  const closeDropdown = (name) => {
    clearTimeout(dropdownCloseTimers.current[name]);
    dropdownCloseTimers.current[name] = setTimeout(() => {
      setOpenDropdowns(prev => ({ ...prev, [name]: false }));
    }, 220);
  };

  const menuItems = [
    { label: "Services", href: "services.html", hasDropdown: true, key: "services" },
    { label: "Resources", href: "resources.html", hasDropdown: false, key: "resources" },
    { label: "Get in Touch", href: "get-in-touch.html", hasDropdown: false, key: "getInTouch" },
    { label: "About Us", href: "about-us.html", hasDropdown: false, key: "aboutUs" }
  ];

  const dropdownMenus = {
    services: [
      { label: "Forge", href: "services.html#forge" },
      { label: "Swarm", href: "services.html#swarm" },
      { label: "SkyFlow", href: "services.html#skyflow" },
      { label: "Hive", href: "services.html#hive" },
      { label: "NovaOps", href: "services.html#novaops" }
    ]
  };

  const handleLogoClick = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    try {
      window.sessionStorage.setItem("skygentic-home-entry-skip-once", "true");
    } catch (error) {}
  };

  return (
    <>
    <div className="site-hero-particles" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span key={i} className={`site-hero-particle site-hero-particle--${i + 1}`}></span>
      ))}
    </div>
    <header className={`hdr ${scrolled ? "hdr--scrolled" : ""}`}>
      <div className="container hdr-inner">
        <a href="index.html" className="hdr-logo" onClick={handleLogoClick}>
          <img className="hdr-logo-img" src="uploads/skygentic-wordmark.png" alt="SkyGentic AI" />
        </a>

        <div className="hdr-actions">
          <nav className="hdr-nav">
            {menuItems.map(item => (
              <div key={item.key || item.label} className="hdr-nav-item">
                {item.hasDropdown ? (
                  <div
                    className="hdr-dropdown"
                    onMouseEnter={() => openDropdown(item.key)}
                    onMouseLeave={() => closeDropdown(item.key)}
                    onFocus={() => openDropdown(item.key)}
                    onBlur={() => closeDropdown(item.key)}
                  >
                    <button className="hdr-nav-link" onClick={() => { window.location.href = item.href; }}>
                      {item.label}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openDropdowns[item.key] && dropdownMenus[item.key] && (
                      <div className="hdr-submenu">
                        {dropdownMenus[item.key].map(subitem => (
                          <a key={subitem.label} href={subitem.href} className="hdr-submenu-link">
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={item.href} className="hdr-nav-link">{item.label}</a>
                )}
              </div>
            ))}
          </nav>

          <div className="hdr-cta">
            <a href="signin.html" className="hdr-btn hdr-btn--ghost">Sign in</a>
          </div>
        </div>

        <button className="hdr-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="hdr-mobile">
          {menuItems.map(item => (
            <div key={item.key || item.label} className="hdr-mobile-group">
              <a href={item.href}>{item.label}</a>
              {item.hasDropdown && dropdownMenus[item.key] && (
                <div className="hdr-mobile-submenu">
                  {dropdownMenus[item.key].map(subitem => (
                    <a key={subitem.label} href={subitem.href}>{subitem.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="hdr-mobile-cta">
            <a href="signin.html" className="hdr-btn hdr-btn--ghost hdr-btn--block">Sign in</a>
          </div>
        </div>
      )}

      <style>{`
        .hdr {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 0;
          margin-bottom: calc(-1 * var(--nav-h));
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: 1px solid transparent;
          box-shadow: none;
          transition: background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease, padding 0.28s ease;
        }
        .hdr--scrolled {
          border-color: transparent;
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          padding: 16px 0 0;
        }
        .hdr-inner {
          position: relative;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 46px;
          padding-inline: 0;
          border: 1px solid transparent;
          border-radius: 0;
          background: transparent;
          transition: height 0.28s ease, max-width 0.28s ease, border-radius 0.28s ease, background 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, padding 0.28s ease;
        }
        .hdr-logo,
        .hdr-actions,
        .hdr-nav,
        .hdr-cta,
        .hdr-burger {
          position: relative;
          z-index: 1;
        }
        .hdr:not(.hdr--scrolled) .hdr-inner {
          padding-inline: 0;
        }
        .hdr--scrolled .hdr-inner {
          height: 60px;
          max-width: var(--max-w);
          padding-inline: 24px;
          gap: 28px;
          border-radius: 999px;
          border-color: rgba(255, 255, 255, 0.09);
          /* Glass pill - same dark base + accent glows as hero */
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02)),
            radial-gradient(circle at 10% 50%, rgba(59, 130, 246, 0.18), transparent 55%),
            radial-gradient(circle at 90% 50%, rgba(124, 58, 237, 0.14), transparent 55%),
            rgba(6, 7, 13, 0.72);
          backdrop-filter: blur(22px) saturate(170%);
          -webkit-backdrop-filter: blur(22px) saturate(170%);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.06) inset,
            0 1px 0 rgba(255, 255, 255, 0.10) inset,
            0 16px 48px rgba(0, 0, 0, 0.36),
            0 4px 16px rgba(0, 0, 0, 0.22);
        }
        .hdr--scrolled .hdr-nav {
          color: rgba(255,255,255,0.78);
        }
        .hdr--scrolled .hdr-nav-link:hover {
          color: #fff;
        }
        .hdr-logo {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          width: 330px;
          height: 72px;
          flex-shrink: 0;
          overflow: hidden;
          transition: width 0.18s ease, height 0.18s ease;
        }
        .hdr--scrolled .hdr-logo {
          width: 300px;
          height: 54px;
        }
        .hdr-logo-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          object-position: left center;
        }
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(241, 247, 255, 0.78);
          flex: none;
          justify-content: flex-end;
        }
        .hdr-nav-item { position: relative; }
        .hdr-dropdown {
          position: relative;
          transparency: 20%;
        }
        .hdr-dropdown::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          height: 14px;
        }
        .hdr-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 12px;
          border-radius: 999px;
          background: transparent;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: 500;
          letter-spacing: inherit;
          color: inherit;
          cursor: pointer;
          transition: color 0.18s ease, background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
          white-space: nowrap;
        }
        .hdr-nav-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.055);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.055) inset;
          transform: translateY(-1px);
        }
        .hdr-nav-link svg {
          transition: transform 0.2s ease;
        }
        .hdr-dropdown:hover .hdr-nav-link svg {
          transform: translateY(1px);
        }
        .hdr-submenu {
          position: absolute;
          top: calc(100% + 2px);
          left: 0;
          background: rgba(5, 8, 18, 0.93);
          backdrop-filter: blur(34px) saturate(155%);
          -webkit-backdrop-filter: blur(34px) saturate(155%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: var(--r-lg);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
          padding: 10px;
          min-width: 200px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: fadeDown 0.18s ease;
          z-index: 10;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hdr-submenu-link {
          display: block;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 14px;
          color: rgba(241,247,255,0.8);
          text-shadow: none;
          transition: background-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .hdr-submenu-link:focus,
        .hdr-submenu-link:active,
        .hdr-submenu-link:hover {
          background: rgba(125, 211, 252, 0.1);
          color: #fff;
          outline: none;
          transform: translateX(2px);
        }
        .hdr-dropdown:hover .hdr-nav-link,
        .hdr-dropdown:focus-within .hdr-nav-link {
          color: #fff;
        }
        .hdr-cta {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          isolation: isolate;
        }
        .hdr-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          margin-left: auto;
          min-width: 0;
        }
        /* Self-contained header button styles - do not rely on global .btn classes
           so the header never loses its colors to outside cascade/specificity. */
        .hdr-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          font-size: 13.5px;
          font-family: inherit;
          font-weight: 600;
          line-height: 1.2;
          border-radius: 999px;
          border: 1px solid transparent;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, opacity 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
        }
        .hdr-btn--ghost {
          color: #ffffff !important;
          background: rgba(9, 16, 25, 0.86);
          border-color: rgba(255,255,255,0.16);
        }
        .hdr--scrolled .hdr-btn--ghost {
          background: transparent;
        }
        .hdr-btn--ghost:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(94,234,212,0.34);
          transform: translateY(-1px);
        }
        .hdr-btn--primary {
          color: #031018 !important;
          background:
            linear-gradient(135deg, rgba(167,255,243,0.98), rgba(94,234,212,0.96) 52%, rgba(56,189,248,0.92));
          border-color: rgba(191, 255, 245, 0.28);
          box-shadow: 0 16px 34px rgba(45, 212, 191, 0.22), 0 0 0 1px rgba(255,255,255,0.12) inset;
        }
        .hdr-btn--primary:hover {
          opacity: 0.96;
          transform: translateY(-1px);
          box-shadow: 0 20px 46px rgba(45, 212, 191, 0.30), 0 0 0 1px rgba(255,255,255,0.16) inset;
        }
        .hdr-btn--block {
          width: 100%;
        }
        .hdr-mobile-cta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 6px;
        }

        .hdr-burger {
          display: none;
          background: none; border: none;
          flex-direction: column; gap: 4px; padding: 8px;
          cursor: pointer;
        }
        .hdr-burger span { width: 22px; height: 2px; background: #fff; border-radius: 2px; }
        .hdr-mobile {
          display: none;
          flex-direction: column;
          padding: 16px 24px 24px;
          gap: 14px;
          border-top: 1px solid rgba(255,255,255,0.14);
          background: rgba(3, 3, 3, 0.9);
        }
        .hdr-mobile a {
          color: #fff;
          font-weight: 500;
        }
        .hdr-mobile-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hdr-mobile-submenu {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
          padding-left: 12px;
        }
        .hdr-mobile-submenu a {
          color: rgba(255,255,255,0.72);
          font-size: 13px;
          font-weight: 400;
        }
        @media (max-width: 1024px) {
          .hdr--scrolled .hdr-inner {
            max-width: 100%;
            padding-inline: 24px;
          }
          .hdr-actions { gap: 8px; }
          .hdr-nav { gap: 4px; }
          .hdr-nav-link { padding: 8px 10px; font-size: 14px; }
        }
        @media (max-width: 980px) {
          .hdr--scrolled .hdr-inner {
            max-width: 100%;
            gap: 18px;
            padding-inline: 24px;
          }
          .hdr-logo {
            width: 270px;
          }
          .hdr-cta {
            gap: 8px;
          }
          .btn--sm {
            padding: 8px 12px;
          }
        }
        @media (max-width: 1230px) {
          .hdr-actions, .hdr-nav, .hdr-cta { display: none; }
          .hdr-burger { display: flex; }
          .hdr-mobile { display: flex; }
          .hdr-inner { gap: 16px; }
          .hdr-logo {
            width: 240px;
            height: 50px;
          }
          .hdr--scrolled { padding: 12px 0 0; }
          .hdr--scrolled .hdr-inner {
            height: var(--nav-h);
            max-width: 100%;
            padding-inline: 24px;
          }
          .hdr--scrolled .hdr-logo {
            width: 240px;
          }
        }
      `}</style>
    </header>
    </>
  );
}

// ============ NAV (legacy) ============
function Nav({ current = "home" }) {
  return <Header current={current} />;
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="ft">
      <div className="container">
        <div className="ft-top">
          <div className="ft-brand">
            <img className="ft-logo-img" src="uploads/skygentic-wordmark.png" alt="SkyGentic AI" />
            <p className="ft-tag">Agentic AI for ambitious businesses. Deploy intelligent agents that work, think, and scale alongside your team.</p>
            <div className="flex gap-2 items-center" style={{ marginTop: 20 }}>
              <span className="dot-pulse"></span>
              <span style={{ fontSize: 13, color: "var(--dark-ink-soft)" }}>All systems operational</span>
            </div>
          </div>

          <div className="ft-cols">
            <div>
              <h5>Services</h5>
              <a href="services.html#forge">Forge</a>
              <a href="services.html#swarm">Swarm</a>
              <a href="services.html#skyflow">SkyFlow</a>
              <a href="services.html#hive">Hive</a>
              <a href="services.html#novaops">NovaOps</a>
            </div>
            <div>
              <h5>Quick Links</h5>
              <a href="resources.html">Resources</a>
              <a href="get-in-touch.html">Get in Touch</a>
              <a href="about-us.html">About Us</a>
              <a href="signin.html">Sign in</a>
            </div>
            <div>
              <h5>Follow Us</h5>
              <a href="#linkedin">LinkedIn</a>
              <a href="https://github.com/Novasky-venkat/skygenticai" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#x">X</a>
              <a href="#youtube">YouTube</a>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-legal">
            <span>COPYRIGHT © 2026 SkyGentic AI ALL RIGHTS RESERVED.</span>
            <nav className="ft-policy" aria-label="Footer legal links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#cookies">Cookies</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="ft-bigword" aria-hidden="true">
        <img src="uploads/skygentic-wordmark.png" alt="SkyGentic AI" />
      </div>

      <style>{`
        .ft {
          --ft-wordmark-drop: 28px;
          --ft-wordmark-visible-h: min(139px, 10.24vw);
          background: var(--dark-bg);
          color: var(--dark-ink);
          font-family: var(--font-body);
          font-weight: 400;
          padding: var(--space-9) 0 0;
          position: relative;
          overflow: hidden;
        }
        .ft::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: max(88px, calc(var(--ft-wordmark-visible-h) - var(--ft-wordmark-drop) + 8px));
          z-index: 1;
          width: min(calc(100% - 48px), var(--max-w));
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 18%, rgba(94,234,212,0.16) 50%, rgba(255,255,255,0.14) 82%, transparent 100%);
          transform: translateX(-50%);
          pointer-events: none;
        }
        .ft .container {
          position: relative;
          z-index: 2;
        }
        .ft .pill { background: rgba(255,255,255,0.05); border-color: var(--dark-border); color: var(--dark-ink-soft); }
        .ft-logo-img {
          width: min(330px, 100%);
          height: 80px;
          object-fit: contain;
          object-position: left center;
          display: block;
        }
        .ft-top {
          display: grid;
          grid-template-columns: minmax(500px, 0.9fr) minmax(0, 1.1fr);
          gap: 56px;
          padding-bottom: 56px;
        }
        @media (max-width: 880px) { .ft-top { grid-template-columns: 1fr; } }
        .ft-tag {
          color: var(--dark-ink-soft);
          font-size: 15px;
          max-width: 56ch;
          margin-top: 16px;
        }
        .ft-cols {
          display: grid;
          grid-template-columns: repeat(3, max-content);
          justify-self: end;
          justify-content: end;
          gap: clamp(44px, 5vw, 80px);
        }
        @media (max-width: 880px) {
          .ft-cols {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            justify-self: stretch;
            justify-content: stretch;
            gap: 32px;
          }
        }
        @media (max-width: 700px) { .ft-cols { grid-template-columns: repeat(2, 1fr); } }
        .ft-cols h5 {
          font-family: var(--font-body);
          font-size: 13px;
          letter-spacing: 0.01em;
          color: var(--dark-ink-mute);
          margin: 0 0 16px;
          font-weight: 500;
        }
        .ft-cols a {
          display: flex;
          align-items: center;
          font-size: 14.5px;
          font-family: var(--font-body);
          font-weight: 400;
          color: var(--dark-ink-soft);
          min-height: 34px;
          width: fit-content;
          padding: 5px 10px;
          margin-left: -10px;
          border: 1px solid transparent;
          border-radius: var(--r-sm);
          transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
        }
        .ft-cols a:hover {
          color: var(--dark-ink);
          background: rgba(255, 255, 255, 0.055);
          border-color: rgba(255, 255, 255, 0.08);
          transform: translateX(2px);
        }
        .ft-bottom {
          padding: 22px 0 32px;
          font-size: 13.5px;
          color: var(--dark-ink-mute);
          position: relative;
          top: -38px;
          z-index: 2;
        }
        .ft-legal {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
        }
        .ft-legal span {
          color: var(--dark-ink-soft);
          opacity: 0.78;
          line-height: 1.4;
        }
        .ft-policy {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 34px;
        }
        .ft-policy a {
          color: var(--dark-ink-soft);
          line-height: 1.4;
          opacity: 0.58;
          transition: color 0.18s ease, opacity 0.18s ease;
        }
        .ft-policy a:hover {
          color: var(--dark-ink);
          opacity: 1;
        }
        @media (max-width: 640px) {
          .ft-legal {
            flex-direction: column;
            justify-content: center;
            gap: 12px;
            text-align: center;
          }
          .ft-policy {
            justify-content: center;
            gap: 18px;
            flex-wrap: wrap;
          }
        }
        .ft-bigword {
          position: absolute;
          bottom: calc(-1 * var(--ft-wordmark-drop));
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          width: min(1600px, 118vw);
          height: clamp(160px, 22vw, 320px);
          pointer-events: none;
          user-select: none;
          text-align: center;
          opacity: 0.03;
        }
        .ft-bigword::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 34%;
          background: linear-gradient(180deg, rgba(6,7,13,0), rgba(6,7,13,0.68));
        }
        .ft-bigword img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
          filter: brightness(1.65) saturate(1.18);
        }
      `}</style>
    </footer>
  );
}

// ============ CHAT WIDGET ============
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { who: "bot", text: "Hi 👋 I'm Nova, SkyGentic.ai's assistant. Ask me about our agents or book a demo." }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing]);

  const send = (text) => {
    if (!text.trim()) return;
    setMsgs(m => [...m, { who: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const responses = {
        demo: "Great — I can book a 20-min demo with our team. What's your work email?",
        agent: "We ship 5 production-ready agents: Conversational, Voice, Sales, Workflow, and Knowledge. Each is fine-tuned to your data and tools. Which fits your use case?",
        default: "I can point you in the right direction. For specifics, let me connect you with our team — or check out Services in the menu."
      };
      const key = /demo|meeting|call/i.test(text) ? "demo" : /agent|service/i.test(text) ? "agent" : "default";
      setMsgs(m => [...m, { who: "bot", text: responses[key] }]);
    }, 900);
  };

  return (
    <>
      {open && (
        <div className="cw">
          <div className="cw-head">
            <div className="flex items-center gap-3">
              <div className="cw-avatar">
                <svg viewBox="0 0 32 32" width="22" height="22">
                  <defs>
                    <linearGradient id="cwg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="14" fill="url(#cwg)" opacity="0.2" />
                  <circle cx="16" cy="16" r="5" fill="url(#cwg)" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Nova Assistant</div>
                <div style={{ fontSize: 12, color: "var(--ink-soft)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="dot-pulse" style={{ width: 6, height: 6 }}></span> Online · replies instantly
                </div>
              </div>
            </div>
            <button className="cw-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="cw-body" ref={scrollRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`cw-msg cw-msg--${m.who}`}>
                {m.text}
              </div>
            ))}
            {typing && <div className="cw-msg cw-msg--bot cw-typing"><span></span><span></span><span></span></div>}
          </div>
          <div className="cw-suggest">
            {["What are your services?", "Plan a rollout", "Book a demo"].map(s => (
              <button key={s} onClick={() => send(s)}>{s}</button>
            ))}
          </div>
          <form className="cw-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              autoFocus
            />
            <button type="submit" aria-label="Send">→</button>
          </form>
        </div>
      )}

      <button className={`cw-fab ${open ? "cw-fab--open" : ""}`} onClick={() => setOpen(!open)} aria-label="Chat">
        {open ? "×" : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 0 1 9-9c4.97 0 9 3.58 9 8s-4.03 8-9 8c-1.13 0-2.21-.18-3.2-.5L3 21l1.5-4.5A8.93 8.93 0 0 1 3 12Z" />
          </svg>
        )}
        {!open && <span className="cw-fab-dot"></span>}
      </button>

      <style>{`
        .cw-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent-2));
          color: white;
          border: none;
          box-shadow: 0 12px 30px rgba(59,130,246,0.4);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          transition: transform 0.2s ease;
        }
        .cw-fab:hover { transform: scale(1.06); }
        .cw-fab--open { background: var(--ink); box-shadow: var(--shadow-md); }
        .cw-fab-dot {
          position: absolute;
          top: 4px; right: 4px;
          width: 12px; height: 12px;
          background: #ef4444;
          border-radius: 50%;
          border: 2px solid white;
        }
        .cw {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 540px;
          max-height: calc(100vh - 120px);
          background: #0c0e16;
          border: 1px solid var(--dark-border-strong);
          border-radius: var(--r-xl);
          box-shadow: 0 12px 48px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 98;
          animation: cwIn 0.22s ease;
          color: white;
        }
        @keyframes cwIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cw-head {
          padding: 14px 18px;
          border-bottom: 1px solid var(--dark-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,255,255,0.03);
        }
        .cw-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #06070d;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
        }
        .cw-close {
          background: none; border: none; font-size: 24px;
          color: var(--ink-mute); line-height: 1;
          width: 28px; height: 28px;
          border-radius: 50%;
        }
        .cw-close:hover { background: rgba(255,255,255,0.08); }
        .cw-body {
          flex: 1;
          overflow-y: auto;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cw-msg {
          max-width: 80%;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 14px;
          line-height: 1.45;
          color: white;
        }
        .cw-msg--bot {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        .cw-msg--user {
          background: var(--accent);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        .cw-typing { display: flex; gap: 4px; padding: 14px 16px; }
        .cw-typing span {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--ink-mute);
          animation: typ 1.2s infinite;
        }
        .cw-typing span:nth-child(2) { animation-delay: 0.15s; }
        .cw-typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes typ {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
        .cw-suggest {
          padding: 0 14px 8px;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .cw-suggest button {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .cw-suggest button:hover {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }
        .cw-input {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border-top: 1px solid var(--dark-border);
        }
        .cw-input input {
          flex: 1;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0,0,0,0.2);
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          color: white;
        }
        .cw-input input:focus { border-color: var(--accent); background: rgba(0,0,0,0.4); }
        .cw-input button {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: white;
          color: #0c0e16;
          border: none;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cw-input button:hover { background: var(--accent); color: white; }
      `}</style>
    </>
  );
}

// ============ REVEAL ON SCROLL hook ============
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

Object.assign(window, { Nav, Header, Footer, ChatWidget, useReveal });
