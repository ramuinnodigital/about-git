import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-parent-bar',
  templateUrl: './parent-bar.component.html',
  styleUrls: ['./parent-bar.component.scss']
})
export class ParentBarComponent {
  mySubjectValue:any;

  constructor(private subjectttt:SubjectService){
    this.mySubjectValue=this.subjectttt
  }

 
}
