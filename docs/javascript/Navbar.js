const navbar = document.getElementById("navbar");

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const isHomePage = currentPage === "index.html" || currentPage === "";

const navLinks = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "dryer-vent-cleaning.html", label: "Dryer Vent Cleaning" },
  { href: "faq.html", label: "FAQ" },
  { href: "contact.html", label: "Contact" }
];

const desktopLinks = navLinks
  .map((link) => `<li><a class="navLink text-sm font-bold text-slate-900 transition hover:text-[#002777]" href="${link.href}">${link.label}</a></li>`)
  .join("");

const mobileLinks = navLinks
  .map(
    (link) => `<li><a class="flex items-center rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-[#f5f8ff]" href="${link.href}">${link.label}</a></li>`
  )
  .join("");

if (navbar) {
  navbar.innerHTML = `
    <header id="siteHeader" data-state="top" class="fixed inset-x-0 top-0 z-50">
      <div class="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div id="navBar" class="flex items-center justify-between gap-4 rounded-full border border-slate-200/90 bg-white/96 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 sm:px-5">
          <a href="index.html" class="inline-flex shrink-0 items-center rounded-full bg-white/95 p-2 shadow-[0_12px_34px_rgba(2,23,70,0.12)]">
            <img src="./docs/assets/logo.png" alt="Dryer Vent Cleaning Appleton logo" class="h-10 w-auto object-contain sm:h-11" />
          </a>

          <nav class="hidden md:block">
            <ul class="flex items-center justify-center gap-7 lg:gap-9">
              ${desktopLinks}
            </ul>
          </nav>

          <div class="hidden shrink-0 items-center gap-3 md:flex">
            <a href="tel:+19202532833" id="navCallBtn" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-[#f5f8ff] px-5 py-2.5 text-sm font-semibold text-[#002777] transition hover:bg-[#edf3ff]">
              Call Now
            </a>
            <a href="contact.html#contact-form" id="navCtaBtn" class="inline-flex items-center justify-center rounded-full bg-[#002777] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b3da8]">
              Book Service
            </a>
          </div>

          <button
            id="menuBtn"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-[#f5f8ff] text-slate-900 transition hover:bg-[#edf3ff] md:hidden"
          >
            <i class="fa-solid fa-bars text-base"></i>
          </button>
        </div>
      </div>
    </header>

    <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-slate-950/45 opacity-0 transition-opacity duration-300"></div>

    <aside
      id="menuPanel"
      class="fixed left-0 top-0 z-[70] h-full w-[88%] max-w-sm -translate-x-full overflow-y-auto bg-white shadow-2xl shadow-slate-900/15 transition-transform duration-300 ease-out"
      aria-hidden="true"
    >
      <div class="flex items-center justify-between border-b border-slate-200 px-5 py-5">
        <a href="index.html" class="inline-flex items-center rounded-2xl bg-[#f5f8ff] p-3">
          <img src="./docs/assets/logo.png" alt="Dryer Vent Cleaning Appleton logo" class="h-10 w-auto object-contain" />
        </a>

        <button
          id="closeBtn"
          type="button"
          aria-label="Close menu"
          class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#f5f8ff] text-slate-900 transition hover:bg-slate-100"
        >
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <div class="px-5 py-6">
        <nav>
          <ul class="space-y-2">
            ${mobileLinks}
          </ul>
        </nav>

        <div class="mt-6 grid gap-3">
          <a href="tel:+19202532833" class="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-[#f5f8ff] px-5 py-3 text-sm font-semibold text-[#002777] transition hover:bg-[#edf3ff]">
            Call (920) 253-2833
          </a>
          <a href="contact.html#contact-form" class="inline-flex w-full items-center justify-center rounded-2xl bg-[#002777] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b3da8]">
            Book Service
          </a>
        </div>
      </div>
    </aside>
  `;
}

const siteHeader = document.getElementById("siteHeader");
const menuBtnEl = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");
const panelLinks = panel ? panel.querySelectorAll("a") : [];

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden", "opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("-translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

if (menuBtnEl) menuBtnEl.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);
panelLinks.forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());
setMenuClosed(true);
