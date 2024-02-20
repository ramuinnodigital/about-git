import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, AbstractControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {

  skillsForm: FormGroup;
  submitted = false;
  starnumber:any;
  afterverifingstarValue:any;
  myname='ram'
 
  constructor(private fb:FormBuilder) {
    this.skillsForm = this.fb.group({
      mobile:new  FormControl('',Validators.required),
      skill:new FormControl('',Validators.required),
      exp:new FormControl('',Validators.required),
      skills: this.fb.array([]) ,
    });

    
  
  }


 
  // get skills() : FormArray {
  //   return this.skillsForm.get("skills") as FormArray
  // }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.skillsForm.controls;
  // }
 
  // newSkill(): FormGroup {
  //   return this.fb.group({
  //     skill: '',FormControl:[Validators.required],
  //     exp: '',
  //   })
  // }
 
  // addSkills() {
  //   this.skills.push(this.newSkill());
   
  // }
 
  // removeSkill(i:number) {
  //   this.skills.removeAt(i);
  // }
  get f() {return this.skillsForm.controls}
 get skills() {return(this.skillsForm.get('skills') as FormArray).controls;}


  

  addSkills(){
    const newSkill=this.fb.group({
      skill:['',[Validators.required]]
      
    });
    (this.skillsForm.get('skills') as FormArray).push(newSkill);
    
  }

  removeskills(index:number){
    (this.skillsForm.get('skills')as FormArray).removeAt(index)
  }
 
  onSubmit() {
    this.starnumber=JSON.stringify(this.skillsForm.value.mobile)
    console.log(this.starnumber,'star number')
    this.submitted = true;
    if (this.starnumber) {
      const accountIdlength = this.starnumber.length;
      const maskedLength = accountIdlength - 4;
      let newString = 'ramududu';
      for (let i = 1; i < maskedLength; i++) {
        newString = newString.replace(newString[i], '*');
        this.afterverifingstarValue=newString
        console.log(this.afterverifingstarValue,'after')
        // console.log(this.starnumber)
      }
    
    }
    
    if (this.skillsForm.valid) {
    alert(JSON.stringify(this.skillsForm.value))


    }
  }


  
 
}
 
 

