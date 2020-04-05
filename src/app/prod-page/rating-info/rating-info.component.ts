import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';

@Component({
  selector: 'app-rating-info',
  templateUrl: './rating-info.component.html',
  styleUrls: ['./rating-info.component.styl',
  '../prod-page-sliders.component.styl']
})
export class RatingInfoComponent implements OnInit {

  @Input() comments;

  commentControl : FormControl;
  constructor(private http : HttpClient,
    private auth : AuthenticationService,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.commentControl = new FormControl('',[
      Validators.minLength(5),
      Validators.maxLength(250)
    ])
    this.getComments().subscribe(results =>{
      this.comments = results;
    });
  }

  setComment() {
    console.log(this.commentControl.value);
    console.log(this.commentControl.valid);
    let comments_url :string = 'http://localhost:3000/prod-page/set-comments';
    let prodId = parseInt(this.route.snapshot.paramMap.get('id'));
    let ownerId = parseInt(this.route.snapshot.paramMap.get('id2'));
    if(this.commentControl.valid){
      this.http.post(comments_url,{
        user_comment: this.commentControl.value,
        prod_id : prodId,
        owner_id : ownerId,
        usr_id : this.auth.currentUserValue.user_id
      }).subscribe(results => {
        this.comments.push({comment: this.commentControl.value,usr_name : this.auth.currentUserValue.user_name});
      });
    }
  }

  isAuth(){
    return this.auth.currentUserValue.user_validated
  }
  getComments(){
    let comments_url :string = 'http://localhost:3000/prod-page/get-comments';
     let prodId = parseInt(this.route.snapshot.paramMap.get('id'));
    return this.http.post(comments_url,{prod_id: prodId });
  }
}
