import { lightModeTheme } from "../model/lightmode.js";
import { darkModeTheme } from "../model/darkmode.js";
import { handleSystemThemeChange } from "../model/system-mode.js";

// checking the system theme when page loads.
// if the system theme is dark, apply dark theme styles
// else if the system theme is light, apply light theme styles
const IS_DARK_MODE = window.matchMedia("(prefers-color-scheme: dark)");
// run immediately on page load
handleSystemThemeChange(IS_DARK_MODE);
IS_DARK_MODE.addEventListener("change", handleSystemThemeChange);

// apply styles when light mode button is clicked
const LIGHT_MODE_BTN = document.getElementById("lightModeBtn");
LIGHT_MODE_BTN.addEventListener("click", lightModeTheme);

// apply styles when dark mode button is clicked
const DARK_MODE_BTN = document.getElementById("darkModeBtn");
DARK_MODE_BTN.addEventListener("click", darkModeTheme);
