import { Component, OnInit } from '@angular/core';

import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  searchString : String;
  resultadosLojas : JSON;
  resultadosProdutos : JSON;

  constructor(private db: DbService) {}

  ngOnInit() {
  }

  buscar(){
    this.db.searchLojas(this.searchString).subscribe( (s) => { this.resultadosLojas = s });
    this.db.searchProdutos(this.searchString).subscribe( (s) => { this.resultadosProdutos = s } );
  }

}
