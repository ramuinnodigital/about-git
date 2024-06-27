import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent {

  @Input() inputvalue: any;
  @Input() messagefromchild: any;
  number=0;


  ngOnChanges(changes:any): void {
    if (changes.inputvalue) {
      this.number++
    }else if(changes.messagefromchild){
      this.number--
    }
  }

}
