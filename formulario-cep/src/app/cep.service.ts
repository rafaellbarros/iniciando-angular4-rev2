import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cep } from './cep';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {

  private URL = 'https://viacep.com.br/ws';

  constructor(private http: Http) { }

  buscar(cep: string): any {
    return this.http.get(`${this.URL}/${cep}/json/`)
            .toPromise()
            .then(response => this.converterRespostaParaCep(response.json()));
  }

  private converterRespostaParaCep(cepNaResposta): Cep {
    const cep = new Cep();
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.complemento = cepNaResposta.complemento;
    cep.bairro = cepNaResposta.bairro;
    cep.cidade = cepNaResposta.localidade;
    cep.estado = cepNaResposta.uf;
    return cep;
  }

}
