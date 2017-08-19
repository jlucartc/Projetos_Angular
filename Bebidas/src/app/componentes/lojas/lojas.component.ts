import { Component, OnInit } from '@angular/core';

import { DbService } from '../../servicos/db.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {

  private sub : Subscription;
  private lista: JSON;

  constructor(private db : DbService) {
    this.sub = this.db.getLojas().subscribe( (s) => { this.lista = s; });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
