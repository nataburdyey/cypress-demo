import {
    platformPage
} from "../../support/pages/explore/platformPage.po";

import {
    cookieFragment
} from '../../support/fragments/cookie'

describe('', () => {

    context('Verify Platform page', () => {
        beforeEach(() => {
            cy.visit(platformPage.url);
            cookieFragment.accept();
        });

        it('Verify all sections are displayed on the page', () => {
            platformPage.verifyGreySection();

        });
    });
});