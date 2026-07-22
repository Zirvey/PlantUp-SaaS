(() => {
  const reveal = () => {
    document.querySelectorAll("[data-reveal], .stagger-item").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) el.classList.add("in");
    });
  };

  document.querySelectorAll(".hero-enter").forEach((el) => {
    requestAnimationFrame(() => el.classList.add("in"));
  });

  const count = (el) => {
    const target = Number(el.dataset.countUp);
    if (Number.isNaN(target)) return;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const decimals = Number(el.dataset.decimals || 0);
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      el.textContent =
        prefix +
        value.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) +
        suffix;
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll("[data-count-up]").forEach(count);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll("[data-count-up]").forEach((el) => {
    if (el.dataset.countImmediate === "true") count(el);
  });

  document.querySelectorAll("section").forEach((section) => io.observe(section));

  window.addEventListener("scroll", reveal, { passive: true });
  reveal();
})();
