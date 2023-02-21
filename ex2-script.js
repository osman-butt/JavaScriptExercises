window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#blue_sprite").addEventListener("click", blueFall);
}

function blueFall() {
  console.log("blueFall");
  document.querySelector("#blue_sprite").removeEventListener("click", blueFall);
  document.querySelector("#blue_sprite").classList.add("fallover");
}
