import { Injectable, NgZone } from '@angular/core';
import { Auth, AuthCredential, EmailAuthProvider } from "@angular/fire/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, Observable, of, throwError } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User;
  constructor(
    public auth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user as any;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      }
      else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // /signIN
  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.auth.authState.subscribe((user) => {

          if (user) {
            this.router.navigate(['home']);
          }
        });
      })

      .catch((error: { message: any; }) => {
        window.alert(error.message);
      });

  }


  // /signUp
  signUp(email: string, password: string) {

    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {

      })
      .catch((error) => {
        window.alert(error.message);
      });
  }







  signOut() {
    return this.auth.signOut();
  }

  getUser() {
    return this.auth.currentUser;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false; 
  }
}
