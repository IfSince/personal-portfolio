import {FormField} from "../shared/quest/form-field.js";
import {QuestStep} from "../shared/quest/quest-step.js";

export const contactForm = document.querySelector("#contactForm")

const personalFormFields = [
    new FormField(document.querySelector("#salutation")),
    new FormField(document.querySelector("#firstName"), {
        minLength: 2,
        maxLength: 40,
        textOnly: true,
    }),
    new FormField(document.querySelector("#surname"), {
        mandatory: true,
        minLength: 2,
        maxLength: 40,
        textOnly: true
    }),
]

const addressFormFields = [
    new FormField(document.querySelector("#street"), {
        minLength: 2,
        maxLength: 40,
        textOnly: true
    }),
    new FormField(document.querySelector("#houseNr"), {
        maxLength: 6
    }),
    new FormField(document.querySelector("#zip"), {
        minLength: 5,
        maxLength: 5,
        numbersOnly: true
    }),
    new FormField(document.querySelector("#city"), {
        minLength: 2,
        maxLength: 40,
        textOnly: true
    }),
]

const messageFormFields = [
    new FormField(document.querySelector("#email"), {
        mandatory: true,
        isEmail: true,
        maxLength: 40
    }),
    new FormField(document.querySelector("#message"), {
        mandatory: true,
        minLength: 10,
        maxLength: 300
    }),
]

const personalStepPanel = contactForm.querySelector("#personalStep")
const addressStepPanel = contactForm.querySelector("#addressStep")
const messageStepPanel = contactForm.querySelector("#messageStep")

export const contactQuestSteps = [
    new QuestStep(personalFormFields, "Personal", personalStepPanel),
    new QuestStep(addressFormFields, "Address", addressStepPanel),
    new QuestStep(messageFormFields, "Message", messageStepPanel)
]