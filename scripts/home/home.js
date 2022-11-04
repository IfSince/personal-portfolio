import {createMenuEventListener} from '../shared/create-menu-event-listener.js';
import {starTransition} from './star-transition.js';
import {Quest} from '../shared/quest/quest.js';
import {contactForm, contactQuestSteps} from './contact-quest.js';

const starBackground = document.querySelector('.stars');
const menuBtn = document.querySelector("#menu-icon");


new Quest(contactForm, contactQuestSteps);

createMenuEventListener(menuBtn);

document.body.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;

    starTransition(starBackground, e.pageX, e.pageY, 0.005);
});