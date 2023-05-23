const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');

function checkLogin() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  if (username === 'hashiq' && password === 'hashiq123') {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}

usernameInput.addEventListener('input', checkLogin);
passwordInput.addEventListener('input', checkLogin);

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (!loginBtn.disabled) {
    window.alert("Login Successful");
    this.submit();
  }
});