import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnDestroy {

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

callChildMethod() {
this.childComponent.childMethod();
}

  childIsOpen: boolean = true;
  color: string = 'red';
  name='ram'
  mytext:any;

  parentMessage = 'Message from parent to child';
  

constructor(private route:Router){
  this.parentMessage = "Message from parent to child"

setInterval(()=>{
  this.color="green"
},5000)

setInterval(()=>{
  this.name='mahesh'
},15000)
}




go(){
this.route.navigate([''])
}


toggleControl(){
  this.childIsOpen=!this.childIsOpen
}


ngOnDestroy() {
 this.showConfirmation();
}
showConfirmation(): void {
  if(confirm('Are you sure want to leave this site ')){

  }else{
    this.route.navigate(['/parent'])
  }

}
}
