import { Component, OnInit, Input } from '@angular/core';

import { FilhoComponentComponent } from '../filho-component/filho-component.component';

@Component({
  selector: 'app-pai-component',
  templateUrl: './pai-component.component.html',
  styleUrls: ['./pai-component.component.css']
})
export class PaiComponentComponent implements OnInit {

  valorPai: number = 100;

  eventoRecebido(evento){
    console.log(evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
