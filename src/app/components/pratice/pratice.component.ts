import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.scss']
})
export class PraticeComponent {
  
  form!:FormGroup;
  submitted:boolean=false;
  show:boolean=false;

  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      proofname:['',Validators.required],
      proofnumber:['',Validators.required],
      insidetwo:[''],
      insideone:[''],
      partner:this.fb.array([])
    })


    
  }

  changevales(){
    let proofnamevalues=this.form.controls['proofname'].value
    
    if(proofnamevalues == 'pan'){
      this.form.controls['proofnumber'].setValidators([Validators.required,Validators.pattern("[a-zA-Z]{3}[Pp][a-zA-Z][0-9]{4}[a-zA-Z]{1}")])
    }else if(proofnamevalues == 'adhar'){
      this.form.controls['proofnumber'].setValidators([Validators.required,Validators.pattern( /^\d{12}$/)])
    }else if(proofnamevalues == 'passport' || proofnamevalues == 'voterid' || proofnamevalues == 'driving'){
      this.form.controls['proofnumber'].setValidators(Validators.required)
    }
    this.form.controls['proofnumber'].updateValueAndValidity();

  }

  focusout(){
    let validcontrol=this.form.controls['proofnumber']
    if(validcontrol.valid){
      return
    }
    let proofnamevalues=this.form.controls['proofname'].value
    if(proofnamevalues == 'pan'){
      if(this.form.controls['proofnumber'].value == ''){
        alert('please enter your pan number')
      }else{
        alert('pan is invalid')
      }
    }else if(proofnamevalues == 'adhar'){
      if(this.form.controls['proofnumber'].value == ''){
        alert('please enter your aadhar number')
      }
      else{
        alert('invalid aadhar number')
      }
    }else if(proofnamevalues == 'passport'){
      if(this.form.controls['proofnumber'].value == ''){
        alert('please enter your passport')
      }
    }
    else if(proofnamevalues == 'voterid'){
      if(this.form.controls['proofnumber'].value == ''){
        alert('please enter your voterid')
      }
    }
    else if(proofnamevalues == 'driving'){
      // if(this.form.controls['proofnumber'].value == ''){
      //   alert('please enter your driving')
      // }
      alert('please enter your driving')
    }
  }

  addmore(){
    this.show=!this.show
    this.showvalidation();
  }

  showvalidation(){
    if(this.show==true){
      this.form.controls['insideone'].setValidators(Validators.required)
      this.form.controls['insidetwo'].setValidators(Validators.required)
    }else{
      this.form.controls['insideone'].setValidators(null)
      this.form.controls['insidetwo'].setValidators(null)
    }
    this.form.controls['insideone'].updateValueAndValidity();
    this.form.controls['insidetwo'].updateValueAndValidity();
  }

  get f():{[key:string]:AbstractControl}{
return this.form.controls
  }

  get partner():FormArray{
    return this.form.get('partner') as FormArray
  }

  checkcontrol(i:any){
    const formgroup=this.partner.controls[i] as FormGroup
    return formgroup
  }


  newparnter(){
   return this.fb.group({
    name:['',Validators.required],
    password:['',Validators.required]
    })
  }

  add(){
    this.partner.push(this.newparnter())
  }

  submit(){
this.submitted=true;
if(this.form.valid){
  let partnerdetails=this.form.value.partner

  for(let i=0; i < partnerdetails.length; i++){
    partnerdetails[i].dop = '27/08/1998';
  }

  console.log(this.form.value)
}
  }


}
