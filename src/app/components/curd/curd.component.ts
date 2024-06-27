import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})
export class CurdComponent {

form!:FormGroup;
  studentData: any;
  singleiddata: any;

constructor(private fb:FormBuilder,private api:SubjectService){
  this.form=this.fb.group({
    name:[''],
    class:[''],
    roll:[''],
    phone:['']
  })
}

ngOnInit(){
  this.getStudents()
}


  add(){
    const data={
      studentName:this.form.value.name,
      studentClass:this.form.value.class,
      studentRoll:this.form.value.roll,
      studentPhone:this.form.value.phone
    }
    this.api.sendStudentsData(data).subscribe((res:any)=>{
      this.form.reset();
      this.getStudents();

    })
  }

  async getStudents() {
    try {
      const res = await this.api.getAllstudents().toPromise();
      this.studentData = res;
      this.singleiddata = this.studentData[0]._id;
      console.log(this.singleiddata, 'single id');
      await this.singleid(this.singleiddata);
    } catch (error) {
      console.error(error);
    }
  }
  
  async singleid(id: any) {
    try {
      const res = await this.api.singleid(id).toPromise();
      console.log(res, 'single id data');
    } catch (error) {
      console.error(error);
    }
  }
  

  delete(id:any){
    this.api.delete(id).subscribe((res:any)=>{
      alert('deleted successfully')
      this.getStudents();
    })

  }
}
