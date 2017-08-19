import { Component, OnInit } from '@angular/core';

import { DbService } from '../../servicos/db.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-loja-detalhes',
  templateUrl: './loja-detalhes.component.html',
  styleUrls: ['./loja-detalhes.component.css']
})
export class LojaDetalhesComponent implements OnInit {

  private lista : JSON;

  constructor(private db : DbService) {
  }

  ngOnInit() {
  }

}
