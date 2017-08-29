import { BootstrapTestePage } from './app.po';

describe('bootstrap-teste App', function() {
  let page: BootstrapTestePage;

  beforeEach(() => {
    page = new BootstrapTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
