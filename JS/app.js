const loginform = document.getElementById('login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.getElementById('greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener('submit', onLoginBtnClick);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
}

function onLoginBtnClick(event) {
  event.preventDefault();
  loginform.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${username}`;
}
loginform.addEventListener('submit', onLoginBtnClick);
