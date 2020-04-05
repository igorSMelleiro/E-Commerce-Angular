import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infinit-board',
  templateUrl: './infinit-board.component.html',
  styleUrls: ['./infinit-board.component.styl']
})
export class InfinitBoardComponent implements OnInit {

  
  @Input() prodItemsList = []
  prodItems = [];
  constructor() {
  }

  ngOnInit() {
      
    var s = this.prodItemsList.sort(func); 
    
    function func(a, b) {  
      return 0.5 - Math.random();
    } 
    this.prodItems = s ;
  }

}
