let triggerButton = document.querySelector(".menu-trigger");
let navLinks = document.querySelector(".nav-links");
let menuTrigger = [...document.querySelectorAll(".menu-trigger span")]

function triggerNavBar(){
    if(navLinks.classList.contains("active")){
        navLinks.classList.remove("active")
        menuTrigger.forEach((ele => ele.classList.remove("active")))
    }else{
        navLinks.classList.add("active");
        menuTrigger.forEach((ele => ele.classList.add("active")))
    }
}
triggerButton.addEventListener("click",triggerNavBar)