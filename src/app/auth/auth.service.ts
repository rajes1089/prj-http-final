import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token  = '';

  constructor() { }

  signupUser(email: string, password: string) {
    console.log(email + password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => console.log(response)
    )
    .catch(
      error => console.log(error)
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        firebase.auth().currentUser.getToken()
          .then(
            (token: string) => {
              this.token = token;
            }
          );
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  getToken() {
    firebase.auth().currentUser.getToken()
          .then(
            (token: string) => {
              this.token = token;
            }
          );
    return this.token;
  }

}
