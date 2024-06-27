import { Component } from '@angular/core';

@Component({
  selector: 'app-update-value-with-index',
  templateUrl: './update-value-with-index.component.html',
  styleUrls: ['./update-value-with-index.component.scss']
})
export class UpdateValueWithIndexComponent {

  items = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' }
  ];

  selectedIndex!: number;
  newName!: string;
  newDescription!: string;


  updateItem(index:number,newName: string, newDescription: string){
    if(index >= 0 && index < this.items.length){
      this.items[index].name=newName;
      this.items[index].description=newDescription
    }
  }


  onSubmit() {
    this.updateItem(this.selectedIndex, this.newName, this.newDescription);
  }
}
