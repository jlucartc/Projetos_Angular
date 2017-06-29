import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filho-component',
  templateUrl: './filho-component.component.html',
  styleUrls: ['./filho-component.component.css']
})
export class FilhoComponentComponent implements OnInit {

  @Input() valor : number;

  @Output() eventoFilho = new EventEmitter();

  add(e){
    this.valor++;
    this.eventoFilho.emit(e);
  }

  sub(e){
    this.valor--;
    this.eventoFilho.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
