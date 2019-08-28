import BasePage from '../basePage.po';
import {
    demoPage
} from './demoPage.po';
import {
    locators
} from '../../locators';
import Cypress from '@testing-library/cypress';

export const platformLocators = {
    // URLs
    url: '/platform/',
    videoUrl: '/platform-videos/',
    theFarmersDogUrl: '/the-farmers-dog/',
    HIPAAUrl: '/privacy/hipaa/',
    securityUrl: '/security/',
    integrationsUrl: '/product/integrations/',
    transactionalToConversationalUrl: '/whitepapers/transactional-to-conversational/',
    twelveReasonsUrl: '/guides/12-reasons-to-choose-kustomer/',

    // Platform page sections
    greySection: '.grey-section',
    videoSection: '.cs-video-container',
    featuresSection: '.features',
    successStorySection: '.sucess-story-section',
    platformSection: '.platform',
    fourTabsSection: '.tabs.tab-four',
    threeTabsSection: '.tabs.tab-third',
    customerFrienshipSection: '.purple_section',
    securitySection: '.last-section',
    toDoNextSection: locators.section('Here\'s what to do next:'),
    demoSection: '.demo-section',

    // fourTabsSection tabs
    activeTab: '.tab-container .tab-data.active',
    customObjectsTab: locators.tab('Custom Objects'),
    insightsPanelTab: locators.tab('Insights Panel'),
    segmentationTab: locators.tab('Segmentation'),
    objectReportingTab: locators.tab('Object Reporting'),

    // threeTabsSection tabs
    businessRulesTab: locators.tab('Business Rules'),
    workflowsTab: locators.tab('Workflows'),
    apiTab: locators.tab('APIs'),

    // Buttons
    playVideoBtn: 'button[aria-label="Play Video: Kustomer_4.0"]',
    ReadTheStoryBtn: locators.button('Read the Story'),
    btnHIPAA: locators.button('Read New HIPAA Compliance'),
    btnCompliance: locators.button('Compliance, Security and Certifications'),
    btnExploreIntegrations: locators.button('Explore Integrations'),
    btnDownloadWhitepaper: locators.button('Download whitepaper'),
    btnReadGuide: locators.button('Read the guide'),
    btnRequestLiveDemo: locators.button('Request Live Demo'),
    btnViewDemoVideos: locators.button('View Demo Videos'),

    // Images
    videoImage: '[alt="Video Thumbnail"]',
    oldWayImage: '//img[contains(@src, "Old-Way.png")]',
    newToolsImage: '//img[contains(@src, "New-Tools.png")]',
    friendshipImage: '//img[contains(@src, "1Customer-friendships-are-created-with-Kustomer@2x.png")]',
    oldWayArtImage: '//img[contains(@src, "the_old_way_art.png")]',
    logoAWS: '//img[contains(@src, "aws_logo_02.png")]',
    customerUnderstandingImage: '//img[contains(@src, "CES-Customer-Understanding-Header.jpg")]',
    twelveReasonsImage: '//img[contains(@src, "1500x1000-12-reasons-and-event.png")]',
    liveDemoImage: '//img[contains(@src, "1040x694-asset-live-demo.png")]',

};

const loc = {
    ...locators,
    ...platformLocators
};

class PlatformPage extends BasePage {

    verifyGreySection() {
        cy.get(loc.greySection).should('be.visible');
        cy.get(loc.greySection).contains('The Kustomer Platform. One foundation, Endless uses.');
        this.checkSectionLink(loc.greySection, loc.btnRequestADemo, demoPage.url);
    };

    verifyVideoSection() {
        cy.get(loc.videoSection).should('be.visible');
        cy.get(loc.videoSection).within(() => {
            cy.get(loc.videoImage).should('be.visible');
            cy.get('.w-big-play-button').as('playVideo');
            // ToDo: play video 
            // cy.get('@playVideo').click();
            // cy.get('button[title="Play Video"]').click();
            // cy.pause();
        });
    };

    verifyFeaturesSection() {
        cy.get(loc.featuresSection).should('be.visible');
        cy.get(loc.featuresSection).within(() => {
            cy.get('.feature-item').eq(0).contains('Friendly & Intuitive.');
            cy.get('.feature-item').eq(1).contains('Intelligent & Adaptable.');
            cy.get('.feature-item').eq(2).contains('Open & Flexible.');
            cy.get('.feature-item').eq(3).contains('Across the street or around the globe.');
            cy.get('.feature-item').eq(4).contains('Reliable & Secure.');
        });
    };

    verifySuccessStorySection() {
        cy.get(loc.successStorySection).should('be.visible');
        cy.get('.author').contains('Molly Garraway');
        this.checkSectionLink(loc.successStorySection, loc.ReadTheStoryBtn, loc.theFarmersDogUrl);
    };

    verifyPlatformSection() {
        cy.get(loc.platformSection).should('be.visible');
        cy.get(loc.platformSection).within(() => {
            cy.get('h3').contains('Ticket-based solutions.');
            cy.get(loc.oldWayImage).should('be.visible');
            cy.get('h3').contains('Open & Flexible.');
            cy.get(loc.newToolsImage).should('be.visible');
        });
    };

    verifyFourTabsSection() {
        cy.get(loc.fourTabsSection).within(() => {
            cy.get(loc.customObjectsTab).click();
            cy.get(loc.activeTab).within(() => {
                cy.get('h3').contains('Build a CRM around your business.');
            });
            cy.get(loc.insightsPanelTab).click();
            cy.get(loc.activeTab).within(() => {
                cy.get('h3').contains('Enable a modern digital workplace.');
            });
            cy.get(loc.segmentationTab).click();
            cy.get(loc.activeTab).within(() => {
                cy.get('h3').contains('Be proactive with actionable data.');
            });
            cy.get(loc.objectReportingTab).click();
            cy.get(loc.activeTab).within(() => {
                cy.get('h3').contains('Connect all dimensions of your business.');
            });
        });
    }

    verifyThreeTabsSection() {}
    verifyCustomerFrienshipSection() {}
    verifySecuritySection() {}
    verifyToDoNextSection() {}
    verifyDemoSection() {}
}

export const platformPage = new PlatformPage(platformLocators);