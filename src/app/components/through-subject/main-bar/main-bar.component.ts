import { Component} from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent {
  subjectValue:any;
  myvlue:any;
 
  wordslenth:any;
  senddataaaa:any;
 


  constructor(private subject:SubjectService){
    this.subject.showhideStatus.subscribe((vale:any)=>{
      this.subjectValue=vale
    })
   
  
  }
  open(){
    this.subject.hide();
  }

  close(){
    this.subject.show();
  }


  sendData(){
    this.subject.addtocart(this.senddataaaa)
    this.senddataaaa='';
  }

  
}
