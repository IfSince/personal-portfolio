import {createMenuEventListener} from '../shared/create-menu-event-listener.js';
import {Quest} from '../shared/quest/quest.js';
import {contactForm, contactQuestSteps} from './contact-quest.js';

const menuBtn = document.querySelector("#menu-icon");

createMenuEventListener(menuBtn);

//Create Quest
new Quest(contactForm, contactQuestSteps)