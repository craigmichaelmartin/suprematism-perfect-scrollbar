import { SuprematismPerfectScrollbarPage } from './app.po';

describe('suprematism-perfect-scrollbar App', function() {
  let page: SuprematismPerfectScrollbarPage;

  beforeEach(() => {
    page = new SuprematismPerfectScrollbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
