import {createMenuEventListener} from "./create-menu-event-listener.js";
import {updateBackground} from "./update-background.js";

const planetElement = document.querySelector('.planets');
const starElement = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");

createMenuEventListener(menuBtn);

document.body.addEventListener("mousemove", (e) => {
    updateBackground(planetElement, e.pageX, e.pageY, -0.02);
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});