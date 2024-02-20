// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor( private router: Router) {}

//   canActivate(): boolean {
//     if (localStorage.getItem('email')==null && localStorage.getItem('password')==undefined) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }