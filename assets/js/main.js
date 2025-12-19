window.addEventListener("load", () => {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  }
});

document.querySelectorAll("i[id^='loc_']").forEach(button => {
  button.addEventListener("click", () => {
    const row = button.closest(".row");

    row.querySelectorAll(".episode, .event").forEach(parent => {
      const p = parent.querySelector("p");
      if (!p) return;

      const target = p.querySelector("a") || p;

      const defaultText = target.dataset.default || target.textContent;
      const locText = parent.dataset.loc || defaultText;

      if (!target.dataset.default) target.dataset.default = defaultText;

      target.textContent = target.textContent === defaultText ? locText : defaultText;
    });
  });
});


