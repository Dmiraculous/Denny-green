let mainMenu = document.querySelector(".mainMenu");
let closeMenu = document.querySelector(".closeMenu");
let openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);

function show() {
  mainMenu.style.display = "flex";
  openMenu.style.display = "none";
}

function hide() {
  mainMenu.style.display = "none";
  openMenu.style.display = "block";
}
