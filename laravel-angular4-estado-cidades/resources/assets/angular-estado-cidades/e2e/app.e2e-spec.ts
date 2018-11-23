import { AngularEstadoCidadesPage } from './app.po';

describe('angular-estado-cidades App', () => {
  let page: AngularEstadoCidadesPage;

  beforeEach(() => {
    page = new AngularEstadoCidadesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
