import { loadHeaderFooter, toggleMenu, hamburgerMenu } from "./utils.mjs"

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter().then(() => {
    toggleMenu();
    hamburgerMenu();
  });
  window.addEventListener("resize", hamburgerMenu);

})


