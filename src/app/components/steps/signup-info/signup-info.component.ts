import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-signup-info',
  templateUrl: './signup-info.component.html',
  styleUrls: ['./signup-info.component.scss']
})
export class SignupInfoComponent {
  @Output() sendnumber = new EventEmitter<string>();
  form: FormGroup;
  submitted = false;
  selecedvalue: any;

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      companyname: new FormControl('',Validators.required),
      exp: new FormControl('',Validators.required),
      designation: new FormControl('',Validators.required),
      radiovalue:new FormControl('',Validators.required)
     
    });
  }

  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.sendnumber.emit("1")
      $('#exampleModal').modal('show');
      this.toastr.success('step1 completed successfully');
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    
  }

  modellclick(){
  
  }

  yesnoCheck(that:any) {
   this.selecedvalue=that
   console.log(this.selecedvalue,'selected value')
}

}
