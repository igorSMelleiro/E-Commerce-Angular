import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileActionsService } from '../user-profile-page-user.service';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-prod-posts',
  templateUrl: './prod-posts.component.html',
  styleUrls: ['./prod-posts.component.styl']
})
export class ProdPostsComponent implements OnInit {

  constructor(private route : ActivatedRoute,
     private actions :ProfileActionsService
      ) { }

  postsData : any[] ;
  ngOnInit() {
     this.route.data.subscribe(results => {
       console.warn(results);
      this.postsData = results.buyed;
      
    }); 
  }
  onDeletePost(postId, index){
    if(this.openDialog()){
      this.actions.deletePostedProd(postId).subscribe(x =>{
        if(x.deleted == true){
          // console.log(index);
        // let newArray = 
        this.postsData.splice(index,1);
        // console.log(newArray);
        // this.postsData = newArray;
        }else{
          alert("Não foi possivel excluir o produto, comunique o problema aos nossos serviços");
        }
      });
    }
  }
  onEditPost(postId){
    
  }
  openDialog(){
    if(confirm("Tem certeza que deseja excluir este produto")){
      return true;
    }
    else{
      return false;
    }
  }
}


