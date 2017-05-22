import { browser, by, element } from 'protractor';

export class ComponentsAndPipesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
