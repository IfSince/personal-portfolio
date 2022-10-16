import {createMenuEventListener} from "./create-menu-event-listener.js";
import {updateBackground} from "./update-background.js";

const planetElements = document.querySelectorAll('.planet');
const starElement = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");

const heroSection = document.querySelector(".hero");
const scrollDownBtn = document.querySelector(".scroll-down");

createMenuEventListener(menuBtn);

document.body.addEventListener("mousemove", (e) => {
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});


const startContent = {
    h5: "Hello there I'm",
    h1: "Leon Laade.",
    text: "I'm a web designer &\nfrontend developer from Germany."
}

const portfolioContent = {
    h5: "Take a look at",
    h1: "My Portfolio",
    text: "Some of the projects I developed\nand contributed to over the last years."
}


/**
 *
 * @param content {{h5,h1,text}}
 */
function updateHeroContent(content) {
    const h5 = document.createElement("h5");
    const h1 = document.createElement("h1");
    const text = document.createElement("p");

    h5.innerText = content.h5;
    h1.innerText = content.h1;
    text.innerText = content.text;
    text.classList.add("text-lg-light");

    heroSection.style.overflow = "visible";

    removeCurrentContent(heroSection);
    animatePlanet();


    setTimeout(() => {
        heroSection.style.overflow = "hidden";
        heroSection.innerHTML = null;
        heroSection.appendChild(h5);
        heroSection.appendChild(h1);
        heroSection.appendChild(text);
    }, 1000)

}

function removeCurrentContent(heroElement) {
    const children = heroElement.children;
    [...children].forEach((element) => {
       console.log(element);
       element.classList.add("slideOut");
    });
}

function animatePlanet() {
    const planet = document.querySelector(".planet__red");

    if (planet.classList.contains("active")) {
        planet.classList.remove("active");
        planet.classList.add("unselect");
    } else {
        planet.classList.add("active");
        planet.classList.remove("unselect");
    }
}


// Open Portfolio Section
scrollDownBtn.addEventListener(("click"), () => {
    updateHeroContent(portfolioContent);

});
