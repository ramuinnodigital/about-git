import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  childIsOpen: boolean = true;
 
  

constructor(){

}



toggleControl(){
  this.childIsOpen=!this.childIsOpen
}


}
