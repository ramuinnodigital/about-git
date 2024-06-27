import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormAndPartnerComponent } from './components/form-and-partner/form-and-partner.component';
import { CanDeactivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor( private router: Router,private component:FormAndPartnerComponent) {}

  canActivate(): boolean {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

 
}