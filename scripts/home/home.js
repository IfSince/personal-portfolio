import {createMenuEventListener} from '../shared/create-menu-event-listener.js';
import {Slider} from '../shared/slider.js';

const starBackground = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");
const projectSliderContainer = document.querySelector('[data-project-slider]');
const slides = document.querySelectorAll('.projects__slide');

createMenuEventListener(menuBtn);

const slider = new Slider(projectSliderContainer, [...slides], null, 1200);
slider.init();

/*===========================================================================================
        Background Mouseover
=============================================================================================*/
document.body.addEventListener("mousemove", (e) => {
    const multiplier = 0.005;
    starBackground.style.setProperty("--x", e.pageX * multiplier + "px");
    starBackground.style.setProperty("--y", e.pageY * multiplier + "px");
});

/*===========================================================================================
        Intersection Observer
=============================================================================================*/
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

const sliderObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           slider.play();
       } else {
           slider.pause();
       }
   });
});
sliderObserver.observe(projectSliderContainer);
