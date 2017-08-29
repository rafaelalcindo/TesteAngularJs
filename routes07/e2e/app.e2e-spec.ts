import { Routes07Page } from './app.po';

describe('routes07 App', () => {
  let page: Routes07Page;

  beforeEach(() => {
    page = new Routes07Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
