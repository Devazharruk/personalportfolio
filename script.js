const navbarNav = document.querySelector(".navbar-nav");
const navbarAction = document.querySelector(".navbar-action i");

navbarAction.addEventListener("click", () => {
    if(navbarAction.classList.contains("bi-list")){
        navbarNav.style.left="0"
        navbarAction.classList.replace("bi-list","bi-x")
    }else{
        navbarNav.style.left="-100%"
        navbarAction.classList.replace("bi-x","bi-list")
    }
});
