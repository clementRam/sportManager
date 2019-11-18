import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';

const USER_LOCAL_STORAGE_NAME: string = 'workoutManagerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private _snackBar: MatSnackBar
    ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem(USER_LOCAL_STORAGE_NAME, JSON.stringify(this.user));
      } else {
        localStorage.setItem(USER_LOCAL_STORAGE_NAME, null);
      }
    })
  }

  public signIn(user: Partial<User>): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.setUserData(result.user);
      }).catch(error => this._snackBar.open(error.message, '', {duration: 5000}))
  }

  public signOut(){
    localStorage.setItem(USER_LOCAL_STORAGE_NAME, null);
    this.afAuth.auth.signOut().then(() => this.router.navigate(["sign-in"]));
  }

  public isAuthenticate(): boolean {
    return JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_NAME)) !== null;
  }

  private setUserData(user: any): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: Partial<User> = {
      uid: user.uid,
      email: user.email,
      name: user.name
    }
    return userRef.set(userData, {
      merge: true
    })
  }
}
