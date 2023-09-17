const root = document.documentElement;
const changeBtn = document.querySelectorAll('#changeBtn');
const arrowBox = document.querySelector(".scroll-btn");
let arrowAnimation = document.querySelector(".arrow-animation");
let burgerBar = document.querySelector(".burger-bar");
let exitBtn = document.querySelector(".exit-btn");
let mode = false;

let whiteColor = getComputedStyle(root).getPropertyValue("--white");
let blackColor = getComputedStyle(root).getPropertyValue("--black");
let blueColor = getComputedStyle(root).getPropertyValue("--blue-primary");
let redColor = getComputedStyle(root).getPropertyValue("--red-primary");
let greenColor = getComputedStyle(root).getPropertyValue("--green-primary");
let yellowColor = getComputedStyle(root).getPropertyValue("--yellow-primary");

let tl22 = gsap.timeline();

burgerBar.onclick = () => {
    
            burgerBar.style.display= "none";
            exitBtn.style.display = "block";
            arrowBox.style.display = "flex";
            tl22.to(".links", {display: "flex", "--clip": '75%',autoAlpha:1, duration: 0.75});
            arrowAnimation.style.rotate = "180deg";
}
exitBtn.onclick = () => {
    burgerBar.style.display= "block";
    exitBtn.style.display = "none";
    arrowBox.style.display = "none";
    tl22.to(".links", {display: "none", "--clip": '0%' ,autoAlpha:1, duration: 0.75});
    
    
}

let tll = gsap.timeline();
tll.pause();

function arrowAnimationOne() {
    tll.play();
    tll.fromTo(".arrow-animation", {
        y: 37,
        duration: 0.7,
        repeat: -1,
        
        }, {
        y: -37,
        duration: 0.8,
        repeat: -1,
        ease: "power1"
    });
}
function arrowAnimationTwo() {
    tll.pause();
    gsap.to(".arrow-animation", {y: 0, duration: 0.5})
}
arrowBox.onmouseenter = () => {
   
        arrowAnimationOne();
    
}


arrowBox.onmouseleave = () => {
    
    arrowAnimationTwo();
}
arrowBox.onclick = () => {
    window.location.href = "index.html";
}
changeBtn[0].addEventListener('click', (e) => {
    changeColor(blueColor);
    changeBtn[0].style.opacity = "1";
    changeBtn[1].style.opacity = "0.4";
    changeBtn[2].style.opacity = "0.4";
    changeBtn[3].style.opacity = "0.4";

});
changeBtn[1].addEventListener('click', (e) => {

    changeColor(yellowColor);
    changeBtn[0].style.opacity = "0.4";
    changeBtn[1].style.opacity = "1";
    changeBtn[2].style.opacity = "0.4";
    changeBtn[3].style.opacity = "0.4";
})
changeBtn[2].addEventListener('click', (e) =>{
    changeColor(greenColor);
    changeBtn[0].style.opacity = "0.4";
    changeBtn[1].style.opacity = "0.4";
    changeBtn[2].style.opacity = "1";
    changeBtn[3].style.opacity = "0.4";
} );
changeBtn[3].addEventListener('click', (e) => {
    changeColor(redColor);
    changeBtn[0].style.opacity = "0.4";
    changeBtn[1].style.opacity = "0.4";
    changeBtn[2].style.opacity = "0.4";
    changeBtn[3].style.opacity = "1";
} );
root.style.setProperty('--white', blueColor);
root.style.setProperty('--black', whiteColor);
function changeColor(color) {
    mode = !mode;
    if (mode) {
        root.style.setProperty('--white', color);
        root.style.setProperty('--black', whiteColor);
    } else {
        root.style.setProperty('--white', whiteColor);
        root.style.setProperty('--black', color);
    }
}


const slideTL = gsap.timeline();
const maskTL = gsap.timeline();
const mainTL = gsap.timeline({
    repeat: -1,
    onRepeat: () => {
        gsap.set('#textone', {zIndex: 6});
        gsap.set('#texttwo', {opacity: 0, zIndex: 4});
        gsap.set('#text4', {opacity: 0, zIndex: 3});
        gsap.set('#text6', {opacity: 0, zIndex: 3});
        gsap.set('#text8', {opacity: 0, zIndex: 3});
        gsap.set('#text10', {opacity: 0, zIndex: 3});
        gsap.set('#text3', {opacity: 0, zIndex: 3});
        gsap.set('#text5', {opacity: 0, zIndex: 3});
        gsap.set('#text7', {opacity: 0, zIndex: 3});
        gsap.set('#text9', {opacity: 0, zIndex: 3});
        gsap.set('#bar', {scaleY: 0.1});
        gsap.set('#textone h1', {opacity: 1});
        gsap.set('#text3 h1', {opacity: 1});
        gsap.set('#text5 h1', {opacity: 1});
        gsap.set('#text7 h1', {opacity: 1});
        gsap.set('#text9 h1', {opacity: 1});
    }
});

mainTL
    .add(slideTL)
    .add(maskTL, 1.5);

    slideTL
    .to('#bar', 1, {
        y: 225,
        scaleY: 1,
        ease: "back.Out"
    })
    .to('#slidebar', 1.5, {
        x: 1400,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 1400,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 1400,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 1400,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 1400,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 1400,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#bar', 1, {
        y: 500,
        scaleY: 0.1,
        ease: "back.Out"
    });
    

    maskTL
    .to('#textone', 1.5, {
        opacity: 1,
        ease: "back.inOut(0.8)",
        "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%",
        onComplete: () => {
            gsap.set('#texttwo', {
                opacity: 1
            })
        }
    })
    .to('#textone', 1.5, {
        delay: 0.5,
        ease: "back.inOut(0.8)",
        "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%",
        onComplete: () => {
            gsap.set('#textone h1', {
                opacity: 0
            })     
            gsap.set('#text3', {
                opacity: 1
            })   
        }
    })
    .to('#text3', 1.5 , {
        delay: 0.5,
        zIndex: 10,
        ease: "back.inOut(0.8)",
        "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%",
        onComplete: () => {
            gsap.set('#text4', {
                opacity: 1,
                zIndex: 5
            })     
        }
        })
    .to('#text3', 1.5, {
        delay: 0.5,
        ease: "back.inOut(0.8)",
        "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%",
        onComplete: () => {
            gsap.set('#text3 h1', {
                opacity: 0
            })     
            gsap.set('#text5', {
                opacity: 1
            })   
        }
    })
    .to('#text5', 1.5 , {
        delay: 0.5,
        zIndex: 10,
        ease: "back.inOut(0.8)",
        "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%",
        onComplete: () => {
            gsap.set('#text6', {
                opacity: 1,
                zIndex: 6
            })     
        }
        })
        .to('#text5', 1.5, {
            delay: 0.5,
            ease: "back.inOut(0.8)",
            "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%",
            onComplete: () => {
                gsap.set('#text5 h1', {
                    opacity: 0
                 }) 
                 gsap.set('#text7', {
                    opacity: 1
                 })     
            }
        })
        .to('#text7', 1.5 , {
            delay: 0.5,
            zIndex: 9,
            ease: "back.inOut(0.8)",
            "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%",
            onComplete: () => {
                gsap.set('#text8', {
                    opacity: 1,
                    zIndex: 7
                })     
            }
            })
            .to('#text7', 1.5, {
                delay: 0.5,
                ease: "back.inOut(0.8)",
                "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%",
                onComplete: () => {
                    gsap.set('#text7 h1', {
                        opacity: 0
                     })     
                     gsap.set('#text9', {
                        opacity: 1
                     })  
                }
            })
            .to('#text9', 1.5 , {
                delay: 0.5,
                zIndex: 9,
                ease: "back.inOut(0.8)",
                "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%",
                onComplete: () => {
                    gsap.set('#text10', {
                        opacity: 1,
                        zIndex: 7
                    })     
                }
                })
                .to('#text9', 1.5, {
                    delay: 0.5,
                    ease: "back.inOut(0.8)",
                    "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%",
                    onComplete: () => {
                        gsap.set('#text9 h1', {
                            opacity: 0
                         })     
                    }
                })
            .to('#text9', 1.5 , {
                delay: 0.5,
                zIndex: 10,
                ease: "back.inOut(0.8)",
                "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%",
                });
    gsap.set('#textone', {opacity: 0});
    gsap.set('#bar', {scaleY: 0.1});