import { BebidasPage } from './app.po';

describe('bebidas App', () => {
  let page: BebidasPage;

  beforeEach(() => {
    page = new BebidasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
