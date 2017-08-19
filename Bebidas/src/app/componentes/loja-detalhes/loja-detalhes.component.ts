import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

import { DbService } from '../../servicos/db.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-loja-detalhes',
  templateUrl: './loja-detalhes.component.html',
  styleUrls: ['./loja-detalhes.component.css']
})
export class LojaDetalhesComponent implements OnInit {

  private loja : JSON;
  private id;
  private sub : Subscription;
  private subId : Subscription;

  constructor(private db : DbService, private actroute : ActivatedRoute, private router: Router ) {
  }

  ngOnInit() {
    this.sub = this.actroute.paramMap.switchMap( (p) => { return this.db.getLojas() } ).subscribe( (s) => { this.loja = s});
    this.subId = this.actroute.paramMap.subscribe( (r) => { this.id = r.get('id')});
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.subId.unsubscribe();
  }

}
