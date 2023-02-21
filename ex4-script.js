window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_sprite").addEventListener("click", jumpOnce);
  document
    .querySelector("#orange_sprite")
    .addEventListener("animationend", jumpStop);
}

function jumpOnce() {
  console.log("jumpOnce");
  document.querySelector("#orange_sprite").classList.add("jump-once");
}

function jumpStop() {
  console.log("jumpStop");
  document.querySelector("#orange_sprite").classList.remove("jump-once");
}
