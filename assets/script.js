document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon"); 
  if(menuIcon) {
    menuIcon.addEventListener("click", openNav);
  }
})

function openNav() {
  const sidenav =
  document.querySelector(".sidenav");
  if (sidenav) {
    sidenav.style.width = "250px"; 
  }
}

function closeNav() {
  const sidenav = 
  document.querySelector(".sidenav");
  if (sidenav) {
    sidenav.style.width = "0"; 
  }
}