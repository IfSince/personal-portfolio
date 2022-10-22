import {createMenuEventListener} from "./create-menu-event-listener.js";
import {updateBackground} from "./update-background.js";
import {ContentSlider} from "../hero/scroll.js";

const starElement = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");
const scrollDownBtn = document.querySelector(".scroll-down");
const contentList = document.querySelectorAll(".content-section");

createMenuEventListener(menuBtn);

// Mousemove effect for background
document.body.addEventListener("mousemove", (e) => {
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});


const contentSlider = new ContentSlider(contentList, "hero");

//initial load
contentSlider.scrollToIndex(0);

// Scroll Down Button
scrollDownBtn.addEventListener(("click"), () => {
    contentSlider.scrollInDirection("down");
});

// Scroll Function
window.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        contentSlider.scrollInDirection("up")
    }
    else if (e.deltaY > 0) {
        contentSlider.scrollInDirection("down")
    }
});