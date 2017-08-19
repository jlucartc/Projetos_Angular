import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PesquisarService {

  constructor(private http : Http) { }

  pesquisar(valor){
    return this.http.post('http://localhost:3000/pesquisar',{string : valor}).map( r => { return r.json() });
  }

}
