import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticateGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    const canActivate: boolean = this.authService.isAuthenticate();
    if(!canActivate){
      this.router.navigate(['sign-in']);
    }
    return canActivate;
  }
  
}
