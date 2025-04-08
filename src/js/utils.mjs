export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback
){
  parentElement.insertAdjacentHTML("afterbegin", template);
  // parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

// fetch the content of an HTML file from given path
export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../public/partials/header.html");
  const headerElement = await document.getElementById("site-header");
  renderWithTemplate(headerTemplate, headerElement);

  const footerTemplate = await loadTemplate("../public/partials/footer.html");
  const footerElement = await document.getElementById("site-footer");
  renderWithTemplate(footerTemplate, footerElement);
}

export function hamburgerMenu() {
  const hamburgerElement = document.querySelector(".hamburger-container")
  const desktopLinksElements = document.querySelector(".links")
  const loginElement = document.querySelector(".login")

  if (!hamburgerElement || !desktopLinksElements || !loginElement) {
    console.error("Hamburger menu elements no found.")
    return;
  }

  if (window.matchMedia("(max-width: 675px)").matches) {
    // Show mobile elements
    hamburgerElement.style.display = "flex";

    // Hide links elements
    desktopLinksElements.style.display = "none";

    // Hide the login elements
    loginElement.style.display = "none";

  } else {
    // Hide desktop elements
    hamburgerElement.style.display = "none";

    // Show links elements
    desktopLinksElements.style.display = "flex";

    // Show the login elements
    loginElement.style.display = "flex";
  }
}

export function toggleMenu() {
  const hamburgerElement = document.querySelector(".hamburger-container")
  const menuOverlay = document.getElementById("menuOverlay")

  // Open modal after clicking hamburger menu
  hamburgerElement.addEventListener("click", () => {
    menuOverlay.showModal();
  });

  // Close modal after clicking on link or outside.
  menuOverlay.addEventListener("click", () => {
    if (event.target === menuOverlay) {
      menuOverlay.close();
    }
  })
}



 //add a comment
