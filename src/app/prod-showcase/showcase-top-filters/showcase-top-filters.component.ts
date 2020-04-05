import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-top-filters',
  templateUrl: './showcase-top-filters.component.html',
  styleUrls: ['./showcase-top-filters.component.styl']
})
export class ShowcaseTopFiltersComponent implements OnInit {

  sortParams : string[] = ["Mais Relevantes","Maior Preço","Menor Preço","Populares"];
  selectedValue : string ;

  
  constructor() {
    this.selectedValue = this.sortParams[0];
   }

  ngOnInit() {
  }
}
