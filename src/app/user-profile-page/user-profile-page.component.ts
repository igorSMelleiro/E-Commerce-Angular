import { Component, OnInit } from '@angular/core';
import { ProfileDataRequestService } from './profile-data-request/profile-data-request.service';
import { IBuyedProd, ProfileData } from './_interfaces/profile-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.styl']
})
export class UserProfilePageComponent implements OnInit {

  data ;
  sidenavInfo ;
  headerInfoRoutesName : string[] = ['buyed','selled','on-going','finished','cancelated','posted'];
  headerInfoType : string[] = ["Comprados","Vendidos","Em Espera","Finalizados","Cancelados",'Publicações'];
  tableNames : string[] = ["A Caminho","Comprados","Favoritos","Vendidos"];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data.profile;
    this.sidenavInfo = {
      user_image : this.data.user_image,
      user_name :  this.data.user_name,
      user_email : this.data.user_email
    }
  } 
}