window.onload = function(){
    document.getElementById("menu").style.display = "block";
};

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-visible");
}
