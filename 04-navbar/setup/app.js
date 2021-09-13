// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.getElementsByClassName("nav-toggle")[0];
const linkContainer = document.getElementsByClassName("links")[0];


toggleBtn.addEventListener("click", () => {
  linkContainer.classList.toggle('show-links')
});
