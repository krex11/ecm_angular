import { Injectable } from '@angular/core';
import { Auth ,AuthCredential,EmailAuthProvider } from "@angular/fire/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth:AngularFireAuth 
    ) { }

    signIn(email: any, password: any) {
      return this.auth.signInWithEmailAndPassword(email, password).then((res)=>{
        console.log(res)
      })
    }
    
    signUp(email: any, password: any) {
      return this.auth.createUserWithEmailAndPassword(email, password).then((res)=>{
        console.log(res);
      })
    }
    
    signOut() {
      return this.auth.signOut();
    }
    
    getUser() {
      return this.auth.currentUser;
    }
}
