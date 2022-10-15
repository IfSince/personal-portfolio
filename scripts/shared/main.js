import {createMenuEventListener} from "./create-menu-event-listener.js";
import {updateBackground} from "./update-background.js";

const planetElements = document.querySelectorAll('.planet');
const starElement = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");

createMenuEventListener(menuBtn);

document.body.addEventListener("mousemove", (e) => {
    [...planetElements].forEach((element) => {
        updateBackground(element, e.pageX, e.pageY, -0.01);
    })
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});