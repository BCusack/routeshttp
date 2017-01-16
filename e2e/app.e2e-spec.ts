import { CommentsAppPage } from './app.po';

describe('comments-app App', function() {
  let page: CommentsAppPage;

  beforeEach(() => {
    page = new CommentsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
