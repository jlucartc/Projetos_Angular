import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()

export class DbService {

  constructor(private http : Http) {}

  /* Retorna lista de marcas */

  getMarcas(){

    return this.http.get("http://localhost:3000/gMarcas").map( (r) => { console.log(r); return r.json() } );

  }

  /* Retorna lista de pedidos */

  getPedidos(){

    return this.http.get("http://localhost:3000/gPedidos").map( (r) => { return r.json() } );

  }

  /* Retorna lista de produtos */

  getProdutos(){

    return this.http.get("http://localhost:3000/gProdutos").map( (r) => { return r.json() } );

  }

  /* Retorna lista de lojas */

  getLojas(){

    return this.http.get("http://localhost:3000/gLojas").map( (r) => { return r.json() } );

  }

  /* Retorna lista de produtos de acordo com nome da loja*/

  findLojaProdutos(id: String){
    /*
      Retorna lista de produtos de determinada loja.
    */
    return this.http.get("http://localhost:3000/lojas/f/"+id).map( (r) => { return r.json() } );
  }

  /* Retorna Perfil da Loja de acordo com id */

  findLoja(id: String){
    /*
      Retorna informações da loja de respectivo ID. O id será fornecido via link.
    */
    return this.http.get("http://localhost:3000/lojas/"+id).map( (r) => { return r.json() } );
  }

  /* Faz a busca de lojas e produtos com as palavras fornecidas*/

  searchLojas(searchString: String){
    /*
      Realiza busca de Lojas. Retorna lista com os
      objetos resultantes(produtos,lojas).
    */
    return this.http.get("http://localhost:3000/search/l/"+searchString).map( (r) => { return r.json() } );
  }

  searchProdutos(searchString: String){
    /*
      Realiza busca de Produtos. Retorna lista com os
      objetos resultantes(produtos,lojas).
    */
    return this.http.get("http://localhost:3000/search/p/"+searchString).map( (r) => { return r.json() } );
  }

}
