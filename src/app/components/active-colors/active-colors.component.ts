import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-colors',
  templateUrl: './active-colors.component.html',
  styleUrls: ['./active-colors.component.scss']
})
export class ActiveColorsComponent {

  // isActive: boolean = true;
  isActive: boolean = true;
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  colors = [
    { name: 'Red', active: true },
    { name: 'Blue', active: false },
    { name: 'Green', active: false }
  ];

  itemss = [
    { name: 'Item 1', isActive: false },
    { name: 'Item 2', isActive: true },
    { name: 'Item 3', isActive: false }
  ];
 
selectedItem: number | null = null;



constructor(private route: ActivatedRoute) {}


  selectItem(itemId: number) {
    this.selectedItem = itemId;
  }

  toggleColorActivation(color:any): void {
    this.colors.forEach(c => {
      if (c.name == color) {
        c.active = true;
      }else{
        c.active = false;
      }
    });
   
  }


  toggleActive() {
    this.isActive = !this.isActive;
  }
}
