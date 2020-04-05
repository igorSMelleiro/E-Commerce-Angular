import { Component, OnInit } from '@angular/core';
import { ProdShowcaseDiService } from './prod-showcase-di.service';
import { ProdCardInfo } from './prod-card/prod-card-info';
import { SearchService } from '../shared-services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prod-showcase',
  templateUrl: './prod-showcase.component.html',
  styleUrls: ['./prod-showcase.component.styl']
})
export class ProdShowcaseComponent implements OnInit {

  constructor(private prodInfo : ProdShowcaseDiService, private search : SearchService) { }

  products : Observable<any[]> ;
  ngOnInit() {
    this.search.searchInput.subscribe(searchValue => {
      console.log(searchValue);
    this.products = this.prodInfo.searchResolver({text:searchValue.text, categ: searchValue.categ });
    })
  }
}
