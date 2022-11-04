import {createMenuEventListener} from '../shared/create-menu-event-listener.js';

const menuBtn = document.querySelector("#menu-icon");

createMenuEventListener(menuBtn);

const experienceObserver = new IntersectionObserver((entries) => {
    console.log('test')
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        }
    })
});

document.querySelectorAll('.experience-list__card').forEach((card) => {
    experienceObserver.observe(card);
})