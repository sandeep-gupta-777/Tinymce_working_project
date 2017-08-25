import { EditorDemo2Page } from './app.po';

describe('editor-demo2 App', () => {
  let page: EditorDemo2Page;

  beforeEach(() => {
    page = new EditorDemo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
