import { MeanPressPage } from './app.po';

describe('mean-press App', () => {
  let page: MeanPressPage;

  beforeEach(() => {
    page = new MeanPressPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
