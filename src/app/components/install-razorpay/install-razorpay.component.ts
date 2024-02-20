import { Component } from '@angular/core';
import { RayzerpayService } from 'src/app/services/rayzerpay.service';

@Component({
  selector: 'app-install-razorpay',
  templateUrl: './install-razorpay.component.html',
  styleUrls: ['./install-razorpay.component.scss']
})
export class InstallRazorpayComponent {

  constructor(private razorpayService: RayzerpayService){}

  payWithRazorpay(): void {
    this.razorpayService.createOrderAndPay();
  }
}
