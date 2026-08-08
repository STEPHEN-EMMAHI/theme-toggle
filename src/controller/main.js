import { lightModeTheme } from "../model/lightmode.js";
import { darkModeTheme } from "../model/darkmode.js";

const LIGHT_MODE = document.getElementById("lightModeBtn");
LIGHT_MODE.addEventListener("click", lightModeTheme);

const DARK_MODE = document.getElementById("darkModeBtn");
DARK_MODE.addEventListener("click", darkModeTheme);
