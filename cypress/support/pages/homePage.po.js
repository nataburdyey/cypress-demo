import BasePage from './basePage.po';
import {
    locators
} from '../locators';
import {
    demoPage
} from './explore/demoPage.po';
import {
    productPage
} from './explore/productPage.po';
import {
    platformPage
} from './explore/platformPage.po';

export const homeLocators = {
    // URLs
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
    newStandardSection: locators.section('Set a New Standard for Customer Support'),

    // Buttons
    // move to general?
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

class HomePage extends BasePage {


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

    verifyNewStandardSection() {
        cy.xpath(loc.newStandardSection).should('be.visible');
        this.checkSectionLink(loc.newStandardSection, loc.btnGetGuide, loc.urlGuides);
        this.checkSectionLink(loc.newStandardSection, loc.btnReadBlog, loc.urlBlog);
        this.checkSectionLink(loc.newStandardSection, loc.btnGetGuide2, loc.urlGuides);
    }

}

export const homePage = new HomePage(homeLocators);