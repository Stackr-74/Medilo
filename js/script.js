const header = document.querySelector("#header");
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector("#nav");

window.addEventListener("scroll", () => {
    header.classList.toggle("active", scrollY > 10);
})

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
    menuBtn.classList.toggle("active");
})


function navigateForms(new_location){
    window.location.assign(new_location)
}


const buttons = document.querySelectorAll('.quick-btn .btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent.trim().toLowerCase() == "log in"){
            navigateForms('pages/login.html')
        }
        else{
            navigateForms('./pages/register.html')
        }
    })
})