import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { DbService } from '../../servicos/db.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

    private sub : Subscription;
    private lista: JSON;

    constructor(private db : DbService) {
      this.sub = this.db.getMarcas().subscribe( (s) => { this.lista = s; });
    }

    ngOnInit() {
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

}
