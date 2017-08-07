import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()

export class DbService {

  constructor(private http : Http) {}

  getMarcas(){

    return this.http.get("http://localhost:3000/gMarcas").map( (r : Response) => { console.log(r); return r.json() } );

  }

  getPedidos(){

    return this.http.get("http://localhost:3000/gPedidos").map( (r) => { return r.json() } );

  }

  getProdutos(){

    return this.http.get("http://localhost:3000/gProdutos").map( (r) => { return r.json() } );

  }

  getLojas(){

    return this.http.get("http://localhost:3000/gLojas").map( (r) => { return r.json() } );

  }

}
