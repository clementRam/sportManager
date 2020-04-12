import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';

const USER_LOCAL_STORAGE_NAME: string = 'workoutManagerUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  
  constructor(
    public router: Router,
    ) { 
  }

  public signIn(user: User): Observable<User> {
    localStorage.setItem(USER_LOCAL_STORAGE_NAME, user.toString());
    return new Observable(observer => observer.next(user));
  }

  public signOut(){
    localStorage.setItem(USER_LOCAL_STORAGE_NAME, null);
  }

  public isAuthenticate(): boolean {
    return true;
    // return localStorage.getItem(USER_LOCAL_STORAGE_NAME) !== null;
  }
}
