import { darkModeTheme } from "../model/darkmode.js";
import { lightModeTheme } from "../model/lightmode.js";

export function handleSystemThemeChange(e) {
  if (e.matches) {
    darkModeTheme();
  } else {
    lightModeTheme();
  }
}
