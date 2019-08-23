import BasePage from '../basePage';

export const platformLocators = {
    url: '/platform/',
    videoUrl: '/platform-videos/'
};

class PlatformPage extends BasePage {

}

export const platformPage = new PlatformPage(platformLocators);