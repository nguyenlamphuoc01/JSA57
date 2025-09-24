const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let phone = document.getElementById("phone").value.trim();

  if (username === "") {
    document.getElementById("error-username").textContent = "ten ko hop le";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("error-email").textContent = "email ko hop le";
    isValid = false;
  }

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password === "" || !passRegex.test(password)) {
    document.getElementById("error-password").textContent =
      "mat khau ko hop le";
    isValid = false;
  }

  const phoneRegex = /^[0-9]{9,11}$/;
  if (phone === "" || !phoneRegex.test(phone)) {
    document.getElementById("error-phone").textContent =
      "so dien thoai ko hop le";
    isValid = false;
  }

  if (isValid) {
    form.reset();
  }
});
