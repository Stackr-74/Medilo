const inputs = document.querySelectorAll('.form input')
const submitBtn = document.querySelector(".submit")

function validateInputs(elem) {
    elem.forEach(el => {
        if(el.value == "") {
            el.style.borderColor = '#ff0000'
        } else {
            el.style.borderColor = 'var(--green-color)'
        }
    });
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    validateInputs(inputs);
    var email = document.querySelector('.email').value
    var password = document.querySelector('.password').value

    var storedPassword = localStorage.getItem(email)

    if(storedPassword === null) {
        alert("User not registered")
    } else {
        if(storedPassword == password ) {
            alert("Login Successful")
            window.location.href = "appointment.html"
        } else {
            alert("Invalid password")
            return
        }
    }
})

