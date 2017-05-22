import { AlwaysnotesPage } from './app.po';

describe('alwaysnotes App', () => {
  let page: AlwaysnotesPage;

  beforeEach(() => {
    page = new AlwaysnotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
