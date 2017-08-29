import { ProjetoBindingPage } from './app.po';

describe('projeto-binding App', () => {
  let page: ProjetoBindingPage;

  beforeEach(() => {
    page = new ProjetoBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
