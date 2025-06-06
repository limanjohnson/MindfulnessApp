export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback
){
  parentElement.innerHTML = "";
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
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = await document.getElementById("site-header");
  renderWithTemplate(headerTemplate, headerElement);

  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = await document.getElementById("site-footer");
  renderWithTemplate(footerTemplate, footerElement);
}

export function mobileMenuToggle() {
  const menuButton = document.getElementById("menuButton");
  const slidingMenu = document.getElementById("slidingMenu");
  const closeButton = document.getElementById("closeButton");

  menuButton.addEventListener("click", () => {
    slidingMenu.classList.add("open")
  });

  closeButton.addEventListener("click", () => {
    slidingMenu.classList.remove("open")
  });

  document.addEventListener("click", (event) => {
    if (!slidingMenu.contains(event.target) && !menuButton.contains(event.target)
    ) {
      slidingMenu.classList.remove("open");
    }
  });
}

 //add a comment
