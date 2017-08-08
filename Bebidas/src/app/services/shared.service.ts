import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  private buscaSearchString : String = "Bananas de Pijamas";

  constructor() { }

  getSearchString(){

    return this.buscaSearchString;

  }

  setSearchString(sString : String){
    this.buscaSearchString = sString;
  }

}
