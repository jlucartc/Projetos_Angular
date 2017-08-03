import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()

export class DbService {

  constructor(private http : Http) {}

  getMarcas(){

    return this.http.get("http://localhost:8080").map( (r) => { return r.json() } );

  }

}
