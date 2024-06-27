import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent {

  constructor(private route:Router){}

  go(){
    this.route.navigate(['/step-main'],{queryParams:{step:'one'}})
  }

}
