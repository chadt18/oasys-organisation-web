(() => {
  "use strict";
  const buttons = [...document.querySelectorAll("[data-ps-role]")];
  const panels = [...document.querySelectorAll("[data-ps-panel]")];
  if (buttons.length === 0 || panels.length === 0) return;
  for (const button of buttons) {
    button.addEventListener("click", () => {
      const role = button.dataset.psRole;
      if (!panels.some(panel => panel.dataset.psPanel === role)) return;
      for (const item of buttons) item.setAttribute("aria-pressed", String(item === button));
      for (const panel of panels) {
        const active = panel.dataset.psPanel === role;
        panel.hidden = !active;
        if (!active) for (const detail of panel.querySelectorAll("details[open]")) detail.open = false;
      }
    });
  }
})();