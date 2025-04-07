import { loadHeaderFooter, openCloseMenu, hamburgerMenu } from "./utils.mjs"

loadHeaderFooter().then(() => {
  openCloseMenu();
  hamburgerMenu();
});
window.addEventListener("resize", hamburgerMenu);

