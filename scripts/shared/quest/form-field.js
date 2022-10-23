import {createDomElement} from "../../util/createDomElement.js";

export class FormField {
    errors = []
    value = null;

    /**
     *
     * @param domElement {Element}
     * @param validations {Object}
     */
    constructor(domElement, validations = {}) {
        this.domElement = domElement
        this.validations = validations

        this.domElement.insertAdjacentElement(
            "afterend",
            createDomElement("ul", null, ["form-control__errors"])
        )

        this.addEventListener()
    }

    addEventListener() {
        this.domElement.addEventListener("focusout", (e) => {
            this.value = e.target.value.trim();
            this.validate();
        })
    }

    validate() {
        this.errors = [];
        for (const key in this.validations) {
            switch (key) {
                case "minLength": {
                    if (this.validations[key] > (this.value?.length || 0)) {
                        this.errors.push(`Das Feld muss mindestens ${this.validations[key]} Zeichen lang sein.`)
                    }
                    break;
                }
                case "maxLength": {
                    if (this.validations[key] < (this.value?.length || 0)) {
                        this.errors.push(`Das Feld darf maximal ${this.validations[key]} Zeichen lang sein.`)
                    }
                    break;
                }
            }
        }
        this.writeValidationResult()
    }

    writeValidationResult() {
        let errorList = this.domElement.nextElementSibling
        errorList.innerHTML = null;

        if (!this.isValid) {
            this.errors.forEach((error) => {
                const element = createDomElement("li", error)
                errorList.appendChild(element)
            });
        }
    }

    get isValid() {
        return !!this.errors && this.errors.length === 0
    }
}
