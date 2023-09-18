const arrowBox = document.querySelector(".scroll-btn");
let arrowAnimation = document.querySelector(".arrow-animation");
let burgerBar = document.querySelector(".burger-bar");
let exitBtn = document.querySelector(".exit-btn");
// let dred = document.querySelector(".dred");
// let style = window.getComputedStyle(dred);
// let left = style.getPropertyValue('top');
// console.log(left);


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
    
    
};

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
};
function arrowAnimationTwo() {
    tll.pause();
    gsap.to(".arrow-animation", {y: 0, duration: 0.5})
};
arrowBox.onmouseenter = () => {
   
        arrowAnimationOne();
    
};

arrowBox.onmouseleave = () => {
    
    arrowAnimationTwo();
};
arrowBox.onclick = () => {
    window.location.href = "index.html";
};

// // // Start ourTeam Section
// // const  dimondPath = {
// //     curviness: 1.25,
// //     autoRotate: true,
// //     values: [
// //         {x: 500, y: -20,}
// //     ]
// }

document.addEventListener("keypress", (event) => {
    const tween = gsap.timeline();
    key = event.key; 
    console.log(key);
    switch (key ) {
        case "1": tween
                    .to('.team-container .red', 1, {
                        top: "31vh",
                        ease: Power1.easeInOut

                    })
                    .to('.team-container .red', 1, {
                        left: "0",
                        top: "0",
                        ease: Power1.easeInOut

                    })
                    .to('.mootaz', 0.5, {
                        top: 0,
                        ease: Power1.easeInOut,
                        duration: 1
                    })
                    .to('.text-content ', 0.5, {
                        duration: 1,
                        opacity: 1,
                        ease: Power1.easeInOut,
                        "clip-path": "polygon(47% 0, 53% 0, 100% 24%, 100% 100%, 0 100%, 0 24%)",    
                    })
                    break;
        case "2": tween
                    .to('.team-container .yellow', 1, {
                        top: "31vh",
                        ease: Power1.easeInOut
                
                    })
                    .to('.team-container .yellow', 1, {
                        left: "0",
                        top: "0",
                        ease: Power1.easeInOut
                
                    });
                    break
        case "3": tween
                    .to('.team-container .blue', 1, {
                        top: "31vh",
                        ease: Power1.easeInOut
                
                    })
                    .to('.team-container .blue', 1, {
                        left: "0",
                        top: "0",
                        ease: Power1.easeInOut
                
                    });
                    break;
        case "4": tween
                    .to('.team-container .purple', 1, {
                        top: "31vh",
                        ease: Power1.easeInOut
                
                    })
                    .to('.team-container .purple', 1, {
                        left: "0",
                        top: "0",
                        ease: Power1.easeInOut
                
                    });
                    break;
        case "5": tween
                    .to('.team-container .orange', 1, {
                        top: "31vh",
                        ease: Power1.easeInOut
                
                    })
                    .to('.team-container .orange', 1, {
                        left: "0",
                        top: "0",
                        ease: Power1.easeInOut
                
                    });
                    break;
        case "6": tween
                    .to('.team-container .green', 1, {
                        top: "31vh",
                        ease: Power1.easeInOut
                
                    })
                    .to('.team-container .green', 1, {
                        left: "0",
                        top: "0",
                        ease: Power1.easeInOut
                
                    });
                    break;
    
    
    }
});






// // End ourTeam Section