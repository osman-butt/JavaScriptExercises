window.addEventListener("load", start);

function start() {
  console.log("start");
  document
    .querySelector("#orange_sprite")
    .addEventListener("click", orangeJump);
}

function orangeJump() {
  console.log("orangeJump");
  document
    .querySelector("#orange_sprite")
    .removeEventListener("click", orangeJump);
  document.querySelector("#orange_sprite").classList.add("jump");
}
