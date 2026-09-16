(function () {
  const headerTarget = document.querySelector("[data-site-header]");
  const footerTarget = document.querySelector("[data-site-footer]");

  if (headerTarget && !headerTarget.hasChildNodes()) {
    headerTarget.innerHTML = `
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header class="navbar-wrapper" role="banner">
    <nav class="navbar-container" aria-label="Main Navigation">
      <button class="mobile-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <span class="mobile-menu-icon mobile-menu-icon-open" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="mobile-menu-icon mobile-menu-icon-close" aria-hidden="true"><span></span><span></span></span>
      </button>
      <a href="/" class="nav-brand" aria-label="Skygentic AI Homepage">
        <img class="nav-wordmark" src="assets/Skygentic-wordmark.png" alt="Skygentic">
      </a>
      <ul class="nav-menu">
        <li class="services-menu">
          <a href="platform.html" class="services-menu-trigger" aria-expanded="false" aria-controls="services-dropdown" aria-haspopup="true">Platform
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="service-dropdown" id="services-dropdown" role="menu" aria-label="Platform List">
            <a class="service-dropdown-link" href="platform.html#forge" role="menuitem"><img class="service-icon-img" src="assets/architecture/icon-forge.png" alt="" width="32" height="32">Forge</a>
            <a class="service-dropdown-link" href="platform.html#swarm" role="menuitem"><img class="service-icon-img" src="assets/architecture/icon-swarm.png" alt="" width="32" height="32">Swarm</a>
            <a class="service-dropdown-link" href="platform.html#skyflow" role="menuitem"><img class="service-icon-img" src="assets/architecture/icon-skyflow.png" alt="" width="32" height="32">Skyflow</a>
            <a class="service-dropdown-link" href="platform.html#hive" role="menuitem"><img class="service-icon-img" src="assets/architecture/icon-hive.png" alt="" width="32" height="32">Hive</a>
            <a class="service-dropdown-link" href="platform.html#nova-ops" role="menuitem"><img class="service-icon-img" src="assets/architecture/icon-novaops.png" alt="" width="32" height="32">Nova Ops</a>
          </div>
        </li>
        <li class="services-menu solutions-menu">
          <a href="customer-care.html" class="services-menu-trigger" aria-expanded="false" aria-controls="solutions-dropdown" aria-haspopup="true">Solutions
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="service-dropdown service-dropdown--solutions solutions-mega" id="solutions-dropdown" role="menu" aria-label="Solutions List" data-solutions-menu></div>
        </li>
        <li><a href="features.html" class="nav-link"><span>Features</span></a></li>
        <li><a href="get-in-touch.html" class="nav-link"><span>Get In Touch</span></a></li>
        <li><a href="company.html" class="nav-link"><span>Company</span></a></li>
      </ul>
      <div class="nav-actions">
        <a href="signin.html" class="nav-signin">Sign In</a>
        <a href="schedule-demo.html" class="btn-primary" aria-label="Schedule an Enterprise Demo with Skygentic AI">
          <div class="btn-text-wrapper"><span class="btn-text-slide">Schedule Demo</span><span class="btn-text-slide">Schedule Demo</span></div>
          <div class="btn-icon-bubble" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div>
        </a>
      </div>
    </nav>
    <div class="mobile-menu-panel" id="mobile-menu" aria-hidden="true" inert>
      <div class="mobile-menu-content">
        <a href="schedule-demo.html" class="btn-primary mobile-menu-demo" aria-label="Schedule an Enterprise Demo with Skygentic AI">
          <div class="btn-text-wrapper"><span class="btn-text-slide">Schedule Demo</span><span class="btn-text-slide">Schedule Demo</span></div>
          <div class="btn-icon-bubble" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div>
        </a>
        <div class="mobile-menu-list">
          <div class="mobile-menu-item">
            <a class="mobile-menu-row" href="platform.html"><span>Platform</span></a>
            <div class="mobile-submenu" id="mobile-services-panel" hidden>
              <a class="mobile-submenu-link" href="platform.html#forge"><img class="service-icon-img" src="assets/architecture/icon-forge.png" alt="" width="32" height="32"><span><strong>Forge</strong></span></a>
              <a class="mobile-submenu-link" href="platform.html#swarm"><img class="service-icon-img" src="assets/architecture/icon-swarm.png" alt="" width="32" height="32"><span><strong>Swarm</strong></span></a>
              <a class="mobile-submenu-link" href="platform.html#skyflow"><img class="service-icon-img" src="assets/architecture/icon-skyflow.png" alt="" width="32" height="32"><span><strong>Skyflow</strong></span></a>
              <a class="mobile-submenu-link" href="platform.html#hive"><img class="service-icon-img" src="assets/architecture/icon-hive.png" alt="" width="32" height="32"><span><strong>Hive</strong></span></a>
              <a class="mobile-submenu-link" href="platform.html#nova-ops"><img class="service-icon-img" src="assets/architecture/icon-novaops.png" alt="" width="32" height="32"><span><strong>Nova Ops</strong></span></a>
            </div>
          </div>
          <div class="mobile-menu-item">
            <button class="mobile-menu-row" type="button" aria-expanded="false" aria-controls="mobile-solutions-panel"><span>Solutions</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg></button>
            <div class="mobile-submenu" id="mobile-solutions-panel" hidden data-mobile-solutions-menu></div>
          </div>
          <a class="mobile-menu-row" href="features.html"><span>Features</span></a>
          <a class="mobile-menu-row" href="get-in-touch.html"><span>Get In Touch</span></a>
          <a class="mobile-menu-row" href="company.html"><span>Company</span></a>
        </div>
      </div>
    </div>
  </header>`;
  }

  if (footerTarget && !footerTarget.hasChildNodes()) {
    footerTarget.innerHTML = `
  <footer class="footer-wrapper footer-compact" role="contentinfo">
    <div class="container">
      <div class="footer-upper">
        <div class="footer-brand-section">
          <a href="/" class="nav-brand footer-brand" aria-label="Skygentic AI Homepage"><img class="nav-wordmark footer-wordmark" src="assets/Skygentic-wordmark.png" alt="Skygentic"></a>
          <p class="footer-description">Agentic AI for ambitious businesses. Deploy intelligent agents that work, think and scale alongside your team.</p>
          <div class="footer-status" aria-label="All systems operational"><span class="footer-status-dot" aria-hidden="true"></span><span>All systems operational</span></div>
        </div>
        <nav class="footer-navigation" aria-label="Footer navigation">
          <div class="footer-nav-column">
            <h2 class="footer-col-title">Solutions</h2>
            <ul class="footer-link-list">
              <li><a href="customer-care.html" class="footer-link">Customer Care</a></li>
              <li><a href="workflow-automation.html" class="footer-link">Workflow automation</a></li>
              <li><a href="real-estate.html" class="footer-link">Real Estate</a></li>
              <li><a href="home-services.html" class="footer-link">Home Services</a></li>
              <li><a href="travel-hospitality.html" class="footer-link">Travel &amp; Hospitality</a></li>
            </ul>
          </div>
          <div class="footer-nav-column">
            <h2 class="footer-col-title">Quick Links</h2>
            <ul class="footer-link-list">
              <li><a href="features.html" class="footer-link">Features</a></li>
              <li><a href="get-in-touch.html" class="footer-link">Get in Touch</a></li>
              <li><a href="company.html" class="footer-link">Company</a></li>
              <li><a href="signin.html" class="footer-link">Sign in</a></li>
              <li><a href="schedule-demo.html" class="footer-link">Schedule Demo</a></li>
            </ul>
          </div>
          <div class="footer-nav-column">
            <h2 class="footer-col-title">Follow Us</h2>
            <ul class="footer-link-list">
              <li><a href="https://linkedin.com/company/skygenticai" class="footer-link" aria-label="Skygentic AI on LinkedIn">LinkedIn</a></li>
              <li><a href="https://github.com/skygenticai" class="footer-link" aria-label="Skygentic AI on GitHub">GitHub</a></li>
              <li><a href="https://x.com/skygenticai" class="footer-link" aria-label="Skygentic AI on X">X</a></li>
              <li><a aria-disabled="true" class="footer-link" aria-label="Skygentic AI on Instagram">Instagram</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="footer-bottom-bar">
        <div>&copy; 2026 Skygentic AI / Novasky. All rights reserved.</div>
        <nav class="footer-legal" aria-label="Footer legal links">
          <a href="privacy.html" class="footer-link">Privacy Policy</a>
          <a href="terms.html" class="footer-link">Terms of Service</a>
        </nav>
      </div>
    </div>
  </footer>`;
  }

  const navbar = document.querySelector(".navbar-wrapper");
  let navbarScrollTicking = false;

  function syncNavbarScrollState() {
    navbarScrollTicking = false;
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  window.addEventListener("scroll", () => {
    if (!navbarScrollTicking) {
      navbarScrollTicking = true;
      window.requestAnimationFrame(syncNavbarScrollState);
    }
  }, { passive: true });
  syncNavbarScrollState();

  document.querySelectorAll(".services-menu").forEach((menu) => {
    const trigger = menu.querySelector(".services-menu-trigger");
    const setMenuOpen = (isOpen) => {
      menu.classList.toggle("is-open", isOpen);
      if (isOpen) menu.classList.remove("is-selection-closed");
      trigger?.setAttribute("aria-expanded", String(isOpen));
    };

    menu.addEventListener("mouseenter", () => {
      menu.classList.remove("is-selection-closed");
      trigger?.setAttribute("aria-expanded", "true");
    });
    menu.addEventListener("mouseleave", () => {
      menu.classList.remove("is-selection-closed");
      if (!menu.classList.contains("is-open")) trigger?.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", (event) => {
      const selectedDropdownLink = event.target.closest(".service-dropdown-link, .solutions-mega-item");
      if (selectedDropdownLink && menu.contains(selectedDropdownLink)) {
        menu.classList.add("is-selection-closed");
        selectedDropdownLink.blur();
        trigger?.blur();
      }
      if (!menu.contains(event.target) || (selectedDropdownLink && menu.contains(selectedDropdownLink))) setMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && (trigger?.getAttribute("aria-expanded") === "true" || menu.classList.contains("is-open"))) {
        setMenuOpen(false);
        trigger?.focus();
      }
    });
  });

  const mobileMenuButton = document.querySelector(".mobile-menu-toggle");
  const mobileMenuPanel = document.querySelector("#mobile-menu");
  const mobileMenuRows = document.querySelectorAll(".mobile-menu-row[aria-controls]");
  const mobileNavLinks = document.querySelectorAll(".mobile-menu-panel a");

  function setMobileMenuOpen(isOpen) {
    navbar?.classList.toggle("is-mobile-menu-open", isOpen);
    document.body.classList.toggle("mobile-menu-open", isOpen);
    mobileMenuButton?.setAttribute("aria-expanded", String(isOpen));
    mobileMenuPanel?.setAttribute("aria-hidden", String(!isOpen));
    if (mobileMenuPanel) mobileMenuPanel.inert = !isOpen;
  }

  mobileMenuButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    setMobileMenuOpen(mobileMenuButton.getAttribute("aria-expanded") !== "true");
  });

  mobileMenuRows.forEach((row) => {
    row.addEventListener("click", () => {
      const panel = document.getElementById(row.getAttribute("aria-controls"));
      const isExpanded = row.getAttribute("aria-expanded") === "true";
      row.setAttribute("aria-expanded", String(!isExpanded));
      if (panel) panel.hidden = isExpanded;
    });
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });
})();
