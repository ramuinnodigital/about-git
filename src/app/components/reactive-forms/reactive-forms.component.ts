import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { event } from 'jquery';





@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  fg!:FormGroup;
  submitted:boolean=false;
  showhide:boolean=false;
  eventValue: any;

  constructor(private fb:FormBuilder){
    this.fg=this.fb.group({
      fullname:[,Validators.required],
      email:[,Validators.required],
      selectMrsorMs:[''],
      skills: this.fb.array([]) ,
    })
  }

  updateFormControl(value:any){
    this.fg.controls['selectMrsorMs'].setValue(value)
  }

  get f():{[key:string]:AbstractControl}{
   return this.fg.controls
  }

  get skills() : FormArray {
    return this.fg.get("skills") as FormArray
  }
  _Value(i:any){
   return this.skills.controls[i] as FormGroup

  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill:['',Validators.required],
      exp:['',Validators.required],
      address:[''],
      password:[''],
      confrimpassword:['']
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }


  submit(){
    alert(this.fg.value.selectMrsorMs)
this.submitted=true;

  }

  selectedValue(event:any){
    if(event.target.value === 'yes'){
      this.addSkills();
    }
    else{
      this.skills.clear();
    }
    
  }
  
  openCloseValue(event:any,fggg:FormGroup){
if(event.target.value === 'open'){
  this.showhide=true;
  fggg.controls['password'].setValidators([Validators.required])
  fggg.controls['confrimpassword'].setValidators([Validators.required])
  fggg.controls['address'].setValidators([Validators.required])
}
else{
  this.showhide=false
  fggg.controls['password'].setValidators(null),
  fggg.controls['confrimpassword'].setValidators(null)
}

fggg.controls['password'].updateValueAndValidity();
fggg.controls['confrimpassword'].updateValueAndValidity();
  }
  
}
