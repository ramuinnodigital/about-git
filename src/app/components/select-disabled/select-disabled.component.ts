import { Component } from '@angular/core';

@Component({
  selector: 'app-select-disabled',
  templateUrl: './select-disabled.component.html',
  styleUrls: ['./select-disabled.component.scss']
})
export class SelectDisabledComponent {

  selectedIndex:any;
  option3Index:any;
  options = [
    { value: 'option1', label: 'Option 1', completed: false },
    { value: 'option2', label: 'Option 2', completed: false },
    { value: 'option3', label: 'Option 3', completed: false },
    { value: 'option4', label: 'Option 4', completed: false },
  ];

  

constructor(){
  
}

  ngOnInit() {
    this.option3Index = this.findOptionIndex('option3');
    this.options[this.option3Index].completed=true;
   
  }

  findOptionIndex(value: string): number {
    return this.options.findIndex(option => option.value === value);
  }

  // Function to update the status of an option
  updateStatus(index: number): void {
    if (index >= 0 && index < this.options.length) {
      this.options[index].completed = true;
    }
  }

  // Function to handle the submit action
  onSubmit(index: number): void {
    this.updateStatus(index);
  }
}
