import { Component, HostListener } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-and-partner',
  templateUrl: './form-and-partner.component.html',
  styleUrls: ['./form-and-partner.component.scss']
})
export class FormAndPartnerComponent {
[x: string]: any;



  form!:FormGroup;
  partner!:FormGroup;
  show:boolean=false;
  submitted:boolean=false;
  partnerArray:any[]=[]
  normalArray:any[]=[]
  receivedData: any;
  private dataSubscription: Subscription;
  normalfirstid: any;
  maskedValue:any;
  senddata!:string;
  secondvalue='ramu'
  second:any;

  // items: any[] = ['Item 1', 'Item 2', 'Item 3'];

  

  constructor(private fb:FormBuilder,private dataService: LoginService,private route:Router){
    this.form=this.fb.group({
      NormalDtaId:[this.randomString()],
      Fname:['',Validators.required],
      Lname:['',Validators.required]
    })

    

    this.partner=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })

    this.dataSubscription = this.dataService.getDataaaa().subscribe(data => {
      this.receivedData = data;
      const normalData=this.receivedData.normalData;
    //  this.form.controls['Fname'].patchValue(normalData[0].Fname);
    //  this.form.controls['Lname'].patchValue(normalData[0].Lname)
     
    });


    // this.form = this.fb.group({
    //   items: this.fb.array([
    //     this.fb.group({
    //       name: 'Item 1',
    //       quantity: 5
    //     }),
    //     this.fb.group({
    //       name: 'Item 2',
    //       quantity: 10
    //     }),
    //     this.fb.group({
    //       name: 'Item 3',
    //       quantity: 8
    //     })
    //   ])
    // });
    const NomineeProofnumber=274334548734

    if (NomineeProofnumber) {
      this.maskedValue = '********' + NomineeProofnumber?.toString().slice(-1);
    }
  }

 

  get f() {
    return this.form.controls;
  }
  

  get f1():{[key:string]:AbstractControl}{
    return this.partner.controls
  }


  randomString(): any {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }


  add(){
    this.show=!this.show
  }

  submit(){
    this.submitted=true;
   if(this.form.valid){
    this.normalArray.push(this.form.value)
    const data={
      normalData:this.normalArray,
      partnerData:this.partnerArray
    }
    this.form.reset();
    this.partner.reset();
    this.dataService.sendData(data);
      this.normalArray=[]
   }
  }

  send(event:any){
    this.senddata=event.target.value

  
  }
  sendtwo(event:any){
    this.second=event.target.value;
  
  }

  parnter(){
    let parnterdata=this.partner.value;
    parnterdata.partnerId=this.form.value.NormalDtaId;
    this.partnerArray.push(parnterdata)
   
  }

  // getFormControlClasses(controlName: string): any {
  //   const control = this.form.controls[controlName];
  //   return {
  //     'is-invalid': this.submitted && control.errors,
  //     'is-touched': control.touched,
  //     'is-dirty': control.dirty
  //   };
  // }

  ngOnDestroy() {
    if(confirm('are you sure want to leave this page')){

    }else{
      this.route.navigate(['/'])
    }
    this.dataSubscription.unsubscribe();
  }

  go(){
    this.route.navigate(['/text'])
  }


  // update(index:any,item:any){
  //   const itemsArray = this.form.get('items') as FormArray; 
  //   if(index >= 0 && index < itemsArray.length){
  //     itemsArray.at(index)?.get('quantity')?.setValue(item)
     
  //   }
  //   console.log(itemsArray)
  // }

  update(index: number) {
   
    const formGroup = this.form.get('items')?.get(index.toString()) as FormGroup;
    if (formGroup) {
      // formGroup.get('quantity')?.setValue('ramuuuuu');
      formGroup.controls['quantity'].setValue('mahesh')
      console.log(formGroup);
    } else {
      console.error('Invalid index provided:', index);
    }
  }


  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space' && this.isInputEmpty(event.target as HTMLInputElement)) {
      event.preventDefault();
    }
  }


 

  private isInputEmpty(input: HTMLInputElement): boolean {
    return input.value.trim() === '';
  }


}
