import { Component, OnInit,Input, Renderer2, ViewChildren, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { IBuyedProd } from '../_interfaces/profile-data';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop-info-container',
  templateUrl: './shop-info-container.component.html',
  styleUrls: ['./shop-info-container.component.styl']
})
export class ShopInfoContainerComponent implements OnInit,AfterContentInit {



  columnsToDisplay = ["Id","Descrição","Preço","Data"];
  //Paginator Start
  length : number = 100;
  pageSize : number = 5;
  pageSizeOptions : number[] = [5 ,10 ,20 ];
  pageEvent : PageEvent;
  //Paginator End

  dataSource : any[] = [] ;
  
  constructor(private route : ActivatedRoute, public renderer : Renderer2) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      for(let i = 0 ; i < data.buyed.length ; i++){
        this.dataSource[i] = data.buyed[i];
      }
    })
  }
  ngAfterContentInit(): void {

  }

  setContent(){
    //this.renderer.appendChild(this.content.nativeElement,'app-inner-expandable-res');
  }
  removeContent(){
    //this.renderer.removeChild(this.content.nativeElement,'app-inner-expandable-res');
  }

  
}

