import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-busca',
  templateUrl: './pagina-busca.component.html',
  styleUrls: ['./pagina-busca.component.css']
})
export class PaginaBuscaComponent implements OnInit {

  searchString : String;

  constructor() { }

  ngOnInit() {
  }

}
