function openNav() {
  const sidenav = document.querySelector(".sidenav");
  if (sidenav) {
    sidenav.style.width = "250px";
  }
}

function closeNav() {
  const sidenav = document.querySelector(".sidenav");
  if (sidenav) {
    sidenav.style.width = "0";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  if (menuIcon) {
    menuIcon.addEventListener("click", openNav);
  }

  const closeBtn = document.querySelector(".closebtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  }

  document.querySelectorAll(".sidenav a").forEach(link => {
    link.addEventListener("click", closeNav);
  });
});
