import { Diretiva0402Page } from './app.po';

describe('diretiva0402 App', () => {
  let page: Diretiva0402Page;

  beforeEach(() => {
    page = new Diretiva0402Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
