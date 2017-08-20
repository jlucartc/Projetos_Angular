import { Component, OnInit } from '@angular/core';


import { PesquisarService } from '../../servicos/pesquisar.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private pesquisa : String;
  private lista : JSON;
  private sub : Subscription;

  constructor(private p : PesquisarService) {
    this.lista = JSON.parse('{}');
    console.log(this.lista);
  }

  ngOnInit() {
  }

  pesquisar(value){
    this.pesquisa = value;
    this.sub = this.p.pesquisar(value).subscribe( s => {this.lista = s; console.log(s);});
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
