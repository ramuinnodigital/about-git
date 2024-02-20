import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
declare var $: any;

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanComponent {
  cropedImage: any;

  constructor(private service:SubjectService){
this.service.cropedImage.subscribe((res:any)=>{
  this.cropedImage=res;
  $('#exampleModal').modal('hide');
})
  }

  sendFile(event:any){
    $('#exampleModal').modal('show');
    this.service.sendevent.next(event)
  }

}

