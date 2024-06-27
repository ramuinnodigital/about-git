import {Component,ViewChild, ElementRef, Renderer2} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';





@Component({
  selector: 'app-hostlister-and-hostbinding',
  templateUrl: './hostlister-and-hostbinding.component.html',
  styleUrls: ['./hostlister-and-hostbinding.component.scss'],
  
})
export class HostlisterAndHostbindingComponent {


  // @ViewChild('myInput') myInput!: ElementRef;
  @ViewChild('myInput', { static: false }) myInput!: ElementRef;
 
  dataArray: any[] = [];
  share=0;
  sharetwo=0;

  sharearray:any=[]=[];
  myForm!: FormGroup;

  allOptions= [
    'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5',
    'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10',
    'Option 11', 'Option 12', 'Option 13', 'Option 14', 'Option 15',
    'Option 16', 'Option 17', 'Option 18', 'Option 19', 'Option 20'
  ];

  showAllOptions: boolean = false;

  constructor(private renderer: Renderer2,private elRef: ElementRef,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      range1Value: [0],
      range2Value: [0],
      range3Value: [0],
    });
  }

  toggleHighlight() {
    document.getElementById('myInput')?.focus();
    const element = this.elRef.nativeElement.querySelector('#dynamicHeading');
    if (element) {
      this.renderer.removeClass(element, 'ram');
      this.renderer.addClass(element, 'remove'); 
    
    }

    const inputElement = this.myInput.nativeElement;
    const isHighlighted = inputElement.classList.contains('ram');
    if (isHighlighted) {
      this.renderer.removeClass(inputElement, 'ram');
    } else {
      this.renderer.addClass(inputElement, 'ram');
    }
   
  }


  loopOptions(){
   return this.showAllOptions?this.allOptions:this.allOptions.slice(0,5)
  }


  toggleOptions(){
    this.showAllOptions=!this.showAllOptions
  }



  onChangeShare1() {
    let totalShare = this.myForm.value.range1Value + this.myForm.value.range2Value + this.myForm.value.range3Value;

    if (totalShare > 100) {
      this.myForm.controls['range1Value'].patchValue(100-(totalShare -this.myForm.value.range1Value))
     
    }
  }
  onChangeShare2() {
    let totalShare = this.myForm.value.range1Value + this.myForm.value.range2Value + this.myForm.value.range3Value;

    if (totalShare > 100) {
      this.myForm.controls['range2Value'].patchValue(100-(totalShare -this.myForm.value.range2Value))
      
    }
  }
  onChangeShare3() {
    let totalShare = this.myForm.value.range1Value + this.myForm.value.range2Value + this.myForm.value.range3Value;

    if (totalShare > 100) {
      this.myForm.controls['range3Value'].patchValue(100-(totalShare -this.myForm.value.range3Value))
    }
  }

  

 

}
