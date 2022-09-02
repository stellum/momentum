const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); // javascript default behavior of "submit" event 방지 - 브라우저 전체 새로고침되는 현상
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
