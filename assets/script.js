document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.getElementById("mySidenav");
  const menuIcon = document.querySelector(".menu-icon");
  const closeBtn = document.querySelector(".closebtn");
  const links = document.querySelectorAll(".sidenav a");

  function openNav() {
    sidenav.style.width = "250px";
  }

  function closeNav() {
    sidenav.style.width = "0";
  }

  if (menuIcon) {
    menuIcon.addEventListener("click", openNav);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  }

  links.forEach(link => {
    link.addEventListener("click", closeNav);
  });
});
