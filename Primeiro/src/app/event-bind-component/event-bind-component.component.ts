import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind-component',
  templateUrl: './event-bind-component.component.html',
  styleUrls: ['./event-bind-component.component.css']
})
export class EventBindComponentComponent{

  onClick(r : MouseEvent){
    console.log(r);
  }

  onKeyUp(k : KeyboardEvent){

      console.log(k);

  }

}
