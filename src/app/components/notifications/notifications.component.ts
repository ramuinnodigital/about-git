import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  form!:FormGroup;
  unreadlenth:any;
  notificationlenth:any[]=[]
  nomineedetaislid:any;
  nomineedetailsres:any;
  nomineeForm!:FormGroup;
  constructor(private service:SubjectService,private fb:FormBuilder){
    this.form=this.fb.group({
      request:['',[Validators.required]]
    })

    this.nomineeForm=this.fb.group({
      nomineeName:[''],
      nomineeEmail:[''],
      nomineePhone:[''],
      nomineeAddress:['']
    })
  }

  ngOnInit(){
    this.getnotification();
   this.getnomineedetails();
  }


  nomineearray:any=[]=[];
  guradianarray:any=[]=[]
  getnomineedetails(){
    this.service.getnomineedetails().subscribe((res:any)=>{
      this.nomineedetailsres=res[0]?.nomineeDetails[0]
     this.nomineedetaislid=res[0]?.nomineeUniqueId;
     this.nomineedetailsres.nomineeDetails;
     console.log(this.nomineedetailsres,'nomi details')
  
     this.nomineeForm.controls['nomineeName']?.patchValue(this.nomineedetailsres?.nomineeName);
     this.nomineeForm.controls['nomineeEmail']?.patchValue(this.nomineedetailsres?.nomineeEmail);
     this.nomineeForm.controls['nomineePhone']?.patchValue(this.nomineedetailsres?.nomineePhone);
     this.nomineeForm.controls['nomineeAddress']?.patchValue(this.nomineedetailsres?.nomineeAddress);
    })
  }

  getnotification(){
    const id={
      userId:"6666e05d78acd2c7f11054e6"
    }
    this.service.getnotification(id).subscribe((res:any)=>{
      this.notificationlenth=res;
      this.unreadlenth=this.notificationlenth.filter((a:any)=>!a.read).length;
    })
  }

  sendread(){
    const data={
      userId:"6666e05d78acd2c7f11054e6", 
    }
    this.service.seneread(data).subscribe((res:any)=>{
      this.getnotification()
    })
  }

  submit(){
    if(this.form.valid){
      const data={
        userId:"6666e05d78acd2c7f11054e6",
        message:this.form.value.request,
        
      }
      this.service.sendreq(data).subscribe((res:any)=>{
        this.form.reset();
        this.getnotification()
  
      })
    }
  }

  nomineesubmit(){
    const data={
      nomineeUniqueId:this.nomineedetaislid,
      nomineeDetails: [{
        nomineeName:this.nomineeForm.value.nomineeName,
        nomineePhone:this.nomineeForm.value.nomineePhone,
        nomineeEmail:this.nomineeForm.value.nomineeEmail,
        nomineeAddress:this.nomineeForm.value.nomineeAddress
    }],
    guardianDetails: []
    }
    this.service.sendnomineedetails(data).subscribe((res:any)=>{
      console.log(res)
      this.nomineeForm.reset();
      this.getnomineedetails();
    })
  }
}
