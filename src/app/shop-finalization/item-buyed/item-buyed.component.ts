import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-buyed',
  templateUrl: './item-buyed.component.html',
  styleUrls: ['./item-buyed.component.styl']
})
export class ItemBuyedComponent implements OnInit {
  @Input() selectedProdInfo;
  @Input() amount : number ;
  attibuteList = [1,2,3,4,5,6,7,8,9,10,11];
  constructor() { }

  ngOnInit() {
    console.log(this.selectedProdInfo);
  }

  
  increment(){
    this.amount++;
    if(this.amount > this.selectedProdInfo.prod_stockAmount){
      this.amount = this.selectedProdInfo.prod_stockAmount;
    }
    if(this.amount < 1){
      this.amount = 1;
    }
  }
  decrement(){
    this.amount--;
    if(this.amount > this.selectedProdInfo.prod_stockAmount){
      this.amount = this.selectedProdInfo.prod_stockAmount;
    }
    if(this.amount < 1){
      this.amount = 1;
    }
  }
  evalAmount(event){
    console.log(event);
    if(this.amount > this.selectedProdInfo.prod_stockAmount){
      this.amount = this.selectedProdInfo.prod_stockAmount;
    }
    if(this.amount < 1){
      this.amount = 1;
    }
  }
}
