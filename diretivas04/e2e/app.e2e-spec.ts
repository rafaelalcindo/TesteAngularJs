import { Diretivas04Page } from './app.po';

describe('diretivas04 App', function() {
  let page: Diretivas04Page;

  beforeEach(() => {
    page = new Diretivas04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
