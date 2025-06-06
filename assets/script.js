document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon"); 
  if(menuIcon) {
    menuIcon.addEventListener("click", openNav);
  }
})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}