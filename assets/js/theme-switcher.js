document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "main";
  const themeLink = document.getElementById("theme-style");
  const switcher = document.getElementById("theme-switcher");

  const themePath = theme === "main" ? "" : `assets/css/themes/${theme}.css`;
  if (themeLink) themeLink.href = themePath;
  if (switcher) switcher.value = theme;

  if (switcher) {
    switcher.addEventListener("change", () => {
      const selected = switcher.value;
      const newPath = selected === "main" ? "" : `assets/css/themes/${selected}.css`;
      if (themeLink) themeLink.href = newPath;
      localStorage.setItem("theme", selected);
    });
  }
});