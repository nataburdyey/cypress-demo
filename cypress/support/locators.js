export const locatorHelpers = {
    // General
    section: (text, n = 1) => `(//section[.//*[contains(text(),'${text}')]])[${n}]`,
    button: (text, n = 1) => `(//a[contains(@class,'btn') and contains(text(),'${text}')])[${n}]`,
    tab: (text, n = 1) => `(//li[@data-tabcontroller='${text}'])[${n}]`,

    /*
    seeMore: n => `(//button[@id='topMatchesScroll'])[${n}]`,
    donateButton: (text, n = 1) => `(//button[.//*[contains(text(),'Donate')]])[${n}]`,
    giveButton: n => `(//button[.//*[contains(text(),'Give')]])[${n}]`,
    nextButton: (n = 1) => `(//button[contains(text(),'Next')])[${n}]`,
    doneButton: (n = 1) => `(//button[contains(text(),'Done')])[${n}]`,
    disabledButton: (text, n = 1) => `(//button[@ng-reflect-disabled='true'][.//*[contains(text(),'${text}')]])[${n}]`,

    // Dialogs
    dialog: text => `//mat-dialog-container[.//*[contains(text(), '${text}')]]`,

    // Cards, chips, widgets
    widget: text => `//widget-summary[.//*[contains(text(), '${text}')]]`,
    matcard: n => `(//*[@class='mat-card'])[${n}]`,
    elementText: (el, text, n = 1) => `(//${el}[(text()='${text}')])[${n}]`,
    placeholder: (text, n = 1) => `(//input[@placeholder="${text}"])[${n}]`,
    option: opt => `//mat-option[.//*[contains(text(), '${opt}')]]`,
    checkbox: n => `(//mat-checkbox[@class='mat-checkbox mat-primary'])[${n}]`,
    checkboxLabel: (label, n = 1) => `(//mat-checkbox[@aria-label='${label}'])[${n}]`,
    chip: (text, n = 1) => `(//mat-chip[contains(text(),'${text}')])[${n}]`,
    causeChip: (text, n = 1) => `(//mat-chip[.//*[contains(text(),'${text}')]])[${n}]`,
    searchChip: (text, n = 1) => `(//mat-chip[.//*[contains(text(),'${text}')]])[${n}]`,
    matchLevelChip: "//mat-chip[.//*[contains(text(),' Employer match 50% and higher ')]]",

    // Elements
    nav: (text, n = 1) => `(//div[text()='${text}'])[${n}]`,
    footer: "//div[@class='container-fluid footer_padding secondary-color-900 text-white py-2']",
    */
};

export const locators = {
    ...locatorHelpers,
    btnRequestADemo: locatorHelpers.button('Request a Demo'),

}