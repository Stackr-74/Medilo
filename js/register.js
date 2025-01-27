const inputs = document.querySelectorAll(".form input");
const submitBtn = document.querySelector(".submit");

function validateInputs(elem) {
  elem.forEach((el) => {
    if (el.value == "") {
      el.style.borderColor = "#ff0000";
    } else {
      el.style.borderColor = "var(--green-color)";
    }
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validateInputs(inputs);
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".password").value;
  var confirmPassword = document.querySelector(".confirm-password").value;

  if (password !== confirmPassword) {
    alert("Password don't match");
  } else {
    if (password === confirmPassword && password !== "") {
        alert("Success");
        localStorage.setItem(email, password);
        console.log(user);
    }
  }
});
