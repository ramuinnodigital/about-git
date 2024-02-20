import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-professinal-info',
  templateUrl: './professinal-info.component.html',
  styleUrls: ['./professinal-info.component.scss']
})
export class ProfessinalInfoComponent {
  @Output() sendnumber = new EventEmitter<string>();
  form: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService) {
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
    this.sendnumber.emit("2")
    this.toastr.success('step 2 completed successfully');
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }


}
