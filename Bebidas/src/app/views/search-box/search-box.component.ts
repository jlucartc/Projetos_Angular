import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private shared : SharedService ) {}

  ngOnInit() {
  }

  setSearchString(s : String){
    this.shared.setSearchString(s);
  }

}
