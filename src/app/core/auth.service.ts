import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import {Note} from '../note';

interface User {
  uid: string;
  email: string;
  notes: Note[];
}

@Injectable()
export class AuthService {
  private usersDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {

    // Get auth data, then firestore user document
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          this.usersDoc = this.afs.doc<User>(`users/${user.uid}`);
          return this.usersDoc.valueChanges();
        } else {
          return Observable.of(null);
        }
      });

  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  emailSignUp(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.updateUserData(credential);
      });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      notes: []
    };

    return userRef.set(data);
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Sign out user
   */
  logout() {
    this.afAuth.auth.signOut();
  }


}
