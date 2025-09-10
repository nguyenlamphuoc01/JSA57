let form = document.getElementById("hosoForm");
let hienThi = document.getElementById("hienThiHoSo");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let ten = document.getElementById("ten").value;
  let email = document.getElementById("email").value;
  let sdt = document.getElementById("sdt").value;
  let diachi = document.getElementById("diachi").value;
  let anh = document.getElementById("anh").value;

  let hoso = ten + "|" + email + "|" + sdt + "|" + diachi + "|" + anh;

  localStorage.setItem("hoso", hoso);

  hienThiHoSo();
});

function hienThiHoSo() {
  let data = localStorage.getItem("hoso");
  if (data) {
    let arr = data.split("|");
    let ten = arr[0];
    let email = arr[1];
    let sdt = arr[2];
    let diachi = arr[3];
    let anh = arr[4];

    hienThi.innerHTML = `
                <img src="${anh}" alt="Ảnh đại diện" width="120"><br>
                <p><b>Họ tên:</b> ${ten}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>SĐT:</b> ${sdt}</p>
                <p><b>Địa chỉ:</b> ${diachi}</p>
            `;

    document.getElementById("ten").value = ten;
    document.getElementById("email").value = email;
    document.getElementById("sdt").value = sdt;
    document.getElementById("diachi").value = diachi;
    document.getElementById("anh").value = anh;
  }
}

hienThiHoSo();
