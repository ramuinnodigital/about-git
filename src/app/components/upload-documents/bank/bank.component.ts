import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
declare var $: any;

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  cropedimage: any;


  constructor(private service:SubjectService){
    this.service.sendbankcroped.subscribe((res:any)=>{
      this.cropedimage=res;
      $('#exampleModalll').modal('hide');
    })
  }

  sendbank(event:any){
    $('#exampleModalll').modal('show');
    this.service.sendevent.next(event)

  }
}
