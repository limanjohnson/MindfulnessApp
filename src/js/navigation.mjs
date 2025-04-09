
export function navigationMenu() {
  const navigationMenuElement = document.querySelector("#navigationMenu");

  navigationMenuElement.innerHTML = `
  <a href="index.html">Dashboard</a>
  <a href="#">Activites</a>
  <a href="#">Profile</a>
  `;
}
