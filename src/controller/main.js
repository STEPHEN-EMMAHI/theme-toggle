import { lightModeTheme } from "../model/lightmode.js";
import { darkModeTheme } from "../model/darkmode.js";

// checking the system theme when page loads.
// if the system theme is dark, apply dark theme styles
// else if the system theme is light, apply light theme styles
const IS_DARK_MODE = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (IS_DARK_MODE) {
  darkModeTheme();
  console.log("user prefers dark mode");
} else {
  lightModeTheme();
  console.log("user prefers light mode");
}

// apply styles when light mode button is clicked
const LIGHT_MODE = document.getElementById("lightModeBtn");
LIGHT_MODE.addEventListener("click", lightModeTheme);

// apply styles when dark mode button is clicked
const DARK_MODE = document.getElementById("darkModeBtn");
DARK_MODE.addEventListener("click", darkModeTheme);
