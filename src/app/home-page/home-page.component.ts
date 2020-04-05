import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.styl']
})
export class HomePageComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  items = [1,2,3,4,5];
  bananas = ['Melhor Combinação',"Novidades"];
  promoCardData : any[] = [];
  ngOnInit() {
    this.route.data.subscribe(prodInfo => {
      console.log(prodInfo.infinity); 
      this.promoCardData = prodInfo.infinity; 
      
    })
  }

}
