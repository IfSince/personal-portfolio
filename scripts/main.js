import {createMenuEventListener} from './shared/create-menu-event-listener.js';
import {starTransition} from './home/star-transition.js';
import {Quest} from './shared/quest/quest.js';
import {contactForm, contactQuestSteps} from './home/contact-quest.js';

const starBackground = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");


new Quest(contactForm, contactQuestSteps);

createMenuEventListener(menuBtn);

document.body.addEventListener("mousemove", (e) => {
    starTransition(starBackground, e.pageX, e.pageY, 0.005);
});