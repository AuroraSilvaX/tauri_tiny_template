function log(o) {
  console.log(o);
}
function onload() {
  document.oncontextmenu = function (event) {
    return false;
  };
  document.addEventListener("keydown", keydown);
  function keydown(event) {
    if (event.keyCode == 87) {
      alert(navigator.userAgent);
    }
  }
}

onload();

var b = document.getElementById("h");
b.style = "color: green;";
