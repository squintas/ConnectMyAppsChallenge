import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email === 'user@user.com' && password === 'User123') {
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false; 
    }
  }
}