
let arrowBox = document.querySelector(".scroll-btn");
let arrowAnimation = document.querySelector(".arrow-animation");
let burgerBar = document.querySelector(".burger-bar");
let navLinks = document.querySelector(".links");
let exitBtn = document.querySelector(".exit-btn");
let firstPage = document.querySelector(".first-page");
let secondOne = document.querySelector(".first-page .secondOne");
let secondTwo = document.querySelector(".first-page .secondTwo");
let third = document.querySelector(".first-page .third");
let fourth = document.querySelector(".first-page .fourth");
let sixthVid = document.querySelector(".first-page .sixth .vid");


let tl2 = gsap.timeline();

burgerBar.onclick = () => {
    
    burgerBar.style.display= "none";
    exitBtn.style.display = "block";
    tl2.to(".links", {display: "flex", "--clip": '75%',autoAlpha:1, duration: 0.75});
    
}
exitBtn.onclick = () => {
    burgerBar.style.display= "block";
    exitBtn.style.display = "none";
    tl2.to(".links", {display: "none", "--clip": '0%' ,autoAlpha:1, duration: 0.75});
    
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
arrowBox.onmouseenter = () => {
   
        arrowAnimationOne();
    
}


arrowBox.onmouseleave = () => {
    
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

// Start  Animation First section
let tl3 = gsap.timeline();
let scrollCounter = 0;
function animaitonFirstPage ()  {
    switch (scrollCounter) {
        case 0: firstPage.style.cssText = "z-index: 5";
                tl3
                .add('start')
                .to(".first-page .first", {left: 0, duration: 0.75,delay: 0.25, ease: "power3"},'start')
                .to(".first-page .secondOne", {right: 0, duration: 0.75,delay: 0.25,  ease: "power3"} , 'start')
                .to(".first-page .secondTwo", {right: 0, duration: 0.75,delay: 0.25,  ease: "power3"} , 'start')
                .to(".first-page .third", {right: 0});
                scrollCounter += 1;
                break;
        case 1: 
                tl3
                .add('second')
                .to(".first-page .first", {left: "-50%", duration: 0.75, delay: 0.25, ease: "power3" }, 'second')
                .to(".first-page .third", {left: 0, duration: 0.75,delay: 0.25, ease: "power3"}, 'second')
                .to(".first-page .secondOne .second ", {left: "-100%",duration: 0.75, delay: 0.25, ease: "power3"},'second')
                .to(".first-page .fourth", {right: 0, zIndex: 5 , duration: 0.75, delay: 0.25, ease: "power3"},'second');
                scrollCounter += 1;
                break;
        case 2: 
                tl3
                .add('third')
                .to(".first-page .secondTwo", {left: "0%",duration: 0.75, delay: 0.25, ease: "power3"},'third')
                .to(".first-page .fourth", {left: 0, zIndex: 5 , duration: 0.75, delay: 0.25, ease: "power3"},'third')
                .to(".first-page .fifth", {left: 0, duration: 0.5, delay: 0.25, ease: "power3" }, 'third')
                .to(".first-page .sixth", {left: 0, duration: 0.5,delay: 0.25, ease: "power3"}, 'third')
                .to(".first-page .seventh", {right: 0,duration: 0.5, delay: 0.25, ease: "power3"},'third');
                sixthVid.play();
                scrollCounter += 1;
                break;
        
    }
    
    
}
arrowBox.onclick = () => {
   
    animaitonFirstPage();

}

// Edn Animation First section