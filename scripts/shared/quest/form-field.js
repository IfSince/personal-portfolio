import {createDomElement} from "../../util/createDomElement.js";

export class FormField {
    errors = [];
    value = null;

    /**
     * @param domElement {HTMLElement}
     * @param validations {Object}
     */
    constructor(domElement, validations = {}) {
        this.domElement = domElement;
        this.validations = validations;

        this.domElement.insertAdjacentElement(
            "afterend",
            createDomElement("ul", null, ["form-control__errors"])
        );

        this.addEventListener();
    }

    /**
     * Adds event listeners for formfield
     */
    addEventListener() {
        this.domElement.addEventListener("focusout", (e) => {
            this.value = e.target.value.trim();
            this.validate();
        });
    }

    /**
     * Validates FormField
     */
    validate() {
        this.errors = [];
        for (const key in this.validations) {
            switch (key) {
                case "mandatory": {
                    this.validateMandatory(key);
                    break;
                }
                case "minLength": {
                    this.validateMinLength(key);
                    break;
                }
                case "maxLength": {
                    this.validateMaxLength(key);
                    break;
                }
                case "textOnly": {
                    this.validateTextOnly(key);
                    break;
                }
                case "numbersOnly": {
                    this.validateNumbersOnly();
                    break;
                }
                case "isEmail": {
                    this.validateIsEmail();
                    break;
                }
                default: break;
            }
        }
        this.writeValidationResult();
    }

    validateMandatory(key) {
        if (this.validations[key] && !this.value) {
            this.errors = [...this.errors, "Das Feld ist ein Pflichtfeld."];
        }
    }

    validateMinLength(key) {
        if (this.value?.length > 0 && this.validations[key] > this.value?.length) {
            this.errors = [...this.errors, `Das Feld muss mindestens ${this.validations[key]} Zeichen lang sein.`];
        }
    }

    validateMaxLength(key) {
        if (this.validations[key] < this.value?.length) {
            this.errors = [...this.errors, `Das Feld darf maximal ${this.validations[key]} Zeichen lang sein.`];
        }
    }

    validateTextOnly() {
        if (this.value?.length > 0 && !/^[a-zA-Z]+$/g.test(this.value)) {
            this.errors = [...this.errors, "Das Feld darf nur Buchstaben beinhalten."];
        }
    }

    validateNumbersOnly() {
        if (this.value?.length > 0 && !/\d+/.test(this.value)) {
            this.errors = [...this.errors, "Das Feld darf nur Zahlen beinhalten."];
        }
    }

    validateIsEmail() {
        if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/.test(this.value)) {
            this.errors = [...this.errors, "Bitte geben Sie eine gültige E-Mail ein."];
        }
    }

    /**
     * Creates DOM-Elements for Errors
     */
    writeValidationResult() {
        let errorList = this.domElement.nextElementSibling;
        errorList.innerHTML = null;
        this.domElement.style.border = null;

        if (!this.isValid) {
            this.errors.forEach((error) => {
                const element = createDomElement("li", error);
                errorList.appendChild(element);
            });
            this.domElement.style.border = "1px solid red";
        }
    }

    /**
     * @returns {boolean}
     */
    get isValid() {
        return !!this.errors && this.errors.length === 0;
    }
}
