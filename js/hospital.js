const hospitals = {
    "Lagos" : "Lagos State Teaching Hospital",
    "Osun" : "Osun State Teaching Hospital",
    "Oyo" : "Oyo State Teaching Hospital",
    "Ogun" : "Ogun State Teaching Hospital",
    "Ekiti" : "Ekitit State Teaching Hospital",
    "Ondo" : "Ondo State Teaching Hospital"
}

const searchBtn = document.querySelector(".search-btn")
let searchInput = document.querySelector("#search-input")

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inputkey = searchInput.value.trim().toLowerCase()
    const hospitalLowercase = Object.keys(hospitals).reduce((acc, key) => {
        acc[key.toLowerCase()] = hospitals[key]
        return acc
    }, {})

    let location = document.querySelector(".location")

    if(inputkey == ""){
        location.textContent = `Field cannot be empty`
        location.style.color = "#ff0000" 
        return
    } else if(hospitalLowercase[inputkey]) {
        location.textContent = hospitalLowercase[inputkey]
        location.style.color = "var(--black-color)" 
        document.querySelector(".search-box").classList.add('active')
    } else {
        location.textContent = `Field cannot be empty`
        location.style.color = "#ff0000" 
    }
})  
