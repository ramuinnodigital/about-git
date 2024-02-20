import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  submitted = false;
  alldata: any;
  password='password'
  show:boolean=false;

  

  constructor(private formBuilder: FormBuilder, private api:LoginService,private route:Router,private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
     
    });
   
  }

  ngOnInit(): void {
   this.getdata()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      const singleData=this.alldata.find((a:any)=>{
        return a.email==this.form.value.email && a.password ==this.form.value.password
      })

      if(singleData){
        this.toastr.success('login successfully');
        this.route.navigate(['/'])
        localStorage.setItem('email',singleData.email)
        localStorage.setItem('password',singleData.password)
      }else{
        this.toastr.error('wrong credentails')
      }
    }

    
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  getdata(){
    this.api.getData().subscribe(res=>{
      this.alldata=res;
      console.log(this.alldata,'alldata')
    })
  }

  iconShowHide(){
    if(this.password === 'password'){
      this.password='text'
      this.show=true;
    }else{
      this.password='password'
      this.show=false
    }
  }
}
