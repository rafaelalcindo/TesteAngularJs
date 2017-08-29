import { Servico05Page } from './app.po';

describe('servico05 App', () => {
  let page: Servico05Page;

  beforeEach(() => {
    page = new Servico05Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
