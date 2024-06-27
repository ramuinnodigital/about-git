import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent {

  startDate!: string;
  endDate!: string;
  minutes!: number;
  seconds!: number;
  interval: any;
  // data = [
  //   { date: new Date('2023-01-01'), data: 'Data 1' },
  //   { date: new Date('2023-02-15'), data: 'Data 2' },
  //   { date: new Date('2023-03-20'), data: 'Data 3' },
  // ];
  data = [
    { date:'2023-01-01', data: 'Data 1' },
    { date:'2023-02-15', data: 'Data 2' },
    { date:'2023-03-20', data: 'Data 3' },
    { date:'2024-05-24', data: 'Data 4' },
  ];

  filteredData = [...this.data];
  
  constructor(){
    console.log(this.filteredData,'filtered')
  }
  ngOnInit() {
    this.startTimer();
  }


  filterData() {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
   

    this.filteredData = this.data.filter(item => {
      const itemDate = new Date(item.date);
      console.log(itemDate,'item date')
      return itemDate >= start && itemDate <= end;
    });
  }


  startTimer() {
    this.minutes = 1;
    this.seconds = 0;

    clearInterval(this.interval); // Clear any existing interval
    this.interval = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        clearInterval(this.interval);
      } else {
        if (this.seconds === 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      }
    }, 1000);
  }

  @HostListener('document:click', ['$event'])
  onMouseClick(event: MouseEvent) {
    this.startTimer(); // Reset timer on mouse click
  }

}
