import { VendorsPage } from './app.po';

describe('vendors App', () => {
  let page: VendorsPage;

  beforeEach(() => {
    page = new VendorsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
