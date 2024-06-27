import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent {
  cartItmes:any[] = [];
  singleid: any;
 

  constructor(private subject:SubjectService){
    this.subject.cartSubject.subscribe(res =>{
      this.singleid=res.id
      this.subject.receiveId(this.singleid)
      if(this.cartItmes.find((a)=>a.id == res.id)){

      }else{
        this.cartItmes.push(res);
      }
     
    });
   
  }

 

 
}
