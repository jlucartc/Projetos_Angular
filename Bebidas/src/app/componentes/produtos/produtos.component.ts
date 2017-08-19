import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DbService } from '../../servicos/db.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

    private sub : Subscription;
    private lista: JSON;

    constructor(private db : DbService) {
      this.sub = this.db.getProdutos().subscribe( (s) => { this.lista = s; });
    }

    ngOnInit() {
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }


}
