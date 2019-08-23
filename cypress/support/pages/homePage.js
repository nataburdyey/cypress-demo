import BasePage from './basePage';
import {
    locators
} from '../locators';
import {
    demoPage
} from './explore/demoPage'
import {
    productPage
} from './explore/productPage'
import {
    platformPage
} from './explore/platformPage';

export const homeLocators = {
    // Urls
    url: '/',
    urlCaseStudy: '/case-study/',
    urlGuides: '/guides/',
    urlBlog: '/blog/',

    // Home page sections
    reimaginedSection: locators.section('Customer Service'),
    brandSection: 'section.brand-section',
    conversationContextSection: locators.section('Context for Every Conversation'),
    omnichannelSection: locators.section('Truly Omnichannel'),
    automationSection: locators.section('Intelligent Automation'),
    awayReviewSection: locators.section('Analytics Manager, Away'),
    newStandartSection: locators.section('Set a New Standard for Customer Support'),

    // Buttons
    btnRequestDemo: locators.button('Request a Demo'),
    btnReadCaseStudy: locators.button('Read the case study'),
    btnGetGuide: locators.button('Get the Guide'),
    btnGetGuide2: locators.button('Get the Guide', 2),
    btnReadBlog: locators.button('Read the Blog'),

    // Links
    lnkProduct: `a[href='${productPage.url}']`,
    lnkPlatform: `a[href='${platformPage.url}']`,
};

const loc = {
    ...locators,
    ...homeLocators
};

export class HomePage extends BasePage {
    back() {
        cy.visit(loc.url);
        //cy.go('back');
        cy.url().should('include', loc.url);
    }

    checkSectionLink(section, lnk, url) {
        cy.get(section).within(() => {
            cy.get(lnk).should('be.visible');
            cy.get(lnk).click();
            cy.url().should('include', url);
            this.back();
        });
    }

    verifyReimaginedSection() {
        cy.xpath(loc.reimaginedSection).should('be.visible');
        this.checkSectionLink(loc.reimaginedSection, loc.btnRequestDemo, demoPage.url);
    };

    verifyBrandSection() {
        cy.get(loc.brandSection).should('be.visible');
    };

    verifyConversationContextSection() {
        cy.xpath(loc.conversationContextSection).should('be.visible');
        this.checkSectionLink(loc.conversationContextSection, loc.lnkProduct, productPage.url);
    };

    verifyAutomationSection() {
        cy.xpath(loc.automationSection).should('be.visible');
        this.checkSectionLink(loc.automationSection, loc.lnkPlatform, platformPage.url);
    };

    verifyAwayReviewSection() {
        cy.xpath(loc.awayReviewSection).should('be.visible');
        this.checkSectionLink(loc.awayReviewSection, loc.btnReadCaseStudy, loc.urlCaseStudy);
    };

    verifyNewStandartSection() {
        cy.xpath(loc.newStandartSection).should('be.visible');
        this.checkSectionLink(loc.newStandartSection, loc.btnGetGuide, loc.urlGuides);
        this.checkSectionLink(loc.newStandartSection, loc.btnReadBlog, loc.urlBlog);
        this.checkSectionLink(loc.newStandartSection, loc.btnGetGuide2, loc.urlGuides);
    }

}

export const homePage = new HomePage(homeLocators);