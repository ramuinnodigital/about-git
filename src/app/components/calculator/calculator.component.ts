import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  expression: string = '';
  result: any;
 

  appendNumber(num:any) {
    this.expression += num;
  }

  appendOperator(operator:any) {
    this.expression += operator;
  }

  clear() {
    this.expression = '';
    this.result = undefined;
  }

  calculate() {
    try {
      this.result = eval(this.expression);
    } catch (error) {
      this.result = NaN;
    }
  }

 
}
