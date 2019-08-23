import BaseFragment from './base';
import {
    locators
} from '../locators';

export const cookieLocators = {
    wrapperPanel: '.optanon-alert-box-wrapper',
    acceptButton: '.optanon-alert-box-button-container a.optanon-allow-all',
    closeButton: '.optanon-alert-box-corner-close a.optanon-alert-box-close',
    settingButton: 'a.optanon-toggle-display',
};


const loc = {
    ...locators,
    ...cookieLocators
};

class CookieFragment extends BaseFragment {
    within(fn) {
        cy.get(loc.wrapperPanel).within(fn);
    }

    verifySettings() {
        this.isVisible();
        this.within(panel => cy.get(loc.settingButton).click());
    }

    accept() {
        this.isVisible();
        this.within(panel => cy.get(loc.acceptButton).click());
    }

    close() {
        this.isVisible();
        this.within(panel => cy.get(loc.closeButton).click());
    }

    isVisible() {
        cy.get(loc.wrapperPanel).should('be.visible');
    }
}

export const cookieFragment = new CookieFragment(cookieLocators);