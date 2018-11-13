import { FormularioValidacaoPage } from './app.po';

describe('formulario-validacao App', () => {
  let page: FormularioValidacaoPage;

  beforeEach(() => {
    page = new FormularioValidacaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
