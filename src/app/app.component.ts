import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  finalurl:any;
  show: boolean=true;
  content: string | null = null;

  constructor(private router: Router,private routeeeee: ActivatedRoute,private subject:SubjectService) {
    this.routeeeee.url.subscribe(segments => {
      console.log(segments,'segmemnts path')
      switch (segments[0]?.path) {
        case 'home':
          this.content = 'Welcome to the home page!';
          break;
        case 'about':
          this.content = 'Learn more about us!';
          break;
        case 'contact':
          this.content = 'Contact us for support.';
          break;
        default:
          this.content = 'Page not found';
      }
    });
  
  
  }

  send(){
   
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      this.finalurl=currentUrl
      // console.log(currentUrl,'curent url')
      if (currentUrl === '/kyc-steps') {
       this.show=false
      } else {
      this.show=true
      }
    });

   
   
  }
}
