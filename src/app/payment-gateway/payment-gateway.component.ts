import { ChangeDetectorRef, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RayzerpayService } from '../services/rayzerpay.service';
declare var Razorpay: any;


@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss']
})
export class PaymentGatewayComponent {
  submitted:boolean=false;
  form!:FormGroup;
  username: any;
  useremail: any;
  usercontact: any;
  userkey: any;
  useramount: any;
  razorpayResponse?: string;
  showModal?: boolean;
response: any;


  constructor(private fb:FormBuilder,private razerpayService:RayzerpayService,
    private cd: ChangeDetectorRef){
this.form=this.fb.group({
  keyid:[this.randomString()],
  name:['',[Validators.required]],
  email:['',[Validators.required]],
  phone:['',[Validators.required]],
  amount:['',[Validators.required]]
})
  }
  randomString(): any {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
  }

  ngOnInit() {
    // this.razerpayService
    //   .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
    //   .subscribe();

  
  }

  RAZORPAY_OPTIONS = {
    key: 'rzp_test_PKZRt4NGyfabME',
    amount: '',
    name: 'ram',
    order_id: '',
    description: '',
    image:
      'https://png.pngtree.com/png-vector/20210106/ourmid/pngtree-vector-illustration-of-men-use-mask-png-image_2701194.jpg',
    prefill: {
      name: '',
      email: '',
      contact: '',
      method: '',
    },
    modal: {},
    theme: {
      color: '',
    },
    handler: Function(),
  
  };
 


get f():{[key:string]:AbstractControl}{
return this.form.controls
}

submit(){
this.submitted=true;
const data={
  name:this.form.value.name,
  email:this.form.value.email,
  phone:this.form.value.phone,
  amount:this.form.value.amount,
  key:this.form.value.keyid
}

this.username=data.name;
this.useremail=data.email;
this.usercontact=data.phone;
// this.userkey=data.key;
this.useramount=data.amount;
this.RAZORPAY_OPTIONS.prefill.name = this.username;
this.RAZORPAY_OPTIONS.prefill.email = this.useremail;
this.RAZORPAY_OPTIONS.prefill.contact = this.usercontact;
this.RAZORPAY_OPTIONS.amount= this.useramount;
console.log(this.RAZORPAY_OPTIONS,'razer pay options')


this.RAZORPAY_OPTIONS.handler = this.razorPaySuccessHandler.bind(this);
let razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
razorpay.open();
}


razorPaySuccessHandler(response:any) {
  console.log(response);
  this.razorpayResponse =
    `Razorpay Response : ` + response.razorpay_payment_id;
  this.showModal = true;
  this.cd.detectChanges();
  document.getElementById('razorpay-response')!.style.display = 'block';
}



}
