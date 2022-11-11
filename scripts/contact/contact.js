import {createMenuEventListener} from '../shared/create-menu-event-listener.js';
import {Quest} from '../shared/quest/quest.js';
import {contactForm, contactQuestSteps} from '../home/contact-quest.js';

const menuBtn = document.querySelector("#menu-icon");

createMenuEventListener(menuBtn);

//Create Quest
const contactQuest = new Quest(contactForm, contactQuestSteps)