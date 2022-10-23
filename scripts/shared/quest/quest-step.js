export class QuestStep {
    /**
     *
     * @param formFields {FormField[]}
     * @param description {string}
     * @param panel {HTMLElement}
     */
    constructor(formFields, description, panel) {
        this.formFields = formFields;
        this.description = description;
        this.panel = panel;
    }

    /**
     * Validates quest step
     */
    validate() {
        this.formFields.forEach(formField => formField.validate());
    }

    /**
     * @returns {boolean}
     */
    get isValid() {
        return this.formFields.every(formField => formField.isValid);
    }
}