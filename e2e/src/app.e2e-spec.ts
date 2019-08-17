import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  // describe('default screen', () => {
  //   beforeEach(() => {
  //     page.navigateTo('/home');
  //   });
  //   it('should have a title saying Home', () => {
  //     page.getPageOneTitleText().then(title => {
  //       expect(title).toEqual('Home');
  //     });
  //   });
  // });
  describe('login screen', () => {
    beforeEach(() => {
      page.navigateTo('/auth/login');
    });
    it('should have a title saying Login by default', () => {
      page.getelementByClass('.title').getText().then(title => {
        expect(title).toEqual('Login');
      });
    });

    it('should change the language to French on button toggle', () => {
      page.getelementByClass('.lngToggle').click();
      page.getelementByClass('.title').getText().then(title => {
        expect(title).toEqual(`S'identifier`);
      })
    });
  });
});
