import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.scss']
})
export class FilterItemsComponent {

  progressValue: number = 0;
  isButtonEnabled: boolean = false;

  items=[
    {
      id:1,
      category:'break fast',
      item:'dosa',
      prie:20

    },
    {
      id:2,
      category:'break fast',
      item:'idle',
      prie:50

    },
    {
      id:3,
      category:'break fast',
      item:'puri',
      prie:100

    },
    {
      id:4,
      category:'lunch',
      item:'biryani',
      prie:250

    },
    {
      id:5,
      category:'lunch',
      item:'button biryani',
      prie:500

    },
    {
      id:6,
      category:'dinner',
      item:'curd rice',
      prie:500

    },
    {
      id:7,
      category:'dinner',
      item:'roti',
      prie:50

    },
    {
      id:8,
      category:'dinner',
      item:'rice',
      prie:100

    }
  ]

  constructor(){
    console.log(this.items,'items array')
    this.showAllItems();
  }

  filteredItems:any;

  filterCategory(category: string): void {
    this.filteredItems = this.items.filter(item => item.category.toLowerCase() === category.toLowerCase());
  }

  showAllItems(): void {
    this.filteredItems =(this.items);
  }


  incrementProgress() {
    if (this.progressValue < 100) {
      this.progressValue += 33.5;
      console.log(this.progressValue,'progress value')
      if (this.progressValue === 100) {
        this.isButtonEnabled = true;
      }
    }
  }
  checkValue(){
    this.incrementProgress();
  }
}
