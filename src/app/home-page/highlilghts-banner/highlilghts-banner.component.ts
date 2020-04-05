import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlilghts-banner',
  templateUrl: './highlilghts-banner.component.html',
  styleUrls: ['./highlilghts-banner.component.styl']
})
export class HighlilghtsBannerComponent implements OnInit {

  @Input() prods : any[];
  spotlight : any[];

 




  constructor() {
    
    
   }

  ngOnInit() {
    this.spotlight = this.prods.slice(5,13)
    console.log(this.spotlight);
  }

}
