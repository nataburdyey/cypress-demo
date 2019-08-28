import {
    platformPage
} from "../../support/pages/explore/platformPage.po";

import {
    cookieFragment
} from '../../support/fragments/cookie'

describe('Verify Platform page', () => {

    context('Smoke test', () => {
        beforeEach(() => {
            cy.visit(platformPage.url);
            cookieFragment.accept();
        });

        it('verifies all sections are displayed on the page', () => {
            platformPage.verifyGreySection();
            platformPage.verifyVideoSection();
            platformPage.verifyFeaturesSection();
            platformPage.verifySuccessStorySection();
            platformPage.verifyPlatformSection();
            platformPage.verifyFourTabsSection();
            platformPage.verifyThreeTabsSection();
            platformPage.verifyCustomerFrienshipSection();
            platformPage.verifySecuritySection();
            platformPage.verifyToDoNextSection();
            platformPage.verifyDemoSection();

        });
    });
});