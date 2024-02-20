import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';
declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class RayzerpayService {
  myamount=10000

  // private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};

  // constructor(@Inject(DOCUMENT) private readonly document: any) {}

  
  // lazyLoadLibrary(resourceURL:any): Observable<any> {
  //     return forkJoin([
  //         this.loadScript(resourceURL)
  //     ]);
  // }

  // private loadScript(url: string): Observable<any> {
  //     if (this._loadedLibraries[url]) {
  //         return this._loadedLibraries[url].asObservable();
  //     }
  
  //     this._loadedLibraries[url] = new ReplaySubject();
  
  //     const script = this.document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.async = true;
  //     script.src = url;
  //     script.onload = () => {
  //         this._loadedLibraries[url].next;
  //         this._loadedLibraries[url].complete();
  //     };
  
  //     this.document.body.appendChild(script);    
  //     return this._loadedLibraries[url].asObservable();
  // } 

  private razorpayOptions: any;

  constructor() {
    this.razorpayOptions = {
      key: 'rzp_test_PKZRt4NGyfabME',
      amount: this.myamount, // amount in paise (change accordingly)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for your service',
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '7993574129'
      },
      theme: {
        color: '#F37254'
      },
      handler: function(response:any) {
        console.log(response,'respoonce id');
        alert(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function() {
          console.log('Payment cancelled');
        }
      }
    };
  }

  createOrderAndPay(): void {
    const rzp = new Razorpay(this.razorpayOptions);
    rzp.open();
  }

 
}
