const toggleBtn = document.getElementsByClassName("sidebar-toggle")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];
const sideBar = document.getElementsByClassName("sidebar")[0];

[toggleBtn, sideBar].forEach((btn) => {
  btn.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar");
  });
});
