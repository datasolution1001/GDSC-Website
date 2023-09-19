const arrowBox = document.querySelector(".scroll-btn");
let arrowAnimation = document.querySelector(".arrow-animation");
let burgerBar = document.querySelector(".burger-bar");
let exitBtn = document.querySelector(".exit-btn");
let img = document.querySelector(".img img");
let captionH3 = document.querySelector(".caption h3");
let captionP = document.querySelector(".caption p");
let textH1 = document.querySelector(".text-area .one");
let textP1 = document.querySelector(".text-area .pone");
let textH2 = document.querySelector(".text-area .two");
let textP2 = document.querySelector(".text-area .ptwo");
let facebookLink = document.querySelector(".social-links .fb");
let instagramLink = document.querySelector(".social-links .in");
let linkedinLink = document.querySelector(".social-links .li");
let exitBtn2 = document.querySelector(".exit");
let exitBtn3 = document.querySelector(".exit3");
let informationCont = document.querySelector(".information-container");
let red = document.querySelector(".team-container .red");
let orange = document.querySelector(".team-container .orange");
let blue = document.querySelector(".team-container .blue");
let yellow = document.querySelector(".team-container .yellow");
let green = document.querySelector(".team-container .green");
let purple = document.querySelector(".team-container .purple");

let leftRed = 1;
let leftBlue = 1;
let leftYellow = 1;
let leftPurple = 1;
let leftGreen = 1;
let leftOrange = 1;
let counter = 0;
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
let test = 0;
document.addEventListener("keypress", (event) => {
    let tween = gsap.timeline();

    
    if (test === 0) {
        key = event.key; 
        console.log(key);
        test = key;
    }
    
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

                    });
                    img.src = "assets/mootaz.jpg";
                    img.alt = "quality manager";
                    captionH3.innerHTML = "Mootaz akermi";
                    captionP.innerHTML = "Quality Manager";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis atque beatae ea quibusdam dolorem pariatur iusto possimus quae suscipit, laborum magni explicabo velit, ducimus delectus numquam cupiditate consequuntur amet!";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing \
                    elit. Maxime dolorem quod voluptatum rem dolorum \
                    odio eum? Hic quibusdam eos facere culpa animi harum \
                    repellendus, ad velit non, praesentium similique fuga\
                     perspiciatis adipisci debitis molestias. Eaque,\
                      repellendus. Perferendis tempore quibusdam cum \
                      earum eligendi \
                    nihil ex soluta quis? Aut, dolorem? Architecto, at.";
                    facebookLink.href = "https://www.facebook.com/akermimootaz/";
                    instagramLink.href = "https://www.facebook.com/akermimootaz/";
                    linkedinLink.href = "https://www.facebook.com/akermimootaz/";
                    tween.to('.information-container ', 1, {
                        left: 0,
                        duration: 1,
                        ease: Power1.easeInOut

                    })
                    .to('.information', 1, {
                        opacity: 1,
                        duration: 1,
                        ease: Power1.easeInOut

                    });
                    leftRed = 0;
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
                    img.src = "assets/mootaz.jpg";
                    img.alt = "quality manager";
                    captionH3.innerHTML = "Mootaz akermi";
                    captionP.innerHTML = "Quality Manager";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis atque beatae ea quibusdam dolorem pariatur iusto possimus quae suscipit, laborum magni explicabo velit, ducimus delectus numquam cupiditate consequuntur amet!";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing \
                    elit. Maxime dolorem quod voluptatum rem dolorum \
                    odio eum? Hic quibusdam eos facere culpa animi harum \
                    repellendus, ad velit non, praesentium similique fuga\
                     perspiciatis adipisci debitis molestias. Eaque,\
                      repellendus. Perferendis tempore quibusdam cum \
                      earum eligendi \
                    nihil ex soluta quis? Aut, dolorem? Architecto, at.";
                    facebookLink.href = "https://www.facebook.com/akermimootaz/";
                    instagramLink.href = "https://www.facebook.com/akermimootaz/";
                    linkedinLink.href = "https://www.facebook.com/akermimootaz/";
                    tween.to('.information-container ', 1, {
                        left: 0,
                        duration: 1,
                        ease: Power1.easeInOut

                    })
                    .to('.information', 1, {
                        opacity: 1,
                        duration: 1,
                        ease: Power1.easeInOut

                    });
                    leftOrange= 0;
                    break;
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
                    img.src = "assets/mootaz.jpg";
                    img.alt = "quality manager";
                    captionH3.innerHTML = "Mootaz akermi";
                    captionP.innerHTML = "Quality Manager";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis atque beatae ea quibusdam dolorem pariatur iusto possimus quae suscipit, laborum magni explicabo velit, ducimus delectus numquam cupiditate consequuntur amet!";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing \
                    elit. Maxime dolorem quod voluptatum rem dolorum \
                    odio eum? Hic quibusdam eos facere culpa animi harum \
                    repellendus, ad velit non, praesentium similique fuga\
                     perspiciatis adipisci debitis molestias. Eaque,\
                      repellendus. Perferendis tempore quibusdam cum \
                      earum eligendi \
                    nihil ex soluta quis? Aut, dolorem? Architecto, at.";
                    facebookLink.href = "https://www.facebook.com/akermimootaz/";
                    instagramLink.href = "https://www.facebook.com/akermimootaz/";
                    linkedinLink.href = "https://www.facebook.com/akermimootaz/";
                    tween.to('.information-container ', 1, {
                        left: 0,
                        duration: 1,
                        ease: Power1.easeInOut

                    })
                    .to('.information', 1, {
                        opacity: 1,
                        duration: 1,
                        ease: Power1.easeInOut

                    });
                    leftBlue = 0;
                    
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
                    img.src = "assets/mootaz.jpg";
                    img.alt = "quality manager";
                    captionH3.innerHTML = "Mootaz akermi";
                    captionP.innerHTML = "Quality Manager";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis atque beatae ea quibusdam dolorem pariatur iusto possimus quae suscipit, laborum magni explicabo velit, ducimus delectus numquam cupiditate consequuntur amet!";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing \
                    elit. Maxime dolorem quod voluptatum rem dolorum \
                    odio eum? Hic quibusdam eos facere culpa animi harum \
                    repellendus, ad velit non, praesentium similique fuga\
                     perspiciatis adipisci debitis molestias. Eaque,\
                      repellendus. Perferendis tempore quibusdam cum \
                      earum eligendi \
                    nihil ex soluta quis? Aut, dolorem? Architecto, at.";
                    facebookLink.href = "https://www.facebook.com/akermimootaz/";
                    instagramLink.href = "https://www.facebook.com/akermimootaz/";
                    linkedinLink.href = "https://www.facebook.com/akermimootaz/";
                    tween.to('.information-container ', 1, {
                        left: 0,
                        duration: 1,
                        ease: Power1.easeInOut

                    })
                    .to('.information', 1, {
                        opacity: 1,
                        duration: 1,
                        ease: Power1.easeInOut

                    });
                    leftPurple = 0;
                    
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
                    img.src = "assets/mootaz.jpg";
                    img.alt = "human ressources";
                    captionH3.innerHTML = "Malak Ben Mabrouk";
                    captionP.innerHTML = "Human Resource Manager";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Hello, I'm Malak BEN MABROUK, the HR Manager at GDSC, and I'm currently in my third year as a computer science student. It's a pleasure to be part of this dynamic team.";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "Hello, I'm Malak BEN MABROUK, the HR Manager at GDSC, and I'm currently in my third year as a computer science student. It's a pleasure to be part of this dynamic team.";
                    facebookLink.href = "https://www.facebook.com/malak.benmabrouk.3";
                    instagramLink.href = "";
                    linkedinLink.href = "https://www.linkedin.com/in/malak-ben-mabrouk-1b1793259/";
                    tween.to('.information-container ', 1, {
                        left: 0,
                        duration: 1,
                        ease: Power1.easeInOut

                    })
                    .to('.information', 1, {
                        opacity: 1,
                        duration: 1,
                        ease: Power1.easeInOut

                    });
                    leftYellow = 0;
                   
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
                    img.src = "assets/mootaz.jpg";
                    img.alt = "quality manager";
                    captionH3.innerHTML = "Mootaz akermi";
                    captionP.innerHTML = "Quality Manager";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis atque beatae ea quibusdam dolorem pariatur iusto possimus quae suscipit, laborum magni explicabo velit, ducimus delectus numquam cupiditate consequuntur amet!";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing \
                    elit. Maxime dolorem quod voluptatum rem dolorum \
                    odio eum? Hic quibusdam eos facere culpa animi harum \
                    repellendus, ad velit non, praesentium similique fuga\
                     perspiciatis adipisci debitis molestias. Eaque,\
                      repellendus. Perferendis tempore quibusdam cum \
                      earum eligendi \
                    nihil ex soluta quis? Aut, dolorem? Architecto, at.";
                    facebookLink.href = "https://www.facebook.com/akermimootaz/";
                    instagramLink.href = "https://www.facebook.com/akermimootaz/";
                    linkedinLink.href = "https://www.facebook.com/akermimootaz/";
                    tween.to('.information-container ', 1, {
                        left: 0,
                        duration: 1,
                        ease: Power1.easeInOut

                    })
                    .to('.information', 1, {
                        opacity: 1,
                        duration: 1,
                        ease: Power1.easeInOut

                    });
                    leftGreen = 0;
                    
                    break;
    
    
    }
});
    


let tween2 = gsap.timeline();


exitBtn2.onclick = () => {
    tween2
    .to('.information', 1, {
        opacity: 0,
        duration: 1,
        ease: Power1.easeInOut

    })
    .to('.information-container ', 1, {
        left: "-120%",
        duration: 1,
        ease: Power1.easeInOut

    });
    
    test = 0;
    counter += 1;
   console.log(counter);
   let tween3 = gsap.timeline();
if (counter === 6) {
   tween3
            .to('.gr-information-container  ', 1, {
                delay: 3,
                left: 0,
                duration: 1,
                ease: Power1.easeInOut
        
            })
            .to('.gr-information-container  .information', 1, {
                opacity: 1,
                duration: 1,
                ease: Power1.easeInOut
        
            });
        } 
        
};

let tween4 = gsap.timeline();
exitBtn3.onclick = () => { 
    
        tween4
                .to('.gr-information-container  .information', 1, {
                    opacity: 0,
                    duration: 1,
                    ease: Power1.easeInOut
            
                })
                .to('.gr-information-container  ', 1, {
                     left: "-120%",
                     duration: 1,
                     ease: Power1.easeInOut
             
                 });
                 
                 window.location.href = "ourTeam.html";
};
        
  

    

// End ourTeam Section