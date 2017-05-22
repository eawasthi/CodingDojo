import { RoutesAndSubRoutesPage } from './app.po';

describe('routes-and-sub-routes App', () => {
  let page: RoutesAndSubRoutesPage;

  beforeEach(() => {
    page = new RoutesAndSubRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
