import { Component, OnInit, NgZone } from '@angular/core';


import { PesquisarService } from '../../servicos/pesquisar.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private pesquisa : String;
  private lista : any;
  private sub : Subscription;

  constructor(public zone: NgZone, private p : PesquisarService) {
    this.lista = JSON.parse('{}');
    console.log(this.lista);
  }

  ngOnInit() {
  }

  pesquisar(value){
    if(this.sub != null){
      this.sub.unsubscribe();
      console.log("descinscrito");
    }
    this.pesquisa = value;
    this.sub = this.p.pesquisar(value).subscribe( s => {this.lista = s; console.log(s);});
  }

  ngOnDestroy(){
  }

}
