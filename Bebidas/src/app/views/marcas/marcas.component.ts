import { Component, OnInit } from '@angular/core';

import { DbService } from '../../services/db.service';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css'],
})
export class MarcasComponent implements OnInit{

  listaMarcas : JSON;

  constructor(private db : DbService) {

    db.getMarcas().subscribe( (s) => { this.listaMarcas = s });

  }

  ngOnInit() {
  }

}
