import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  constructor(private afaAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afaAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  getAuth() {
    return this.afaAuth.authState.map(auth => auth);
  }
  logout() {
    this.afaAuth.auth.signOut();
  }
  register(email: string, password: string) {
    console.log("within register method auth service");
    return new Promise((resolve, reject) => {
      this.afaAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }
}
