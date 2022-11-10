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