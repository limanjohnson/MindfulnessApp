import { loadHeaderFooter, mobileMenuToggle } from "./utils.mjs"

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter().then(() => {
    mobileMenuToggle();
  });
})


