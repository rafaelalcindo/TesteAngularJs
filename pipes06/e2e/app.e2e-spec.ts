import { Pipes06Page } from './app.po';

describe('pipes06 App', () => {
  let page: Pipes06Page;

  beforeEach(() => {
    page = new Pipes06Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
