import {createMenuEventListener} from "./create-menu-event-listener.js";
import {updateBackground} from "./update-background.js";
import {initialContent, portfolioContent, updateContent} from "../hero/updateContent.js";

const starElement = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");
const heroSection = document.querySelector(".hero");
const scrollDownBtn = document.querySelector(".scroll-down");

createMenuEventListener(menuBtn);
updateContent(heroSection, initialContent)

// Mousemove effect for background
document.body.addEventListener("mousemove", (e) => {
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});

// Open Portfolio Section
scrollDownBtn.addEventListener(("click"), () => {
    updateContent(heroSection, portfolioContent);
});
