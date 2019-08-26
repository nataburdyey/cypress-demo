export default class BasePage {
    constructor(props) {
        Object.assign(this, props || {});
    }

    back() {
        cy.visit(this.url);
        cy.url().should('include', this.url);
    }

    checkSectionLink(section, locator, url) {
        cy.get(section).scrollIntoView().within(() => {
            cy.get(locator).should('be.visible');
            cy.get(locator).click();
            cy.url().should('include', url);
            this.back();
        });
    }


}