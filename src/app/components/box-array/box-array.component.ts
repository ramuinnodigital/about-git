import { Component } from '@angular/core';

@Component({
  selector: 'app-box-array',
  templateUrl: './box-array.component.html',
  styleUrls: ['./box-array.component.scss']
})
export class BoxArrayComponent {
  i: any;

preview() {
  this.i =  this.i-1;
  this.selectedValue=this.dataaaa[this.i]
}
next() {
  this.i =  this.i+1;
  this.selectedValue=this.dataaaa[this.i]
}

  dataaaa=[
    {title:'ONE',descriptin:'first description',id:1},
    {title:'TWO',descriptin:'second description',id:2},
    {title:'THREE',descriptin:'third description',id:3}
  ]
  selectedValue: any;

  send(i:any,id:any){
   const finindex= this.dataaaa.findIndex((a:any)=>a.id == id)
    this.i = i;
    this.selectedValue=this.dataaaa[i]

  }

}
