//header variables
let triggerButton = document.querySelector(".menu-trigger");
let navBar = document.querySelector(".nav-links");
let menuTrigger = [...document.querySelectorAll(".menu-trigger span")]
let navBarLinks = [...navBar.querySelectorAll(".link")]
let headerSection = document.querySelector(".header")
let mainSection = document.querySelector(".main");
let bodyDirectElements = [...document.body.children];
//functions

//trigger navbar function
function triggerNavBar(){
    if(navBar.classList.contains("active")){
        navBar.classList.remove("active")
        menuTrigger.forEach((ele => ele.classList.remove("active")))
    }else{
        navBar.classList.add("active");
        menuTrigger.forEach((ele => ele.classList.add("active")))
    }
}

function toggleNavBarLinks(){
    navBar.classList.remove("active")
    menuTrigger.forEach((ele => ele.classList.remove("active")))


    navBarLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active")
}

navBarLinks.forEach(link=>link.addEventListener("click",toggleNavBarLinks))

//trigger navbar
triggerButton.addEventListener("click",triggerNavBar);

function toggleHeader(){
    if(document.documentElement.scrollTop >=  mainSection.offsetHeight - 80){
        headerSection.classList.add("fixed");
    }else{
        headerSection.classList.remove("fixed")
    }
}

window.onscroll = function(){
   
    toggleHeader();
    
}


