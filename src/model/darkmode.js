export function darkModeTheme() {
  // remove styles on lightMode Button
  const LIGHT_MODE = document.getElementById("lightModeBtn");
  LIGHT_MODE.classList.remove(
    "text-amber-500",
    "scale-130",
    "transition-transform",
    "duration-200",
    "ease-in-out",
  );
  LIGHT_MODE.classList.add("text-zinc-400");

  // add dark background color
  const CONTAINER = document.querySelector(".container");
  if (!CONTAINER.classList.contains("bg-zinc-900")) {
    CONTAINER.classList.add("bg-zinc-900");
  }

  const BUTTON_CONTAINER = document.querySelector(".buttonContainer");
  BUTTON_CONTAINER.classList.add("bg-zinc-800");

  // apply styles on darkMode Button
  const DARK_MODE = document.getElementById("darkModeBtn");
  DARK_MODE.classList.remove("text-zinc-400");
  DARK_MODE.classList.add(
    "text-amber-500",
    "scale-130",
    "transition-transform",
    "duration-200",
    "ease-in-out",
  );

  const APPEARANCE_MODE = document.querySelector(".appearance");
  APPEARANCE_MODE.classList.add("text-white");

  const TEXT_BOTTOM = document.querySelector(".textBottom");
  TEXT_BOTTOM.classList.add("text-white");
}
