import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CidadeService {

	private URL = 'http://localhost:8000';

	constructor(private http:Http) { }

	getEstados():Promise<Array<any>>{
		return this.http.get(`${this.URL}/estados`)
			.toPromise()
			.then(response => response.json())
	}

	getCidades(estadoId):Promise<Array<any>>{
		return this.http.get(`${this.URL}/estados/${estadoId}/cidades`)
			.toPromise()
			.then(response => response.json())
	}
}
