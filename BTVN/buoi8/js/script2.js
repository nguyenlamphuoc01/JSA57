const form = document.getElementById("reservationForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");

document
  .querySelector("[data-bs-target='#confirmModal']")
  .addEventListener("click", () => {
    document.getElementById("confirmEmail").innerText = email.value;
    document.getElementById("confirmPhone").innerText = phone.value;
    document.getElementById("confirmDate").innerText = date.value;
    document.getElementById("confirmTime").innerText = time.value;
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("đặt bàn thành công");
  form.reset();
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("confirmModal")
  );
  modal.hide();
});
