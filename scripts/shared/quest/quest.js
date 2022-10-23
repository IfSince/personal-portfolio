import {createDomElement} from "../../util/createDomElement.js";

export class Quest {
    currentStepIndex = 0;
    progressPoints = [];

    /**
     *
     * @param formElement {HTMLElement}
     * @param questSteps {QuestStep[]}
     */
    constructor(formElement, questSteps) {
        this.formElement = formElement;
        this.questSteps = questSteps;
        this.createProgressPoints();
        this.createButtonEventListeners();

        this.updateActiveStep(0, false)
    }

    /**
     * Validates and submits quest
     */
    submit() {
        this.questSteps.forEach(step => step.validate());
        if (this.isValid) {
            alert("Passt alles");
        } else {
            alert("Passt nicht alles");
        }
    }

    /**
     * Updates active quest step
     * @param stepIndex {number}
     * @param validateStep {boolean}
     */
    updateActiveStep(stepIndex, validateStep = true) {
        if (stepIndex < 0 || stepIndex >= this.questSteps.length) return;

        const currentStep = this.questSteps[this.currentStepIndex];
        if (validateStep) currentStep.validate();

        currentStep.isValid ?
            this.goToStep(stepIndex) : this.progressPoints[this.currentStepIndex].classList.add("error");
    }

    /**
     * Updates element classes to go to next step
     * @param stepIndex
     */
    goToStep(stepIndex) {
        const removeActive = (list) => list.forEach((item) => item.classList.remove("active"));
        removeActive(this.progressPoints);
        removeActive(this.questSteps.map(step => step.panel));

        this.progressPoints[this.currentStepIndex].classList.remove("error");
        for (let i = 0; i <= stepIndex; i++) {
            this.progressPoints[i].classList.add("active");
        }
        this.questSteps[stepIndex].panel.classList.add("active");
        this.currentStepIndex = stepIndex;
    }

    /**
     * @returns {boolean}
     */
    get isValid() {
        return this.questSteps.every(step => step.isValid);
    }

    /**
     * Creates progress points for quest steps
     */
    createProgressPoints() {
        this.progressPoints = this.questSteps.map((step, stepIndex) => {
            const element = createDomElement("button", step.description, ["quest__progress-btn"]);
            element.type = "button";
            element.title = step.description;
            element.addEventListener("click", () => this.updateActiveStep(stepIndex));

            this.formElement.querySelector(".quest__progress").appendChild(element);
            return element;
        })
    }

    /**
     * Creates event listeners for buttons
     */
    createButtonEventListeners() {
        const prevButtons = this.formElement.querySelectorAll('[data-btn-type="prev"]');
        const nextButtons = this.formElement.querySelectorAll('[data-btn-type="next"]');
        const submitButton = this.formElement.querySelector('[data-btn-type="submit"]');

        prevButtons.forEach((btn) => {
            btn.addEventListener("click", () => this.updateActiveStep(this.currentStepIndex - 1));
        })
        nextButtons.forEach((btn) => {
            btn.addEventListener("click", () => this.updateActiveStep(this.currentStepIndex + 1));
        });
        submitButton.addEventListener("click", () => this.submit());
    }
}