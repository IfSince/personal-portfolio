import {createDomElement} from "../util/createDomElement.js";
import {toggleClasses} from "../util/toggleClasses.js";

export const initialContent =  {
    h5: "Hello there I'm",
    h1: "Leon Laade.",
    text: "I'm a web designer &<br>frontend developer from Germany.",
    relatedPlanet: null
}

export const portfolioContent = {
    h5: "Take a look at",
    h1: "My Portfolio",
    text: "Some of the projects I developed<br>and contributed to over the last years.",
    relatedPlanet: document.querySelector(".planet__red")
}


/**
 * Transitions between different content sections
 * @param containerSection {Object}
 * @param content {Object}
 * @param {string} content.h5
 * @param {string} content.h1
 * @param {string} content.text
 * @param {Element || null} content.relatedPlanet
 */
export function updateContent(containerSection, content) {
    const h5 = createDomElement("h5", content.h5)
    const h1 = createDomElement("h1", content.h1)
    const text = createDomElement("p", content.text, ["text-lg-light"]);

    removeCurrentContent(containerSection);
    toggleClasses("active", "unselect", content.relatedPlanet); // open or close planet

    setTimeout(() => {
        containerSection.style.overflow = "hidden";
        containerSection.innerHTML = null;
        containerSection.appendChild(h5);
        containerSection.appendChild(h1);
        containerSection.appendChild(text);
    }, 1000)
}

function removeCurrentContent(element) {
    element.style.overflow = "visible";
    const children = element.children;
    [...children].forEach(element => element.classList.add("slideOut"));
}