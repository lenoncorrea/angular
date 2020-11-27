import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }
  private isAuthenticated: boolean = false;

  canActivate() : boolean {
    if (localStorage.getItem('token') == 'QpwL5tke4Pnpja7X4'){
      this.isAuthenticated = true;
      return this.isAuthenticated;
    }else{
      this.router.navigate(['/login']);
      return this.isAuthenticated;
    }
  }

  login(token) {
    localStorage.setItem('token', token);
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
