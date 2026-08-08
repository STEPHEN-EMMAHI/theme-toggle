export function lightModeTheme() {
  // update icon visual styles
  const DARK_MODE = document.getElementById("darkMode");
  DARK_MODE.classList.remove(
    "text-amber-500",
    "scale-130",
    "transition-transform",
    "duration-200",
    "ease-in-out",
  );
  DARK_MODE.classList.add("text-zinc-400");

  const LIGHT_MODE = document.getElementById("lightMode");
  LIGHT_MODE.classList.remove("text-zinc-400");
  LIGHT_MODE.classList.add(
    "text-amber-500",
    "scale-130",
    "transition-transform",
    "duration-200",
    "ease-in-out",
  );
}
