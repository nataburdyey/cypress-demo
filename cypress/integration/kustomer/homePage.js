import {
    homePage
} from "../../support/pages/homePage";

import {
    cookieFragment
} from '../../support/fragments/cookie'

describe('Mini Demo for Kustomer', () => {

    context('Cookie', () => {
        beforeEach(() => {
            cy.visit(homePage.url);
            cy.clearCookies();
        });
        it('shows cookie panel', () => {
            cookieFragment.isVisible();
        });

        it('shows cookie settings dialog', () => {
            cookieFragment.verifySettings();
        });

        it('cookie panel can be closed by X', () => {
            cookieFragment.close();
        });

        it('accept Cookie', () => {
            cookieFragment.accept();
        })
    });

    context('Verify Home Page', () => {
        beforeEach(() => {
            cy.visit(homePage.url);
            cookieFragment.accept();
        });

        it('Verify all sections are displayed on the page', () => {
            homePage.verifyReimaginedSection();
            homePage.verifyConversationContextSection();
            homePage.verifyAutomationSection();
            homePage.verifyAwayReviewSection();
            homePage.verifyNewStandardSection();
        });
    });
});