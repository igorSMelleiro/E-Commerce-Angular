import { Component, OnInit, Input } from '@angular/core';

import {trigger, transition , animate, query, style, state,animation,group} from '@angular/animations';

@Component({
  selector: 'app-prod-img-holder',
  templateUrl: './prod-img-holder.component.html',
  styleUrls: ['./prod-img-holder.component.styl'],
  animations: [
    trigger('slide', [
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
export class ProdImgHolderComponent implements OnInit {

  @Input() images = [];
  constructor() { 
  }

  ngOnInit() {
   
  }

  selectedIndex : number = 0;
  get imagesList () {
      return [this.images[this.selectedIndex]];
  }

  selectedImage(index){
    this.selectedIndex = index;
  }
  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    console.log(this.selectedIndex);
  }

  next() {
    this.selectedIndex = Math.min(this.selectedIndex + 1, this.images.length - 1);
    console.log(this.selectedIndex);
  }

}
