import {createMenuEventListener} from '../shared/create-menu-event-listener.js';
import {initBlog} from './blog.js';
import '../components/blogPost.js';

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

document.querySelectorAll('[class*=fade-in]').forEach((element) => {
    fadeInBottomObserver.observe(element);
});

// Load and create Blogposts
initBlog(fadeInBottomObserver)