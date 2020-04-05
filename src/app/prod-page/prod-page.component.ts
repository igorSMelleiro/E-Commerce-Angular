import { Component ,OnInit, Input, ViewChild,ContentChild, AfterViewInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompleteProdRequestService } from './complete-prod-request.service';
import { FullProdData } from './full-prod-data';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../_helpers/Authentication.service';



@Component({
  selector: 'app-prod-page',
  templateUrl: './prod-page.component.html',
  styleUrls: ['./prod-page.component.styl']
})
export class ProdPageComponent implements OnInit,AfterViewInit {
 

  

  prodFullData = [] ;

  hasColors : boolean = true;
  relatedProd  = [];
  randomArray = [];
  constructor(
    private http : HttpClient,
    private routeActive : ActivatedRoute,
    private auth : AuthenticationService
    ) {}
    
    
  prodDataResolved;
  ngOnInit() {
    console.warn(this.routeActive.snapshot.params);
    this.routeActive.data.subscribe(data => {
      console.log(data.product);
      this.prodFullData[0] = data.product[0];
    });
  }
  ngAfterViewInit(): void {
    this.prodByCateg();
  }
  prodByCateg(){
    let categUrl = 'http://localhost:3000/home-page/prod-by-categ'
    this.http.post(categUrl, {prod_id : this.prodFullData[0].prod_Id}).subscribe(x => {
      console.log(x);
      this.relatedProd = x ;
      for (let index = 0; index < x.length; index++) {
        this.randomArray[index] = this.random(x.length);
      }
    } );
  }

  random(max){
    return Math.random() * (max - 0) + 0;
  }
}
