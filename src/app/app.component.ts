import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  finalurl:any;
  show: boolean=true;

  constructor(private router: Router) {
  

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      this.finalurl=currentUrl
      console.log(currentUrl,'curent url')
      if (currentUrl === '/kyc-steps') {
       this.show=false
      } else {
      this.show=true
      }
    });

   
  }
}
