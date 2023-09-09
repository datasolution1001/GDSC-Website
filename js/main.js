
let arrowBox = document.querySelectorAll(".scroll-btn");
let arrowAnimation = document.querySelector(".arrow-animation");
let burgerBar = document.querySelector(".burger-bar");
let navLinks = document.querySelector(".links");
let exitBtn = document.querySelector(".exit-btn");

let tl2 = gsap.timeline();

burgerBar.onclick = () => {
    
    burgerBar.style.display= "none";
    exitBtn.style.display = "block";
    tl2.to(".links", {"--clip": '75%',autoAlpha:1, duration: 0.75});
    
}
exitBtn.onclick = () => {
    burgerBar.style.display= "block";
    exitBtn.style.display = "none";
    tl2.to(".links", {"--clip": '0%',autoAlpha:1, duration: 0.75});
    
}

let tl = gsap.timeline();
tl.pause();

function arrowAnimationOne() {
    tl.play();
    tl.fromTo(".arrow-animation", {
        y: -37,
        duration: 0.7,
        repeat: -1,
        
        }, {
        y: 37,
        duration: 0.8,
        repeat: -1,
        ease: "power1"
    });
}
function arrowAnimationTwo() {
    tl.pause();
    gsap.to(".arrow-animation", {y: 0, duration: 0.5})
}
arrowBox[0].onmouseenter = () => {
   
        arrowAnimationOne();
    
}
arrowBox[1].onmouseenter = () => {
    arrowAnimationOne();
}
arrowBox[2].onmouseenter = () => {
    arrowAnimationOne();

}

arrowBox[0].onmouseleave = () => {
    
    arrowAnimationTwo();
}
arrowBox[1].onmouseleave = () => {
    
    arrowAnimationTwo();
}
arrowBox[2].onmouseleave = () => {
    
    arrowAnimationTwo();
}

// Swiper js
const swiper = new Swiper('.swiper', {
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    
  

  });