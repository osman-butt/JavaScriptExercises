window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_container").classList.add("move");
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", freezeJump);
}

function freezeJump() {
  console.log("freezeJump");
  document
    .querySelector("#orange_sprite")
    .removeEventListener("click", freezeJump);
  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}
