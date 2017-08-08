import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { DbService } from '../../services/db.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  private searchString : String;
  private resultadosLojas : JSON;
  private resultadosProdutos : JSON;
  private insLojas : Subscription;
  private insProdutos : Subscription;

  constructor(private db: DbService, private shared : SharedService) {
	this.searchString = shared.getSearchString();
  }

  ngOnInit() {
    this.buscar();
  }

  ngOnDestroy(){
    this.insLojas.unsubscribe();
    this.insProdutos.unsubscribe();
  }

  buscar(){
    this.insLojas = this.db.searchLojas(this.shared.getSearchString()).subscribe( (s) => { this.resultadosLojas = s });
    this.insProdutos = this.db.searchProdutos(this.shared.getSearchString()).subscribe( (s) => { this.resultadosProdutos = s } );
  }

}
