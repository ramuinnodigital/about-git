import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  @Output() sendData = new EventEmitter<string>();

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,private route:Router) {
    this.form = this.formBuilder.group({
      username: new FormControl('',Validators.required),
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
    
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
    this.sendData.emit("3")
    this.toastr.success('step 3 sucessully completed');
    this.route.navigate(['/successfully'])
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
