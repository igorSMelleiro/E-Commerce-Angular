
import { Injectable } from '@angular/core';
import { 
    HttpClient,
    HttpHeaders,
    HttpResponse,
    HttpHeaderResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
import { SignUp } from '../full-register/interfaces/user-signup-interface';
import { SignIn } from '../full-register/interfaces/user-signIn-interface';

@Injectable({providedIn: 'root'})

export class AuthenticationService   {
    serverUrlSignIn  = "http://localhost:3000/profile/signin";
    serverUrlSignUp  = "http://localhost:3000/profile/signup";

    private currentUserSubject : BehaviorSubject<User>;
    public currentUser : Observable<User>;

    constructor(private http : HttpClient){
        //notify subscribers about initial value at first subscription
        if(localStorage.length > 0){
            //protection against undefined values wich i don't want to handle in other classes
            if(localStorage.getItem('currentUser') != undefined){
                try {  
                    //!must not store in localstorage
                    this.currentUserSubject =  new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                } catch (error) {
                    console.log(error);
                }
            }else{ 
                this.currentUserSubject =  new BehaviorSubject<User>({
                    user_id : null,
                    user_image : null,
                    user_name : null,
                    user_email : null,
                    user_token : null,
                    user_validated : false
                });
                this.currentUser = this.currentUserSubject.asObservable();
            }
        }
        else{
            this.currentUserSubject =  new BehaviorSubject<User>({
                user_id : null,
                user_image : null,
                user_name : null,
                user_email : null,
                user_token : null,
                user_validated : false
            });
            this.currentUser = this.currentUserSubject.asObservable();
        }
    }
    

    public get currentUserValue(): User{
        return this.currentUserSubject.value;
    }

    public get AuthStatus () : Observable<boolean> {
        let behaviorsubjectStatus$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        this.currentUserSubject.subscribe(status => {
            if(status.user_validated === true){
                behaviorsubjectStatus$.next(true)
            }
            else{
                behaviorsubjectStatus$.next(false);
            }
        });
        console.log('firing authstatus')
        return behaviorsubjectStatus$;
    }
    /**
   * @param data interface to SignIn
   * @returns Observable of Type Any if Valid , or if it is Not or Query error 
   */
    signInUser(data : SignIn) : Observable<User> {
        return this.http.post<User>(this.serverUrlSignIn,data).pipe(map(usr => {
            console.log(usr)
            if(!usr.user_validated){
                localStorage.clear();
                this.currentUserSubject.next(usr); //emits null for non authenticated users
                return usr;
            }   
            let user : User = {
                user_id : usr.user_id,
                user_image : usr.user_image,
                user_name : usr.user_name,
                user_email : usr.user_email,
                user_token : usr.user_token,
                user_validated : usr.user_validated
            }
            localStorage.setItem('currentUser',JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    /**
   * @param user interface to SignUp
   * @returns Observable of Type Any if Valid , or if it is Not or Query error
   */
  sigUpUser(user : SignUp) : Observable<User>  {
    return this.http.post<any>(this.serverUrlSignUp,user).pipe(map(usr => {
        if(!usr.user_validated){
            localStorage.clear();
            this.currentUserSubject.next(usr); //emits null for non authenticated users
            return usr;
        }
        let user : User = {
            user_id : usr.user_id,
            user_image : usr.user_image,
            user_name : usr.user_name,
            user_email : usr.user_email,
            user_token : usr.user_token,
            user_validated : usr.user_validated
        }
      
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }))
  }

  logout(){
      
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({
        user_id : null,
        user_image : null,
        user_name : null,
        user_email : null,
        user_token : null,
        user_validated : false
    });
  }
  /**
   * Update the observable responsable for handling authentication
   * 
   * @param field the name of the field to be changed
   * @param value the new value of the param
   */
  updateImage(value){
      this.currentUserSubject.next({...this.currentUserSubject.value, user_image : value});
  }
}