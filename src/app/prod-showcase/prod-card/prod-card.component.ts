import { Component, OnInit, Input } from '@angular/core';
import { ProdCardInfo } from './prod-card-info';

import { config, Observable, Subscribable, Subscriber, Subscription } from 'rxjs';
import { Router } from '@angular/router';


//animation APi
import { query, group, trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.styl'],
  animations: [
    //this animatiom configuration is suited for dinamic generate images in the dom
    //must be optimzed since dom Generation is slow and slows down animation 
    trigger('slider', [
      transition(":increment", group([
        query(':enter', [
          style({
            left: '100%'
          }),
          animate('0.4s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.4s ease-out', style({
            left: '-100%'
          }))
        ])
      ])),
      transition(":decrement", group([
        query(':enter', [
          style({
            left: '-100%'
          }),
          animate('0.4s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.4s ease-out', style({
            left: '100%'
          }))
        ])
      ])),
    ])
  ]
})
export class ProdCardComponent implements OnInit {

  @Input() product;
  selectedIndex : number = 0;
  get images () {
      return [this.product.image_url[this.selectedIndex]];
  }
  
  constructor(private route : Router) { }

 
 
   ngOnInit() {
  }
  
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }
  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    console.log(this.selectedIndex);
  }

  next() {
    this.selectedIndex = Math.min(this.selectedIndex + 1, this.product.image_url.length - 1);
    console.log(this.selectedIndex);
  }
  prodPageNavigation(){

    this.route.navigate(['../prod_page',this.product.prod_id, this.product.usr_id],{preserveFragment : true});
  }

 

}
