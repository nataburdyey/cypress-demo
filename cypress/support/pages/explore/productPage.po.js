import BasePage from '../basePage.po';

export const productLocators = {
    url: '/product/',
    videoUrl: '/product-videos/'
};

class ProductPage extends BasePage {

}

export const productPage = new ProductPage(productLocators);