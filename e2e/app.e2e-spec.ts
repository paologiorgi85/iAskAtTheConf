import { IAskAtTheConfPage } from './app.po';

describe('i-ask-at-the-conf App', () => {
  let page: IAskAtTheConfPage;

  beforeEach(() => {
    page = new IAskAtTheConfPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
