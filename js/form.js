const inputs = document.querySelectorAll('.form input')
const message = document.querySelector("#message")
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

function validateMessage(elem) {
    if(elem.value == "") {
        elem.style.borderColor = '#ff0000'
    } else {
        elem.style.borderColor = 'var(--green-color)'
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    validateInputs(inputs);
    validateMessage(message);
})