import { Component,Inject,ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EasyLoginComponent } from '../full-register/easy-login/easy-login.component';
import { SearchService } from '../shared-services/search.service';

import { map, merge, filter } from 'rxjs/operators';
import { fromEvent, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_helpers/Authentication.service';
import { User } from '../_helpers/user';
import { ShopManagerService } from '../shop-manager/shop-manager.service';




@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.styl']
})
export class PageHeaderComponent implements OnInit,AfterViewInit  {
  
  searchResults : string = '';
  logedIn ;
  usrName = '';
  someTrends = ["Perfumes","Relógios","Brincos","Iphone X","Jóias","Vestido longo","Panelas"]
  @ViewChild('searchBox',{static:false}) private searchBox : ElementRef;
  @ViewChild('searchButton',{static:false}) private searchButton : ElementRef;
  constructor(
    private dialog : MatDialog,
    private dialogRef : MatDialogRef<EasyLoginComponent>,
    private shopManager : ShopManagerService,
    private search : SearchService,
    private route : Router, 
    private auth : AuthenticationService,

    @Inject(MAT_DIALOG_DATA) public data: any
    )  { 
    
     }

 
  
  ngOnInit() {
    this.auth.currentUser.subscribe(signVal => {
      console.log(signVal);
      this.usrName = signVal.user_name;
      this.logedIn = signVal.user_validated;
    });
  
  }
  ngAfterViewInit(): void {
    
    this.searchOnPressEnter();

  }  
  
/**
 * call the app-easy-login, for the user create an account or even login, closes after navigation
 */

 searchOnPressEnter(){
  let searchBoxEventKeyUp = fromEvent(this.searchBox.nativeElement,'keyup');
  let searchOnClick = fromEvent(this.searchButton.nativeElement,'click');

  let  searchBoxValue = searchBoxEventKeyUp.pipe(filter(e => e.keyCode == 13),map(event => event.target.value));
  let  searchBoxValueOnClick = searchOnClick.pipe(map(event => event.target.value));

  searchBoxValueOnClick.subscribe(result  => {
    this.searchNav();
    this.search.searchInput.next({text: result, categ:null});
  });
    searchBoxValue.subscribe(result  => {
    this.searchNav();
    this.search.searchInput.next({text: result, categ:null});
  })
 }
 searchNav(){
  if(this.route.url !== '/search'){
    this.route.navigate(['/search'])
  }
 }
  signDialog(){
    
    this.dialogRef = this.dialog.open(EasyLoginComponent,{
      panelClass: 'app-easy-login',
      width: 'auto',
      height: 'auto',
      closeOnNavigation : true
    });
  }

  onBuyCart() {
    this.shopManager.onBuyCart();
    
    
  }

  logout(){
    this.logedIn = false;
    this.auth.logout();
  }
}
