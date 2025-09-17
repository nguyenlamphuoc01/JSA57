const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showLoginFormBtn = document.getElementById("showLoginFormBtn");
const showSignupFormBtn = document.getElementById("showSignupFormBtn");

function changeForm(isLogin) {
  if (isLogin) {
    loginForm.classList.add("d-block");
    signupForm.classList.remove("d-block");
    signupForm.classList.add("d-none");
    loginForm.classList.remove("d-none");
  } else {
    loginForm.classList.add("d-none");
    loginForm.classList.remove("d-block");
    signupForm.classList.remove("d-none");
    signupForm.classList.add("d-block");
  }
}

showSignupFormBtn.addEventListener("click", function () {
  this.classList.add("btn-danger");
  this.classList.remove("btn-outline-danger");

  showLoginFormBtn.classList.add("btn-outline-danger");
  showLoginFormBtn.classList.remove("btn-danger");

  changeForm(false);
});

showLoginFormBtn.addEventListener("click", function () {
  this.classList.add("btn-danger");
  this.classList.remove("btn-outline-danger");

  showSignupFormBtn.classList.add("btn-outline-danger");
  showSignupFormBtn.classList.remove("btn-danger");
  changeForm(true);
});

function validateSignupForm(email, username, password) {
  if (username.length < 6) {
    alert("Username must be at least 6 characters long.");
    return false;
  }
  if (username.length > 18) {
    alert("Username must be less than 18 characters long.");
    return false;
  }
  if (password.length < 5) {
    alert("Password must be at least 5 characters long.");
    return false;
  }
  if (password.length > 20) {
    alert("Password must be less than 20 characters long.");
    return false;
  }
  return true;
}

function isEmailRegistered(email) {
  if (localStorage.getItem(email) !== null) {
    alert("Email is already registered. Please use a different email.");
    return true;
  }
  return false;
}

function signupToLocalStorage() {
  const email = document.getElementById("signupEmail").value;
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  const checked =
    validateSignupForm(email, username, password) && !isEmailRegistered(email);
  if (checked == true) {
    localStorage.setItem(email, password);

    alert("Registration successful! You can now log in.");

    changeForm(true);
  }
}
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    signupToLocalStorage();
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    loginToHome();
  });
