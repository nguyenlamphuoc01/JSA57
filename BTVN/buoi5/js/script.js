document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    document.getElementById("storedName").textContent = "Name: " + name;
    document.getElementById("storedEmail").textContent = "Email: " + email;
  });
window.onload = function () {
  var savedName = localStorage.getItem("name");
  var savedEmail = localStorage.getItem("email");
  if (savedName && savedEmail) {
    document.getElementById("storedName").textContent = "Name: " + savedName;
    document.getElementById("storedEmail").textContent = "Email: " + savedEmail;
  }
};
