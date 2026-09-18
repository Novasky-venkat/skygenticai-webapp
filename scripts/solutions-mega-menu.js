(function () {
  const styleId = "solutions-mega-menu-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
.service-dropdown--solutions.solutions-mega{position:fixed;top:72px;left:50%;width:min(calc(100vw - var(--space-12)),620px);min-width:0;padding:var(--space-8);display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-10);background:var(--color-card);border-radius:var(--radius-2xl);box-shadow:var(--shadow-ambient-card);transform:translate(-50%,8px)}
.service-dropdown--solutions.solutions-mega::before{top:-28px;left:0;right:0;height:28px}
.services-menu:not(.is-selection-closed):hover .service-dropdown--solutions.solutions-mega,.services-menu:not(.is-selection-closed):focus-within .service-dropdown--solutions.solutions-mega,.services-menu.is-open .service-dropdown--solutions.solutions-mega{transform:translate(-50%,0)}
.solutions-mega-column{display:flex;flex-direction:column;gap:var(--space-3)}
.solutions-mega-column .service-dropdown-heading{padding:0 0 var(--space-3)}
.solutions-mega-item{display:grid;grid-template-columns:48px minmax(0,1fr);align-items:center;gap:var(--space-3);min-height:48px;padding:var(--space-2) 0;color:var(--color-body);text-decoration:none;border-radius:var(--radius-md);transition:color var(--transition-fast),transform var(--transition-fast)}
.solutions-mega-icon{width:48px;height:48px;display:inline-flex;align-items:center;justify-content:center;border-radius:var(--radius-sm);background:var(--color-blue-50);transition:background-color var(--transition-fast),transform var(--transition-fast)}
.solutions-mega-icon img{width:24px;height:24px;display:block}
.solutions-mega-copy strong{display:block;color:var(--color-heading);font-family:var(--font-family-body);font-size:1rem;font-weight:700;line-height:1.25}
.solutions-mega-item:hover,.solutions-mega-item:focus-visible{color:var(--color-primary-blue);transform:translateX(2px);outline:2px solid transparent}
.solutions-mega-item:focus-visible{outline:2px solid var(--focus-ring-color);outline-offset:var(--focus-ring-offset)}
.solutions-mega-item:hover .solutions-mega-icon,.solutions-mega-item:focus-visible .solutions-mega-icon{background:var(--color-blue-100);transform:translateY(-1px)}
.solutions-mega-item:active{transform:translateX(0)}
@media (max-width:1180px){.service-dropdown--solutions.solutions-mega{width:min(calc(100vw - var(--space-8)),560px);gap:var(--space-6);padding:var(--space-6)}}
@media (prefers-reduced-motion:reduce){.service-dropdown--solutions.solutions-mega,.services-menu:not(.is-selection-closed):hover .service-dropdown--solutions.solutions-mega,.services-menu:not(.is-selection-closed):focus-within .service-dropdown--solutions.solutions-mega,.services-menu.is-open .service-dropdown--solutions.solutions-mega{transform:translate(-50%,0)}.solutions-mega-item,.solutions-mega-icon{transition-duration:.01ms}}
`;
    document.head.appendChild(style);
  }

  const useCases = [
    ["Customer Care", "customer-care.html", "assets/navbar/customer-care.svg"],
    ["Workflow automation", "workflow-automation.html", "assets/navbar/workflow-automation.svg"]
  ];
  const industries = [
    ["Real Estate", "real-estate.html", "assets/navbar/real-estate.svg"],
    ["Home Services", "home-services.html", "assets/navbar/home-services.svg"],
    ["Travel & Hospitality", "travel-hospitality.html", "assets/navbar/travel-hospitality.svg"]
  ];
  const item = ([label, href, icon]) => `<a class="solutions-mega-item" href="${href}" role="menuitem"><span class="solutions-mega-icon" aria-hidden="true"><img src="${icon}" alt="" width="24" height="24"></span><span class="solutions-mega-copy"><strong>${label}</strong></span></a>`;

  const desktopMenu = `
    <div class="solutions-mega-column" role="presentation">
      <span class="service-dropdown-heading" role="presentation">Use Case</span>
      ${useCases.map(item).join("")}
    </div>
    <div class="solutions-mega-column" role="presentation">
      <span class="service-dropdown-heading" role="presentation">Industries</span>
      ${industries.map(item).join("")}
    </div>`;

  const mobileMenu = `
    <span class="mobile-submenu-heading">Use Case</span>
    ${useCases.map(([label, href, icon]) => `<a class="mobile-submenu-link" href="${href}"><img class="service-icon-img" src="${icon}" alt="" width="32" height="32"><span><strong>${label}</strong></span></a>`).join("")}
    <span class="mobile-submenu-heading">Industries</span>
    ${industries.map(([label, href, icon]) => `<a class="mobile-submenu-link" href="${href}"><img class="service-icon-img" src="${icon}" alt="" width="32" height="32"><span><strong>${label}</strong></span></a>`).join("")}`;

  document.querySelectorAll("[data-solutions-menu]").forEach((menu) => {
    if (!menu.hasChildNodes()) menu.innerHTML = desktopMenu;
  });
  document.querySelectorAll("[data-mobile-solutions-menu]").forEach((menu) => {
    if (!menu.hasChildNodes()) menu.innerHTML = mobileMenu;
  });

  document.querySelectorAll(".services-menu").forEach((menu) => {
    const trigger = menu.querySelector(".services-menu-trigger");
    if (!trigger || trigger.dataset.dropdownTriggerBound === "true") return;
    trigger.dataset.dropdownTriggerBound = "true";
    trigger.setAttribute("role", "button");

    const openMenu = () => {
      document.querySelectorAll(".services-menu.is-open").forEach((openMenuItem) => {
        if (openMenuItem !== menu) {
          openMenuItem.classList.remove("is-open");
          openMenuItem.querySelector(".services-menu-trigger")?.setAttribute("aria-expanded", "false");
        }
      });
      menu.classList.remove("is-selection-closed");
      menu.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openMenu();
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key !== " ") return;
      event.preventDefault();
      openMenu();
    });
  });

  document.querySelectorAll('.mobile-menu-item > a.mobile-menu-row[href="platform.html"]').forEach((row) => {
    const panel = row.parentElement?.querySelector(".mobile-submenu");
    if (!panel) return;
    if (!panel.id) panel.id = "mobile-services-panel";

    const button = document.createElement("button");
    button.className = row.className;
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", panel.id);
    button.innerHTML = `${row.innerHTML}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="9 6 15 12 9 18"></polyline></svg>`;
    row.replaceWith(button);
  });
})();
