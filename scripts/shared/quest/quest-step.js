export class QuestStep {
    /**
     *
     * @param formFields {FormField[]}
     * @param description {string}
     * @param panel {Element}
     */
    constructor(formFields, description, panel) {
        this.formFields = formFields
        this.description = description
        this.panel = panel
    }

    validate() {
        this.formFields.forEach(formField => formField.validate())
    }

    get isValid() {
        return this.formFields.every(formField => formField.isValid)
    }
}