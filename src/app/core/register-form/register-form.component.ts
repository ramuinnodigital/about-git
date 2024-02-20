import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  form: FormGroup;
  submitted = false;
  password: any;
  confirmedPassword: any;

  

  constructor(private formBuilder: FormBuilder, private api:LoginService,private route:Router,private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      firstname: new FormControl('',Validators.required),
      phone: new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern(/\d/),]),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmpassword:new FormControl('', [Validators.required])
      
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
      this.api.postData(this.form.value).subscribe(res=>{
        this.toastr.success('registered successfully');
        this.route.navigate(['/login'])
        this.form.reset();
        this.submitted=false;
      })
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

 

  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }


}
