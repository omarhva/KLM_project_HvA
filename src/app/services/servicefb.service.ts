import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import * as firebase from "firebase/app";
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicefbService {
  token: string = null;

  constructor(private route: Router) {
  }

  signIn(eMail: string, passWord: string) {
    firebase.auth().signInWithEmailAndPassword(eMail, passWord)
      .then(
        response => {
          this.route.navigate(['/mechanic']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => {
          alert("Wrong credentials");
          console.log(error)
        }
      );
    console.log(firebase.auth().currentUser)
  }

  getToken(): string {
    if (firebase.auth().currentUser != null) {
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
    }
    return this.token;
  }

  refreshToken() {
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;

  }

  isLoggedIn() {
    return !!this.getToken();
  }
  logout() {
    firebase.auth().signOut();

    this.refreshToken();
    this.route.navigate(['/home']);

  }

  returncurrentUser() {
    return firebase.auth().currentUser;
  }


}
