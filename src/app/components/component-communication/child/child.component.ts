import { Component, EventEmitter, Input, Output} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';
import {OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() toggleEvent = new EventEmitter<void>();
  @Input() color: string = "";
  @Input() name:any
  @Input() mytext:any;
  @Input() message:any;

  constructor(){
    alert(this.message)
  }
  

  ngOnChanges(changes: any){
    // console.log(changes);
    // if(changes.color){
    //   this.myFunction();
    // }
    // if(changes.name){
      
    // this.namefunction();
    // }

   this.texting()
    }

  texting(){
    // alert('its working ')
  }

  childMethod() {
    alert('Child method called!');
  }

    // myFunction(){
    //   alert('hello' + this.color);
      
    // }
    // namefunction(){
    //   alert('name'+ this.name)
    // }

  send(){
    this.toggleEvent.emit()
  }

 

}
