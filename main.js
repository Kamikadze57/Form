const login = document.querySelector("[login]");
const password = document.querySelector("[password]");
const saveBtn = document.querySelector("[saveBtn]");

saveBtn.addEventListener("click", function () {
  if (login.value === "" || password.value === "") {
    alert("Заповніть поле");
  } else {
    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
  }
});
login.value = localStorage.getItem("login");
password.value = localStorage.getItem("password");
