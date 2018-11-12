import { FormularioCepPage } from './app.po';

describe('formulario-cep App', () => {
  let page: FormularioCepPage;

  beforeEach(() => {
    page = new FormularioCepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
