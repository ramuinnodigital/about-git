import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
declare var $: any;

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent {
  cropedimage: any;


  constructor(private service:SubjectService){
    this.service.sendsignatureCroped.subscribe((res:any)=>{
      this.cropedimage=res;
      $('#exampleModall').modal('hide');
    })

  }

  sendSignature(event:any){
    $('#exampleModall').modal('show');
    this.service.sendevent.next(event)
  }
}
