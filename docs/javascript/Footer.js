const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
  <footer id="contact-us" class="bg-[linear-gradient(135deg,#041127_0%,#061b44_52%,#002777_100%)] text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-white/10 py-10 sm:py-12">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#9fc0ff]">Dryer Vent Cleaning Appleton</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Cleaner vents, safer homes, and a more premium service experience.</h2>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              Proudly serving Appleton and the Fox Cities with dryer vent cleaning focused on safety, airflow,
              efficiency, and peace of mind for your household.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <a href="tel:+19202532833" class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#002777] transition hover:bg-[#edf3ff]">
              Call (920) 253-2833
            </a>
            <a href="faq.html" class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16">
              View FAQ
            </a>
          </div>
        </div>
      </div>

      <div class="grid gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-14">
        <div class="lg:col-span-5">
          <a href="index.html" class="inline-flex items-center rounded-[1.5rem] bg-white p-3 shadow-[0_20px_50px_rgba(1,10,28,0.25)]">
            <img src="./docs/assets/logo.png" alt="Dryer Vent Cleaning Appleton logo" class="h-14 w-auto object-contain sm:h-16" />
          </a>

          <p class="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
            We keep your home safe from lint fires and your dryer running efficiently because your family's peace of mind is everything.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-semibold text-white">Appleton</span>
            <span class="rounded-full border border-[#9fc0ff]/30 bg-[#9fc0ff]/10 px-3 py-2 text-xs font-semibold text-[#b7ceff]">Fox Cities</span>
            <span class="rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-semibold text-white">Lint Fire Prevention</span>
            <span class="rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-semibold text-white">Dryer Efficiency</span>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <a href="https://www.facebook.com/dryerventapple/" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#9fc0ff]/45 hover:bg-white/12 hover:text-[#b7ceff]" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/dryerventapple/" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#9fc0ff]/45 hover:bg-white/12 hover:text-[#b7ceff]" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com/dryerventapple" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#9fc0ff]/45 hover:bg-white/12 hover:text-[#b7ceff]" aria-label="X">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.pinterest.com/dryerventapple/" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#9fc0ff]/45 hover:bg-white/12 hover:text-[#b7ceff]" aria-label="Pinterest">
              <i class="fa-brands fa-pinterest-p"></i>
            </a>
            <a href="https://www.youtube.com/@user-es2bg1ez2j" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#9fc0ff]/45 hover:bg-white/12 hover:text-[#b7ceff]" aria-label="YouTube">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@dryerventapple" target="_blank" rel="noreferrer" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-white transition hover:border-[#9fc0ff]/45 hover:bg-white/12 hover:text-[#b7ceff]" aria-label="TikTok">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Quick Links</p>
              <ul class="mt-4 space-y-3 text-sm text-white/72">
                <li><a class="transition hover:text-[#b7ceff]" href="index.html">Home</a></li>
                <li><a class="transition hover:text-[#b7ceff]" href="about.html">About</a></li>
                <li><a class="transition hover:text-[#b7ceff]" href="dryer-vent-cleaning.html">Dryer Vent Cleaning</a></li>
                <li><a class="transition hover:text-[#b7ceff]" href="faq.html">FAQ</a></li>
                <li><a class="transition hover:text-[#b7ceff]" href="contact.html">Contact</a></li>
              </ul>
            </div>

            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Contact Info</p>
              <ul class="mt-4 space-y-3 text-sm text-white/72">
                <li><a class="transition hover:text-[#b7ceff]" href="tel:+19202532833">(920) 253-2833</a></li>
                <li>1835 E. Edgewood Dr. Suite 105</li>
                <li>Appleton, WI 54913</li>
                <li>Hours: 8:00 AM - 6:00 PM</li>
                <li>Serving Appleton and the Fox Cities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 py-5">
        <div class="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p class="text-sm text-white/55">&copy; <span id="yearNow"></span> Dryer Vent Cleaning Appleton. All rights reserved.</p>
          <p class="text-sm text-white/45">Premium dryer vent cleaning for Appleton and the Fox Cities.</p>
        </div>
      </div>
    </div>

    <script>
      (function () {
        const y = document.getElementById("yearNow");
        if (y) y.textContent = String(new Date().getFullYear());
      })();
    </script>
  </footer>
  `;
}
