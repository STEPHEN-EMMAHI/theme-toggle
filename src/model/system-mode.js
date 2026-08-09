import { darkModeTheme } from "../model/darkmode.js";
import { lightModeTheme } from "../model/lightmode.js";

export function handleSystemThemeChange(e) {
  if (e.matches) {
    darkModeTheme();
    console.log("user prefers dark mode");
  } else {
    lightModeTheme();
    console.log("user prefers light mode");
  }
}
