const form = document.querySelector("form");
const colorPicker = document.getElementById("colorPicker");
const name = document.getElementById("name");
const username = document.getElementById("username");
const password = document.getElementById("password");

// submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !username.value.trim() ||
    !username.value.trim("") ||
    !password.value.trim()
  ) {
    alert("All fields are required");
  } else {
    alert("Form submitted!!!");
  }
});

// change body bg
colorPicker.addEventListener("input", (e) => {
  console.log(e.target.value);
  document.body.style.backgroundColor = e.target.value;
});
