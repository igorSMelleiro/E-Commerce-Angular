import { Component, OnInit, Input } from '@angular/core';
import { animate,trigger,style,transition,state } from '@angular/animations';
import { ProfileActionsService } from '../user-profile-page-user.service';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.styl'],
  animations: [
    trigger('',[
      state('open',style({
        //CSS style here
      })),
      state('closed',style({
         //CSS style here
      })),
      transition('open => closed',[
        animate('1s')
      ]),
      transition('closed => open',[
        animate('0.5s')
      ])

    ]),
  ]
})
export class SidenavContentComponent implements OnInit {

  @Input() userInfo;
  constructor(private profileService :ProfileActionsService, private auth : AuthenticationService) { }

  ngOnInit() {
    console.log(this.userInfo);
  }
  
  onProfilePictureUpdate(event){ 
    console.log(event);
    if(event.target.files.length > 0){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) =>{
        this.profileService.updateProfilePic(e.target.result).subscribe(imageResult => {
          console.log(imageResult);
          if(imageResult.length > 0 ){
            this.auth.updateImage(imageResult[0].usr_image);
           }
        });
      }
      console.log(reader);
    }
  }
}
