import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent {
  sentData: any;
  senddataTwo: any;

  

  constructor(private service:SubjectService){
   
  }

  ngOnInit(){
    this.senddataTwo=this.service.sentDatatwo
    this.service.sendData.subscribe((res:any)=>{
      this.sentData=JSON.stringify(res);
    })
    
  }

}
