import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod-info-detail',
  templateUrl: './prod-info-detail.component.html',
  styleUrls: ['./prod-info-detail.component.styl']
})
export class ProdInfoDetailComponent implements OnInit {


  @Input() charcts : string;
  

  test = [{
    "test" : "test"
  }];
  
  constructor() { }

  ngOnInit() {
    console.log(this.charcts);
  }

}
