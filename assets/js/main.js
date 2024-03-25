const menu = document.querySelector(".menu-icon");
const headerNavbar = document.querySelector(".navbar");
const bodyHideScroll = document.querySelector("body");
const ul = document.querySelector(".nav-ul");
function showMenu() {
    headerNavbar.classList.add("active");
    bodyHideScroll.classList.add("hide-scroll")
  };
  
  function hideMenu() {
    headerNavbar.classList.remove("active");
    bodyHideScroll.classList.remove("hide-scroll")
  }

  menu.addEventListener("click", showMenu);
  headerNavbar.addEventListener("click", hideMenu);

  ul.addEventListener("click", function (e) {
    e.stopPropagation();
})
