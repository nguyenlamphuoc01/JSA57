const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Ethan" },
  { id: 6, name: "Fiona" },
  { id: 7, name: "George" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Ivan" },
  { id: 10, name: "Julia" },
];

// --------------------------------
//  render students
function renderStudents() {
  const ListContainer = document.getElementById("student-list");
  ListContainer.innerHTML = ""; // xoa het noi dung cu
  // chay vong lap va tao the Li (string)
  const ListItemHTML = students.map(function (s) {
    return `<li data-id="${
      s.id
    }">${JSON.stringify(s)} <button>Edit</button> <button>Del</button></li>`;
  }); // danh sach

  // chuyen sang string -> gan vao ul
  ListContainer.innerHTML = ListItemHTML.join("");
}

// ------------------------------
// add student
function addStudent(name) {
  // tao moi id (chi ap dung voi list da duoc sap xep theo id tang dan)
  const newId = students[students.length - 1].id + 1;
  const newStudent = { id: newId, name: name };
  //add array
  students.push(newStudent);
  //ghi tiep vao UI
  const ListContainer = document.getElementById("students-list");
  ListContainer.innerHTML += `<li data-id="${newId}">${JSON.stringify(
    newStudent
  )} <button>Edit</button> <button>Del</button></li>`;
}

//bat su kien cho form add
document.getElementById("add-student").addEventListener("submit", function (e) {
  e.preventDefault(); // chan su kien mac dinh
  const nameInput = document.getElementById("student-name").ariaValueMax.trim();
  //add student
  addStudent(nameInput);
  //reset form (xoa du lieu trong input)
  this.reset(); // mmuon dung this -> dung ham thuong de co the luu tru ngu canh
});

//-------------------------------
//edit student by id
const editStudentById = (id) => {
  // cho ng dung nhap ten moi voi prompt
  const newName = prompt("Enter new name:");
  if (newName) {
    students.name = newName; // sua du lieu
    //cap nhat lai UI
    document.querySelector(`li[data-id="${id}"]`).innerHTML = `${JSON.stringify(
      students
    )} <button>Edit</button> <button>Del</button>`;
  }
};

// ------------------------------
// delete student by id
const deleteStudentById = (id) => {
  //xoa trong array
  const index = students.findIndex((s) => s.id === id) // tim vi tri dung cua phan tu
  if (index !== -1) {
    students.splice(index, 1);// xoa phan tu tai vi tri index
    //xoa trong UI
    const liToDel = document.querySelector(`li[data-id="${id}]`);
    if (liToDel) {
      liToDel.remove(); // xoa the LI khoi UO
    }
  }
};


//-------------------------------
//main
document.addEventListener("DOMContentLoaded", function () {
  renderStudents();
});

// bat su kien cho button edit + del
document.getElementById("student-list").addEventListener("click", function (e) {
  // kiem tra bam vao nut edit
  if (e.target.tagName === "BUTTON") {
    // lay id tu thuoc tinh data-id cua the li cha
    const studentId = e.target.closest("li").dataset.id;
    const id = parseInt(studentId); // chuyen ve so
    if (e.target.textContent === "Edit") {
      // edit
      editStudentById(id);
    } else if (e.target.textContent === "Del") {
      // del
      deleteStudentById(id);
    }
  }
});
