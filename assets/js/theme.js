(() => {
  const storageKey = "theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === "dark" || saved === "light") return saved;
    return "light";
  }

  const initial = getInitialTheme();
  applyTheme(initial);

  window.toggleTheme = function toggleTheme() {
    const next = root.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(storageKey, next);
    applyTheme(next);
    const button = document.querySelector("[data-theme-toggle]");
    if (button) {
      button.setAttribute("aria-pressed", String(next === "dark"));
      button.textContent = next === "dark" ? "Light mode" : "Dark mode";
    }
  };

  window.syncThemeToggleLabel = function syncThemeToggleLabel() {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    const dark = root.classList.contains("dark");
    button.setAttribute("aria-pressed", String(dark));
    button.textContent = dark ? "Light mode" : "Dark mode";
  };
})();
