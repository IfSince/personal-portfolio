import {createMenuEventListener} from '../shared/create-menu-event-listener.js';

const menuBtn = document.querySelector("#menu-icon");

createMenuEventListener(menuBtn);

const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        }
    })
});

document.querySelectorAll('.experience-list__card').forEach((card) => {
    experienceObserver.observe(card);
})



const fadeInBottomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if (entry.isIntersecting) {
           entry.target.classList.add("visible")
       }
    });
});

document.querySelectorAll('.fade-in__bottom').forEach((element) => {
    fadeInBottomObserver.observe(element);
});