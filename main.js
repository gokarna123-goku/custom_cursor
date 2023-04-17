//
document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

document.addEventListener("mousedown", function () {
  var cursor = document.querySelector(".cursor");
  cursor.classList.add("mousedown");
});

document.addEventListener("mouseup", function () {
  var cursor = document.querySelector(".cursor");
  cursor.classList.remove("mousedown");
});
