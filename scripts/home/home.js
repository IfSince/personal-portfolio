import {createMenuEventListener} from '../shared/create-menu-event-listener.js';
import {Slider} from '../shared/slider.js';

const starBackground = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");
const projectSliderContainer = document.querySelector('.projects__content');
const slides = document.querySelectorAll('.projects__slide');

createMenuEventListener(menuBtn);

new Slider(projectSliderContainer, [...slides])

document.body.addEventListener("mousemove", (e) => {
    const multiplier = 0.005;
    starBackground.style.setProperty("--x", e.pageX * multiplier + "px");
    starBackground.style.setProperty("--y", e.pageY * multiplier + "px");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const target = entry.target;
        const animationDivs = target.nextElementSibling?.querySelectorAll('.image__cover');
        if (entry.isIntersecting) {
            target.classList.add("active");
            animationDivs?.forEach(div => div.classList.add("active"));
        } else {
            target.classList.remove("active");
            animationDivs?.forEach(div => div.classList.remove("active"));
        }
    });
})

document.querySelectorAll('.hero').forEach((section) => {
    observer.observe(section);
})

