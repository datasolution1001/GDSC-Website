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
                    captionH3.innerHTML = "Mootaz Akermi";
                    captionP.innerHTML = "Quality Manager";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Hi I'm Mootaz Akermi, I'm a third-year Computer Science student with expertise in web development and penetration testing. As the Quality Manager at Google Developer Student Club ISI Ariana, I'm dedicated to empowering tech enthusiasts and fostering innovation.";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "As Quality Manager at GDSC ISI Ariana, my vision is a dynamic, inclusive community driven by uncompromising quality. We will celebrate diversity, uphold industry standards, and craft impactful projects that leave a lasting mark in the tech ecosystem.";
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
                    img.src = "assets/nour.jpg";
                    img.alt = "financial manager";
                    captionH3.innerHTML = "Nour Bouajina";
                    captionP.innerHTML = "Financial Manager";
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
                    facebookLink.href = "https://www.facebook.com/profile.php?id=100077718219181";
                    instagramLink.href = "";
                    linkedinLink.href = "https://www.linkedin.com/in/nour-bouajina/";
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
                    img.src = "assets/ameni.jpg";
                    img.alt = "lead";
                    captionH3.innerHTML = "Ameni Besbes";
                    captionP.innerHTML = "GDSC Lead";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Hey guys! My name is Ameni BESBES, 2nd year Computer Science student at ISI Ariana and the Google DSC lead for the 2023-2024 mandate at our institute.";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "My plan is to create an environment where all students can learn and connect. We plan to foster a thriving community where we can gain valuable knowledge, communicate with each other and connect with fellow tech enthusiasts and learners!";
                    facebookLink.href = "https://www.facebook.com/ameni.besbes2036";
                    instagramLink.href = "";
                    linkedinLink.href = "https://www.linkedin.com/in/ameni-besbes/";
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
                    img.src = "assets/fedy.jpg";
                    img.alt = "GDSC Mentor";
                    captionH3.innerHTML = "Fady Trabelsi";
                    captionP.innerHTML = "GDSC Mentor";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "I'm Fedi Trabelsi, a 3rd year computer science student and a Flutter developer. I was also an former GDSC lead at my campus and I'm always looking for new experiences";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "My vision as a GDSC mentor is to help the future generation step up their game and develop their skills by providing them knowledge and sharing with them experiences so that they can take off on their own wings";
                    facebookLink.href = "https://www.facebook.com/profile.php?id=100010942969339";
                    instagramLink.href = "";
                    linkedinLink.href = "https://www.linkedin.com/in/fedi-trabelsi-79b245257/";
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
                    img.src = "assets/malak.jpg";
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
                    img.src = "assets/salma.jpg";
                    img.alt = "Designer";
                    captionH3.innerHTML = "Salma Guesmi";
                    captionP.innerHTML = "Designer";
                    textH1.innerHTML = "About Me";
                    textP1.innerHTML = "Hi, i'm Salma GUESMI this is going to be my second year as a computer engineering student ,and i'm the Media Manager for Google DSC. Being part of this community is such an honor for me .";
                    textH2.innerHTML = "My plan";
                    textP2.innerHTML = "My motive for this position is to create simple and attractive posts, that capture all of our different events as well as our wonderfull memories as a Google DSC community at our institute .";
                    facebookLink.href = "https://www.facebook.com/salma.guesmi.758";
                    instagramLink.href = "";
                    linkedinLink.href = "https://www.linkedin.com/in/salma-guesmi-520980253/";
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