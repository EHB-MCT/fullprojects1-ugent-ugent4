// Show-hide hamburger-menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


const activePage = window.location.pathname;
const navLink2 = document.querySelectorAll('.nav-item .nav-button-2').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})