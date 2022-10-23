import {createMenuEventListener} from "./shared/create-menu-event-listener.js";
import {updateBackground} from "./home/update-background.js";
import {Slider} from "./shared/slider.js";
import {Quest} from "./shared/quest/quest.js";
import {contactForm, contactQuestSteps} from './home/contact-quest.js';

const starElement = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");

const projectSliderContainer = document.querySelector('.project-slider');
const images = [
    "./assets/home/projects/dabbing_astronaut.jpg",
    "./assets/home/projects/figuring_out.jpg",
    "./assets/home/projects/landed.jpg",
    "./assets/home/projects/riding_rocket.jpg",
    "./assets/home/projects/riding_rocket_peace.jpg",
    "./assets/home/projects/trying_out.jpg",
];

//Projects Slider
new Slider(projectSliderContainer, images, 3000);

//Contact Form Quest
new Quest(contactForm, contactQuestSteps);

createMenuEventListener(menuBtn);

// Mousemove effect for background
document.body.addEventListener("mousemove", (e) => {
    updateBackground(starElement, e.pageX, e.pageY, 0.005);
});

// const contentSlider = new ContentSlider(contentList, "hero");

// Scroll Down Button
// scrollDownBtn.addEventListener(("click"), () => {
//     contentSlider.scrollInDirection("down");
// });

// Scroll Function
// let isLoading = false;
// window.addEventListener("wheel", (e) => {
//     if (!isLoading) {
//         if (e.deltaY < 0) {
//             contentSlider.scrollInDirection("up")
//         }
//         else if (e.deltaY > 0) {
//             contentSlider.scrollInDirection("down")
//         }
//
//         setTimeout(() => isLoading = false, 1800)
//         isLoading = true;
//     }
// });