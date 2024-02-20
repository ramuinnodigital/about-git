import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

buttondata=[
  {
    "id":1,
    "title":'company details',
    "selected":false,
    "step":1
    

  },
  {
    "id":2,
    "title":'contact details',
    "selected":false,
    "step":2
    

  },
  {
    "id":3,
    "title":'kyc online',
    "selected":false,
    "step":3
    

  }
]

step:Number=1;

constructor(private route:Router){}

sendStep(data:any){
  switch(data) { 
    case 1: { 
    if(data == 1){
     this.step =1;
    }
       break; 
    } 
    case 2: { 
      if(data == 2){
        this.step =2;
       }
       break; 
    } 
    case 3: {
      if(data == 3){
        this.step =3;
       }
       break;    
    } 
   
 } 

}

step1trigger($event:any){
  alert(JSON.parse($event))
  if(JSON.parse($event)===2){
    this.step = 2;
    this.buttondata[1].selected=true;
    console.log(this.buttondata,'array index')
    
  }

}

step2trigger($event:any){
  if(JSON.parse($event)===3){
    this.step=3;
    this.buttondata[2].selected=true;
  }

}


 
}
