import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { SubjectService } from 'src/app/services/subject.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-angular-timer',
  templateUrl: './angular-timer.component.html',
  styleUrls: ['./angular-timer.component.scss']
})
export class AngularTimerComponent {

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
  };

  
  display: any;
  resendOtp: boolean = false;
  displayTimer: boolean = false;
  resetvlue:any;
  myseoncds:number=0;
  myname='ramu'
  fakedata: any;
  fakedatatwooo: any;

 
  constructor(private service:SubjectService,private route:Router,private loginSserive:LoginService) {
  
  }
  submit(){
 this.start(1);
  }
  reset(){
    this.myseoncds;
  }
 ngOnInit(){
  this.getfakeData();
  this.getfakeDatatwo();
 }

  

   start(minute:any) {
    this.displayTimer = true;
    this.resendOtp = false;
    // let minute = 1;
    let seconds = minute * 60;
    let textSec: any = '0';
    let statSec = 60;

    const prefix = minute < 10 ? '0' : '';

    
    this.resetvlue=clearInterval(seconds)
    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;
  

      if (statSec < 10) {
        console.log('inside', statSec);
        textSec = '0' + statSec;
      } else {
        console.log('else', statSec);
        textSec = statSec;
      }
      {minute}

     
      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(timer);
        this.myseoncds=seconds
        this.resendOtp = true;
        this.displayTimer = false;
      }
    }, 1000);
  }

  // otpValue(event:any){
  //   console.log(event.target.value,'otp value')

  // }
  // handeOtpChange(value:any){
  //   // console.log(value,'otp second value')

  // }
  handleFillEvent(value:any){
   
  }
  send(){
    this.route.navigate(['/lazy'])
    // this.service.sendData.next(this.myname)

  }

  getfakeData(){
   this.loginSserive.fakedata().then((res:any)=>{
      this.fakedata=res;
      console.log(this.fakedata,'first data')
    })
   
  }

  getfakeDatatwo(){
   this.loginSserive.fakedatatwo().then((res:any)=>{
      this.fakedatatwooo=res;
      console.log(this.fakedatatwooo,'second data')
    })
   
  }

 
}
