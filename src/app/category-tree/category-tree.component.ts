import { Component, OnInit, Renderer2, ElementRef, Renderer, ViewChild,AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { SearchService } from '../shared-services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.styl']
})
export class CategoryTreeComponent implements OnInit,AfterViewInit {
  

  ishover = false;
  

  @ViewChildren('itemRef') listItem : QueryList<ElementRef>;
  items  = [
    'Moda Feminina',
    'Moda Masculina',
    'Telefones & Telecomunicações',
    'Computadorese Escritório',
    'Eletrônicos',
    'Joias e Relógios',
    'Casa, pet e Eletrodomésticos',
    'Bolsas e Calçados',
    'Brinquedos e Infantil',
    'Diversão Ao Ar Livre',
    'Saúde, Beleza e Cabelo',
    'Auto e Moto',
    'Reforma e Ferramentas'
  ];
  subcategory_box = [1,2,3,4,5,6,7,8];
  categor = [1,2,3,4,5,6];
  constructor(public renderer : Renderer2,
      private search : SearchService,
      private route : Router,
      element :  ElementRef) { 

  }

  
  ngOnInit() {
    
  }
  ngAfterViewInit(): void {

    
  }
  categ(categValue){
    this.search.searchInput.next({text: null, categ : categValue});
    this.searchNav();
  }
  searchNav(){
    if(this.route.url !== '/search'){
      this.route.navigate(['/search'])
    }
  }
  hovering(state){
    this.ishover = state;
  }
}
