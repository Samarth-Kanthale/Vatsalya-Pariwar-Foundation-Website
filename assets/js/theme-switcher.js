document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "main";
  const themeLink = document.getElementById("theme-style");
  const switcher = document.getElementById("theme-switcher");

  // Apply saved theme
  const themePath = theme === "main" ? "assets/css/main.css" : `assets/css/themes/${theme}.css`;
  if (themeLink) themeLink.href = themePath;
  if (switcher) switcher.value = theme;

  // Handle dropdown change
  if (switcher) {
    switcher.addEventListener("change", () => {
      const selected = switcher.value;
      const newPath = selected === "main" ? "assets/css/main.css" : `assets/css/themes/${selected}.css`;
      if (themeLink) themeLink.href = newPath;
      localStorage.setItem("theme", selected);
    });
  }
});