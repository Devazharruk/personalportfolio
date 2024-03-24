const navbarNav = document.querySelector(".navbar-nav");
const navbarAction = document.querySelector(".navbar-action i");
const submitBtn = document.querySelector("#submit-btn");
const contactForm = document.querySelector(".contact-form");
const email = document.querySelector("#email");
const formname = document.querySelector("#name");
const message = document.querySelector("#message");

navbarAction.addEventListener("click", () => {
    if(navbarAction.classList.contains("bi-list")){
        navbarNav.style.left="0"
        navbarAction.classList.replace("bi-list","bi-x")
    }else{
        navbarNav.style.left="-100%"
        navbarAction.classList.replace("bi-x","bi-list")
    }
});


contactForm.addEventListener("submit", (e) => {
    setTimeout(() => {
        email.value="";
        formname.value="";
        message.value="";
    }, 1000);
})