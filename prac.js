const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleRightClick() {
  h1.innerText = "Right click";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// Window Events
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleRightClick);
window.addEventListener("copy", handleWindowCopy);

// Connection Events
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

console.dir(h1);
