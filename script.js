const header = document.getElementById("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const current = window.pageYOffset;

    /* GLASS EFFECT */
    if(current > 80){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    lastScroll = current;
});

const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu(){
    menuToggle.classList.add("active");
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu(){
    menuToggle.classList.remove("active");
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

menuToggle.addEventListener("click", () => {
    sideMenu.classList.contains("active") ? closeMenu() : openMenu();
});

menuOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeMenu();
});

/* Premium touch effect */

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("touchstart", () => {

        card.classList.remove("tap-effect");

        void card.offsetWidth;

        card.classList.add("tap-effect");

    });

    card.addEventListener("animationend", () => {

        card.classList.remove("tap-effect");

    });

});
/* ===========================
   Premium Scroll Reveal
=========================== */

const revealCards = document.querySelectorAll(".process-card, .why-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.15});

revealCards.forEach(card=>{

card.classList.add("reveal-card");

observer.observe(card);

});

/* ===========================
   Premium Mobile Touch
=========================== */

revealCards.forEach(card=>{

card.addEventListener("touchstart",()=>{

card.style.transition=".25s";

card.style.transform="scale(.98)";

});

card.addEventListener("touchend",()=>{

card.style.transform="scale(1)";

});

});

/* ====================================
   LENIS SMOOTH SCROLL
==================================== */

const lenis = new Lenis({
    autoRaf: true,
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 1.2,
    wheelMultiplier: 1,
    infinite: false
});