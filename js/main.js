//global
//disable href from links
let anchors = [...document.body.querySelectorAll("a")];
anchors.forEach(a =>{
    a.href == "#" ? a.onclick = ()=> false : ""
    
})
// variables
let headerSection = document.querySelector(".header")

let navBarButton = document.querySelector(".menu-trigger");
let menuTrigger = [...document.querySelectorAll(".menu-trigger span")];

let navBar = document.querySelector(".nav-links");
let navBarLinks = [...navBar.querySelectorAll(".nav-links .link")];


let mainSection = document.querySelector(".main");



// navbar function
function showNavBar(){
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

navBarLinks.forEach(link=>link.addEventListener("click",toggleNavBarLinks));

//trigger navbar
navBarButton.addEventListener("click",showNavBar);

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


// start classes
let schedules = document.querySelectorAll(".schedules-links ul li");
let contents = document.querySelectorAll(".class-desc .content");
let schedulesLinks = document.querySelectorAll(".schedules-links ul li a");


//disable href from links

schedulesLinks.forEach((link)=>{
    link.onclick = () => false
})

// handle Classes Content
function showContent(e){
    schedulesLinks.forEach(link =>{
        link.classList.remove("active");
        e.currentTarget.querySelector("a").classList.add("active");
    })
    contents.forEach((content)=>{
        content.classList.remove("active");
        content.dataset.class === e.currentTarget.dataset.class ? content.classList.add("active") : "";
    })
}

schedules.forEach(schedule=> schedule.addEventListener("click",showContent))
// end classes




//handle table
let schedulesDays = document.querySelectorAll(".schedules .days .day");
let tableTdTime = document.querySelectorAll(".schedules .schedule-table td.time");

function showTime(e){
    tableTdTime.forEach(time =>{
        schedulesDays.forEach(day => day.classList.remove("active"));

        e.currentTarget.classList.add("active")
        time.classList.remove("show");
        time.dataset.day == e.currentTarget.dataset.day ? time.classList.add("show") : ""
    })
}

schedulesDays.forEach(day => day.addEventListener("click",showTime));