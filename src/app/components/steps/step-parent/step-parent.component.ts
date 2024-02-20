import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ElementRef,VERSION,ViewChild,OnInit} from "@angular/core";
import SignaturePad from "signature_pad";


@Component({
  selector: 'app-step-parent',
  templateUrl: './step-parent.component.html',
  styleUrls: ['./step-parent.component.scss']
})
export class StepParentComponent {
  name = "Angular " + VERSION.major;

  @ViewChild("canvas", { static: true })
  canvas!: ElementRef;
  signpad!: SignaturePad;
  signImage:any;

  steparray=[
    {
      "id":1,
      "select":false,
      "step":1,
      "status":false
    
    },
    {
      "id":2,
      "select":false,
      "step":2,
      "status":false
      
    },
    {
      "id":3,
      "select":false,
      "step":3,
      "status":false
     
    }
  ]

  constructor(private route:Router){}

  ngOnInit() {
    this.signpad = new SignaturePad(this.canvas.nativeElement);
  }

  step:Number=1
  getid(id:any){
    switch(id) { 
      case 1: { 
      if(id == 1){
       this.step =1;
      }
         break; 
      } 
      case 2: { 
        if(id == 2){
          this.step =2;
         }
         break; 
      } 
      case 3: {
        if(id == 3){
          this.step =3;
         }
         break;    
      } 
     
   } 
  }

  step1trigger($event:any){
    if(JSON.parse($event)===1){
      this.step=2;
      this.steparray[0].select=true;
    }

  }

  step2trigger($event:any){
    if(JSON.parse($event)===2){
      this.step=3;
      this.steparray[1].select=true;
    }
  }

  step3trigger($event:any){
    if(JSON.parse($event)===3){
      this.step=3;
      this.steparray[2].select=true;
    }
  }


  logout(){
  localStorage.clear();
  this.route.navigate(['/login'])
    
  }


  startSignPadDrawing(event: Event) {
    console.log(event);
  }
  /*It's work in devices*/
  movedFinger(event: Event) {
  }
  /*Clean whole the signature*/
  clearSignPad() {
    this.signpad.clear();
  }
  /*Here you can save the signature as a Image*/
  saveSignPad() {
    const base64ImageData = this.signpad.toDataURL();
    this.signImage = base64ImageData;
    console.log(this.signImage,'imagee')
  }
    clear() {
      this.signpad.clear();
    }
}
