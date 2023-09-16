const root = document.documentElement;
const changeBtn = document.querySelectorAll('#changeBtn');
let mode = false;

let whiteColor = getComputedStyle(root).getPropertyValue("--white");
let blackColor = getComputedStyle(root).getPropertyValue("--black");
let blueColor = getComputedStyle(root).getPropertyValue("--blue-primary");
let redColor = getComputedStyle(root).getPropertyValue("--red-primary");
let greenColor = getComputedStyle(root).getPropertyValue("--green-primary");
let yellowColor = getComputedStyle(root).getPropertyValue("--yellow-primary");

changeBtn[0].addEventListener('click', (e) => changeColor(blueColor));
changeBtn[1].addEventListener('click', (e) => changeColor(yellowColor));
changeBtn[2].addEventListener('click', (e) => changeColor(greenColor));
changeBtn[3].addEventListener('click', (e) => changeColor(redColor));
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
    OnReapeat: () => {
        gsap.set('#texttwo', {opacity:0});
        gsap.set('#bar', {scaleY: 0.1});
        gsap.set('#textone h1', {opacity: 1});
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
        x: 600,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 0,
        delay: 0.5,
        ease: "back.inOut(0.8)"
    })
    .to('#slidebar', 1.5, {
        x: 600,
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
        }
    })
    .to('#textone', 1.5, {
        delay: 0.5,
        ease: "back.inOut(0.8)",
        "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%"

    });
    gsap.set('#texttwo', {opacity: 0});
    gsap.set('#bar', {scaleY: 0.1});