import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.styl']
})
export class LightCardComponent implements OnInit {


  @Input() cardData; 
  constructor(private route : Router) { }

  ngOnInit() {
    
  }

  navigateToProdPage(){
    this.route.navigate(['/prod_page',this.cardData.prod_id,this.cardData.prod_owner]);
  }
}
