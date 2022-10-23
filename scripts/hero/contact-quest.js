import {FormField} from "../shared/quest/form-field.js";
import {QuestStep} from "../shared/quest/quest-step.js";

export const contactForm = document.querySelector("#contactForm")

const personalFormFields = [
    new FormField(document.querySelector("#salutation")),
    new FormField(document.querySelector("#firstName"), {minLength: 2, maxLength: 40}),
    new FormField(document.querySelector("#surname"), {minLength: 2, maxLength: 40}),
]

const addressFormFields = [
    new FormField(document.querySelector("#street")),
    new FormField(document.querySelector("#houseNr")),
    new FormField(document.querySelector("#zip")),
    new FormField(document.querySelector("#city")),
]

const messageFormFields = [
    new FormField(document.querySelector("#email")),
    new FormField(document.querySelector("#message")),
]

const personalStepPanel = contactForm.querySelector("#personalStep")
const addressStepPanel = contactForm.querySelector("#addressStep")
const messageStepPanel = contactForm.querySelector("#messageStep")

export const contactQuestSteps = [
    new QuestStep(personalFormFields, "Personal", personalStepPanel),
    new QuestStep(addressFormFields, "Address", addressStepPanel),
    new QuestStep(messageFormFields, "Message", messageStepPanel)
]