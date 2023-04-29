let links = document.querySelector(".links")
let menuIcon = document.querySelector(".menu-icon")
let closeIcon = document.querySelector(".close-icon")


menuIcon.addEventListener("click", (e) => {
    e.target.classList.add("hide")
    closeIcon.classList.add("show")
    links.classList.add("active")
})

closeIcon.addEventListener("click", (e) => {
    e.target.classList.remove("show")
    menuIcon.classList.remove("hide")
    links.classList.remove("active")
})