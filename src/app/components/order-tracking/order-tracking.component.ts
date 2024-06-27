import { Component } from '@angular/core';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss']
})
export class OrderTrackingComponent {

  orderStatuses = [
    { status: 'Ordered',status_code: '', date: 'Mon, June 24', completed: true },
    { status: 'Shipped',status_code: '', date: 'Tue, June 25', completed: true },
    { status: 'Delivered',status_code: '', date: 'Fri, June 28', completed: true },
    { status: 'cancelled',status_code: '', date: 'Fri, mon 30', completed: false },
  ];

  constructor() {
    let items = [
      { name: 'Item 1', value: 10 },
      { name: 'Item 2', value: 20 },
      { name: 'Item 3', value: 30 }
    ];
    
    // Use forEach to iterate over each item in the array
    items.forEach((item:any) => {
      // Add the new key-value pair to each item
      item['newKey'] = 'newValue';
    });
    
    // Now each item in the array has a new key-value pair
    console.log(items);
   }

  ngOnInit(): void {
    setInterval(()=>{
      this.orderStatuses[0].status_code = 'Ordered';
    },3000);
    setInterval(()=>{
      this.orderStatuses[1].status_code = 'Shipped';
    },6000);
    setInterval(()=>{
      this.orderStatuses[2].status_code = 'Delivered';
    },10000);
    setInterval(()=>{
      this.orderStatuses[3].status_code = 'cancelled';
    },13000)
  }
}
