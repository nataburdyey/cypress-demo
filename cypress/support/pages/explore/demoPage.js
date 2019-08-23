import BasePage from '../basePage';

export const demoLocators = {
    url: '/demo/',
    videoUrl: '/demo-videos/'
};

class DemoPage extends BasePage {

}

export const demoPage = new DemoPage(demoLocators);