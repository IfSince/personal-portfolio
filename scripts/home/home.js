import {createMenuEventListener} from '../shared/create-menu-event-listener.js';
import {starTransition} from './star-transition.js';
import {Slider} from '../shared/slider.js';

const starBackground = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");
const projectSliderContainer = document.querySelector('.projects__content');
const slides = document.querySelectorAll('.projects__slide');


createMenuEventListener(menuBtn);

new Slider(projectSliderContainer, [...slides])

document.body.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;

    starTransition(starBackground, e.pageX, e.pageY, 0.005);
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

