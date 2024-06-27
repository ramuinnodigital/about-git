import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private dataSubject = new Subject<any>();
  constructor(private http:HttpClient,private spinner: NgxSpinnerService) { }

  postData(data:any){
   return this.http.post<any>("http://localhost:3000/new",data)
    
  }

  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getDataaaa() {
    return this.dataSubject.asObservable();
  }

  getData(){
     return this.http.get<any>("http://localhost:3000/new")
  }

  fakedata(){
   return  this.http.get<any>('https://jsonplaceholder.typicode.com/posts').toPromise()
  }

  fakedatatwo(){
    return  this.http.get<any>('https://jsonplaceholder.typicode.com/posts').toPromise()
   }

   showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }

  get(){
   return this.http.get<any>('https://jsonplaceholder.typicode.com/comments')
  }


  generateOTP(length: number): string {
    const charset = "0123456789";
    let otp = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      otp += charset[randomIndex];
    }
    return otp;
  }

  
 
  
}
