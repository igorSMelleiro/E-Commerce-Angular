import { Component, OnInit, OnDestroy, Inject } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { SignUp } from '../interfaces/user-signup-interface';
import { SignIn } from '../interfaces/user-signIn-interface';
import { test } from './equal-value';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/app/_helpers/user';
@Component({
  selector: 'app-easy-login',
  templateUrl: './easy-login.component.html',
  styleUrls: ['./easy-login.component.styl']
})
export class EasyLoginComponent implements OnInit,OnDestroy {
  

  signIn = new FormGroup({
    email : new FormControl('',Validators.compose([
      Validators.email,
      Validators.required
    ])),
    password : new FormControl('',[
      Validators.minLength(8),
      Validators.maxLength(50),
      Validators.required
    ]) 
  });

  signUp = new FormGroup({
    firstName : new FormControl('',[
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.required
    ]),
    email : new FormControl('',[
      Validators.email,
      Validators.required
    ]),
    password : new FormControl('',[
      Validators.minLength(8),
      Validators.maxLength(800),
      Validators.required
    ]),
    passwordConfirm : new FormControl('',[
      Validators.minLength(8),
      Validators.maxLength(880),
      Validators.required
    ])
  }, {validators:test});

  
 
  constructor(
    private reg : AuthenticationService,
    private route : ActivatedRoute,
    private router : Router,
    public dialogRef: MatDialogRef<EasyLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User 
    ) { }
  
  ngOnInit() {
    
  }
  ngOnDestroy(): void {

  }

  
  signInSubmit(){
    if(this.signIn.valid){
      const signInInterface : SignIn = { 
        user_email : this.signIn.get('email').value,
        user_password : this.signIn.get('password').value,
      }
      return this.reg.signInUser(signInInterface).subscribe(result => {
        console.log(result);
        if(result.user_validated === true){
          this.dialogRef.close();
        }
      });
    }
    else {
      console.log("Senha ou Email invalidos");
    }
  }

  signUpSubmit(){
    if(this.signUp.valid) {
      const signUpInterface: SignUp = {
        user_name : this.signUp.get('firstName').value,
        user_email : this.signUp.get('email').value,
        user_password : this.signUp.get('password').value,
      }
      return this.reg.sigUpUser(signUpInterface).subscribe(result => {
        if(result.user_validated === true){
          this.dialogRef.close();
        }
        else{
         
        }
      });
    }
    else
    {  
      
    }
  }
}

