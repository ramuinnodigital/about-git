import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {

  @Output() buttonWasClicked = new EventEmitter<string>();
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      firstname: new FormControl('',Validators.required),
  lastname: new FormControl('',Validators.required),
  email: new FormControl('',[Validators.required,Validators.email]),
  phone: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  // address: new FormControl('',Validators.required),
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
      this.buttonWasClicked.emit('2');
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }


}
