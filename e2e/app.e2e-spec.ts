import { PsychoLabPage } from './app.po';

describe('psycho-lab App', function() {
  let page: PsychoLabPage;

  beforeEach(() => {
    page = new PsychoLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
