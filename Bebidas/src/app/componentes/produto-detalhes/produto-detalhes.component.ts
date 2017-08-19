import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { DbService } from '../../servicos/db.service';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  private produto : JSON;
  private sub : Subscription;


  constructor(  private actroute : ActivatedRoute,
    private router : Router, private db : DbService) {}

  ngOnInit() {
    this.sub = this.actroute.paramMap.switchMap( (params : ParamMap) => { return this.db.getProdutoDetalhes(params.get('id'))} ).subscribe( (produto) => { this.produto = produto });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
