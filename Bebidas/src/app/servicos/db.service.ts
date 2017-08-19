import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class DbService {

  constructor(private http : Http) { }

  getLojas(){
    return this.http.get("http://localhost:3000/lojas/j").map( (r) => { return r.json(); });
  }
  getMarcas(){
    return this.http.get("http://localhost:3000/marcas/j").map( (r) => { return r.json(); });
  }
  getProdutos(){
    return this.http.get("http://localhost:3000/produtos/j").map( (r) => { return r.json(); });
  }

  getLojasDetalhes(id : String){
    return this.http.get("http://localhost:3000/lojas/j/"+id).map( (r) => { return r.json(); });
  }

  getProdutoDetalhes(){
    return this.http.get("http://localhost:3000/produtos/j").map( (r) => { return r.json(); });
  }

}
