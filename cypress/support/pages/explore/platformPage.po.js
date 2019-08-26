import BasePage from '../basePage.po';
import {
    demoPage
} from './demoPage.po';
import {
    locators
} from '../../locators';

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
    platformSection: '.sucess-story-section',
    fourTabsSection: '.tabs tab-four',
    threeTabsSection: '.tabs tab-third',
    customerFrienshipSection: '.purple_section',
    securitySection: '.last-section',
    toDoNextSection: locators.section('Here\'s what to do next:'),
    demoSection: '.demo-section',

    // fourTabsSection tabs
    customObjectsTab: locators.tab('Custom Objects'),
    insightsPanelTab: locators.tab('Insights Panel'),
    segmentationTab: locators.tab('Segmentation'),
    objectReportingTab: locators.tab('Object Reporting'),

    // threeTabsSection tabs
    businessRulesTab: locators.tab('Business Rules'),
    workflowsTab: locators.tab('Workflows'),
    apiTab: locators.tab('APIs'),

    // Buttons
    btnReadStory: locators.button('Read the Story'),
    btnHIPAA: locators.button('Read New HIPAA Compliance'),
    btnCompliance: locators.button('Compliance, Security and Certifications'),
    btnExploreIntegrations: locators.button('Explore Integrations'),
    btnDownloadWhitepaper: locators.button('Download whitepaper'),
    btnReadGuide: locators.button('Read the guide'),
    btnRequestLiveDemo: locators.button('Request Live Demo'),
    btnViewDemoVideos: locators.button('View Demo Videos'),

    // Images
    videoImage: '[alt="Video Thumbnail"]',
    oldWayImage: '[src="https://s29093.pcdn.co/wp-content/uploads/2019/01/Old-Way.png"]',
    newToolsImage: '[src="https://s29093.pcdn.co/wp-content/uploads/2019/01/New-Tools.png"]',
    friendshipImage: '[src="https://s29093.pcdn.co/wp-content/uploads/2019/01/1Customer-friendships-are-created-with-Kustomer@2x.png"]',
    oldWayArtImage: '[src="https://s29093.pcdn.co/wp-content/uploads/2019/01/the_old_way_art.png"]',
    logoAWS: '[src="https://s29093.pcdn.co/wp-content/uploads/2019/01/aws_logo_02.png"]',
    customerUnderstandingImage: '[src="https://s29093.pcdn.co/wp-content/uploads/2018/07/CES-Customer-Understanding-Header.jpg"]',
    twelveReasonsImage: '[src="https://s29093.pcdn.co/wp-content/uploads/2019/05/1500x1000-12-reasons-and-event.png"]',
    liveDemoImage: '[src="https://s29093.pcdn.co/wp-content/uploads/2019/06/1040x694-asset-live-demo.png"]',

};

const loc = {
    ...locators,
    ...platformLocators
};

class PlatformPage extends BasePage {

    verifyGreySection() {
        this.checkSectionLink(loc.greySection, loc.btnRequestADemo, demoPage.url);
    };

}

export const platformPage = new PlatformPage(platformLocators);