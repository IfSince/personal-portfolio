import {createMenuEventListener} from "./create-menu-event-listener.js";
import {updateBackground} from "./update-background.js";
import {ContentSlider} from "../hero/scroll.js";
import {Quest} from "./quest/quest.js";
import {contactForm, contactQuestSteps} from "../hero/contact-quest.js";

const starElement = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");
const scrollDownBtn = document.querySelector(".scroll-down");
const contentList = document.querySelectorAll(".content-section");

//Create Quest
const contactQuest = new Quest(contactForm, contactQuestSteps)

createMenuEventListener(menuBtn);

// Mousemove effect for background
document.body.addEventListener("mousemove", (e) => {
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});


const contentSlider = new ContentSlider(contentList, "hero");

// Scroll Down Button
scrollDownBtn.addEventListener(("click"), () => {
    contentSlider.scrollInDirection("down");
});

// Scroll Function
let isLoading = false;
window.addEventListener("wheel", (e) => {
    if (!isLoading) {
        if (e.deltaY < 0) {
            contentSlider.scrollInDirection("up")
        }
        else if (e.deltaY > 0) {
            contentSlider.scrollInDirection("down")
        }

        setTimeout(() => isLoading = false, 1800)
        isLoading = true;
    }
});