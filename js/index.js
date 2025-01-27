const doctors = {
    "Lagos" : "Dr. James Witicker",
    "Osun" : "Nurse Jennifer Lumberg",
    "Oyo" : "Dr. Ada Lovelace",
    "Ogun" : "Nurse Angus Lutmod",
    "Ekiti" : "Dr. James Orilo",
    "Ondo" : "Dr. Ademola Lukman"
}

const searchBtn = document.querySelector(".search-btn")
let searchInput = document.querySelector("#search-input")

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const searchOverlay = document.querySelector(".search-overlay")
    searchOverlay.classList.add('active')

    const inputkey = searchInput.value.trim().toLowerCase()
    const doctorsLowercase = Object.keys(doctors).reduce((acc, key) => {
        acc[key.toLowerCase()] = doctors[key]
        return acc
    }, {})

    let doctorProfile = document.querySelector(".doctors-profile")
    let result = `
                    <img src="./asset/doctor.jpg" alt="doctor image" width="100%" class="doctor-image">
                    <p class="name">Name: <span class="bold">${doctorsLowercase[inputkey]}</span></p>
                    <p class="name">Email: <span class="bold">drademolaman@mail.com</span></p>
                    <a href="login.html" class="more-btn">Book an appointment</a>`

    if(inputkey == ""){
        doctorProfile.innerHTML =`<p class="name">Sorry, search can't be empty...</p>`
    } else if(doctorsLowercase[inputkey]) {
        doctorProfile.innerHTML = result
    } else {
        doctorProfile.innerHTML +=`<p class="name">Oops... No match found</p>`
    }
    const closeFormButton = document.querySelector(".close-overlay")
    closeFormButton.addEventListener("click", function(){
        searchOverlay.classList.remove("active");
    })
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
            navigateForms('pages/register.html')
        }
    })
})