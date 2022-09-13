const Greetings = () => {
  const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input");
  const greeting = document.querySelector("#greeting");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  function onLoginSubmit(event) {
    event.preventDefault(); // javascript default behavior of "submit" event 방지 - 브라우저 전체 새로고침되는 현상
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatTheUserWrote = loginInput.value;

    // localStorage 에 로그인 input 저장하기
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    paintGreetings(usernameThatTheUserWrote);
    // console.log(loginInput.value);
  }

  function paintGreetings(usernameThatTheUserWrote) {
    greeting.innerText = `Hello ${usernameThatTheUserWrote}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }

  // localStorage 에서 username 불러오기
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    // show the greetings
    paintGreetings(savedUsername);
  }
};

export default Greetings;
// localStorage.setItem('username', 'Tom') = localStorage 에 item 저장할 때
// localStorage.getItem('username') = 저장된 item 을 가져올 때
// localStorage.removeItem("username")
