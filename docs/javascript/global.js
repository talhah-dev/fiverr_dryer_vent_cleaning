const lenis = new Lenis({
  autoRaf: true,
});

const siteLoader = document.getElementById("siteLoader");
if (siteLoader) {
  document.body.classList.add("loader-active");
  siteLoader.innerHTML = `
    <div class="site-loader-panel">
      <div class="site-loader-spinner" aria-hidden="true"></div>
      <p class="site-loader-text">Loading</p>
    </div>
  `;
}

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

if (bottomToTopScroll) {
  bottomToTopScroll.innerHTML = `
    <div id="toTopBtn"
      class="fixed bottom-5 right-5 z-40 flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-[#002777] text-white shadow-[0_18px_40px_rgba(0,39,119,0.28)] transition-all duration-500 opacity-0 pointer-events-none hover:bg-[#0b3da8]">
      <i class="fa-solid fa-angle-up"></i>
    </div>
  `;
}

const toTopBtn = document.getElementById("toTopBtn");

const toggleToTop = () => {
  if (!toTopBtn) return;

  if (window.scrollY > 450) {
    toTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
    toTopBtn.classList.add("opacity-100", "translate-y-0");
  } else {
    toTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
    toTopBtn.classList.remove("opacity-100", "translate-y-0");
  }
};

window.addEventListener("scroll", toggleToTop, { passive: true });
toggleToTop();

if (toTopBtn) {
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const initFaqAccordions = () => {
  const faqItems = document.querySelectorAll("#faq details");

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    const answer = item.querySelector(".faq-answer");

    if (!summary || !answer) return;

    answer.style.height = item.open ? "auto" : "0px";

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      const isOpen = item.hasAttribute("open");

      if (isOpen) {
        answer.style.height = `${answer.scrollHeight}px`;

        requestAnimationFrame(() => {
          answer.style.height = "0px";
        });

        const handleClose = () => {
          item.removeAttribute("open");
          answer.removeEventListener("transitionend", handleClose);
        };

        answer.addEventListener("transitionend", handleClose, { once: true });
        return;
      }

      item.setAttribute("open", "");
      answer.style.height = "0px";

      requestAnimationFrame(() => {
        answer.style.height = `${answer.scrollHeight}px`;
      });

      const handleOpen = () => {
        answer.style.height = "auto";
        answer.removeEventListener("transitionend", handleOpen);
      };

      answer.addEventListener("transitionend", handleOpen, { once: true });
    });
  });
};

initFaqAccordions();

const hideSiteLoader = () => {
  if (!siteLoader) return;

  siteLoader.classList.add("is-hidden");
  document.body.classList.remove("loader-active");
};

if (document.readyState === "complete") {
  window.setTimeout(hideSiteLoader, 250);
} else {
  window.addEventListener(
    "load",
    () => {
      window.setTimeout(hideSiteLoader, 250);
    },
    { once: true }
  );
}

AOS.init({
  once: true,
  duration: 900,
  easing: "ease-out-cubic",
});
