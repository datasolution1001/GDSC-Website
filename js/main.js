
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
let eighteenVid = document.querySelector(".first-page .eighteen .vid");

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
                .to(".first-page .sixth", {left: 0,zIndex: 40, duration: 0.5,delay: 0.25, ease: "power3"}, 'third')
                .to(".first-page .seventh", {right: 0,  duration: 0.5, delay: 0.25, ease: "power3"},'third');
                sixthVid.play();
                scrollCounter += 1;
                break;
        case 3: 
                tl3
                .add('fourth')
                .to(".first-page .seventh", {left: 0,duration: 0.75, delay: 0.25, ease: "power3"},'fourth')
                .to(".first-page .eight", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'fourth')
                .to(".first-page .ninth", {right: 0, duration: 0.75, delay: 0.25, ease: "power3" }, 'fourth');
                scrollCounter += 1;
                break;
        case 4: 
                tl3
                .add('fifth')
                .to(".first-page .fifth", {left: "50%", duration: 1, delay: 0.25, ease: "power3"},'fifth')
                .to(".first-page .sixth", {left: "50%", duration: 1, delay: 0.25, ease: "power3"},'fifth')
                .to(".first-page .eight", {left: 0, duration: 1, delay: 0.25, ease: "power3" }, 'fifth')
                .to(".first-page .ninth", {left: 0, duration: 1, delay: 0.25, ease: "power3" }, 'fifth')
                .to(".first-page .ten", {left: 0, duration: 0.75, delay: 0.25, ease: "power3" }, 'fifth')
                .to(".first-page .eleven", {right: 0, duration: 0.75, delay: 0.25, ease: "power3" }, 'fifth');

                scrollCounter += 1;
                break;
        case 5: 
                tl3
                .add('sixth')
                .to(".first-page .twelve", {top: 0, duration: 0.75, delay: 0.25, ease: "power3"},'sixth')
                .to(".first-page .thirteen", {bottom: 0, duration: 0.75, delay: 0.25, ease: "power3"},'sixth');
                scrollCounter += 1;
                break;
        case 6: 
                tl3
                .add('seven')
                .to(".first-page .fourteen", {left: 0, duration: 0.75, delay: 0.25, ease: "power3"},'seven')
                .to(".first-page .fifteen", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'seven');
                scrollCounter += 1;
                break;
        case 7: 
                tl3
                .add('eight')
                .to(".first-page .seventeen", {top: 0, duration: 0.75, delay: 0.25, ease: "power3"},'eight')
                .to(".first-page .sixteen", {bottom: 0, duration: 0.75, delay: 0.25, ease: "power3"},'eight');
                scrollCounter += 1;
                break;
        case 8: 
                tl3
                .add('nine')
                .to(".first-page .eighteen", {left: 0, duration: 0.75, delay: 0.25, ease: "power3"},'nine')
                .to(".first-page .nineteen", {left: 0, duration: 0.75, delay: 0.25, ease: "power3"},'nine')
                .to(".first-page .twenty-container", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'nine')
                .to(".first-page  .twenty1-container", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'nine');
                eighteenVid.play();
                scrollCounter += 1;
                break;
        case 9: 
                tl3
                .add('ten')
                .to(".first-page .eighteen", {left: "-50%", duration: 0.75, delay: 0.25, ease: "power3"},'ten')
                .to(".first-page .nineteen", {left: "-50%", duration: 0.75, delay: 0.25, ease: "power3"},'ten')
                .to(".first-page  twenty", {right: "100%", duration: 0.75, delay: 0.25, ease: "power3"},'ten')
                .to(".first-page .twenty1", {right: "100%", duration: 0.75, delay: 0.25, ease: "power3"},'ten')
                .to(".first-page .twenty2", {left: 0, duration: 0.75, delay: 0.25, ease: "power3"},'ten')
                .to(".first-page .twenty3", {left: 0, duration: 0.75, delay: 0.25, ease: "power3"},'ten')
                .to(".first-page .twenty4-container", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'ten')
                .to(".first-page .twenty5-container", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'ten');
                eighteenVid.pause();
                scrollCounter += 1;
                break;
        case 10: 
                tl3
                .add('eleven')
                .to(".first-page .twenty2", {left: "-50%", duration: 0.75, delay: 0.25, ease: "power3"},'eleven')
                .to(".first-page .twenty3", {left: "-50%", duration: 0.75, delay: 0.25, ease: "power3"},'eleven')
                .to(".first-page .twenty4", {right: "100%", duration: 0.75, delay: 0.25, ease: "power3"},'eleven')
                .to(".first-page .twenty5", {right: "100%", duration: 0.75, delay: 0.25, ease: "power3"},'eleven')
                .to(".first-page .twenty6", {left: 0, duration: 0.75, delay: 0.25, ease: "power3"},'eleven')
                .to(".first-page .twenty7", {left: 0, duration: 0.75, delay: 0.25, ease: "power3"},'eleven')
                .to(".first-page .twenty8 ", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'eleven')
                .to(".first-page .twenty9", {right: 0, duration: 0.75, delay: 0.25, ease: "power3"},'eleven');
                scrollCounter += 1;
                break;
        case 11: 
                tl3
                .add('twelve')
                .to(".first-page .twenty10", {top: 0, duration: 0.75, delay: 0.25, ease: "power3"},'twelve')
                .to(".first-page .twenty11", {bottom: 0, duration: 0.75, delay: 0.25, ease: "power3"},'twelve');
                scrollCounter += 1;
                break;
        case 12:
                burgerBar.style.display= "none";
                exitBtn.style.display = "block";
                arrowBox.style.zIndex = "10001";
                tl2.to(".links", {display: "flex", "--clip": '75%',autoAlpha:1, duration: 0.75});
                arrowAnimation.style.rotate = "180deg";
    }
    
    
}
arrowBox.onclick = () => {
   
    animaitonFirstPage();

}

// Edn Animation First section
