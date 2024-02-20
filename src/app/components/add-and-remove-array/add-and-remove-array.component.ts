import { Component } from '@angular/core';

@Component({
  selector: 'app-add-and-remove-array',
  templateUrl: './add-and-remove-array.component.html',
  styleUrls: ['./add-and-remove-array.component.scss']
})
export class AddAndRemoveArrayComponent {

  UserName: string = "Enter UserName"
  countdownMinutes: number = 1; // Initial countdown time in minutes
  countdownSeconds: number = this.countdownMinutes * 30; // Convert minutes to seconds
  intervalId: any;

  userlist:any=[]
  constructor() {

  }

  ngOnInit() {
    this.startTimer();
    console.log(this.userlist, 'userslist')
  }

  onclick(prouser: any) {
    // if (!this.userlist || this.userlist.length == 0) {
    //   this.userlist = [];
    // }
    if (prouser.value.length > 0) {
      this.userlist.push(prouser.value);
      prouser.value = '';
    }
     console.log(this.userlist);
  }

  ondelete(deleteme: any) {
    this.userlist.splice(deleteme);
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      this.countdownSeconds--;

      if (this.countdownSeconds === 0) {
        // Timer has reached 0, you can perform any action here
        clearInterval(this.intervalId);
      }
    }, 1000); // Update every 1000 milliseconds (1 second)
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    const formattedMinutes = String(minutes).padStart(1, '0');
    const formattedSeconds = String(remainingSeconds).padStart(1, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  clear(): void {
    clearInterval(this.intervalId); // Clear the existing interval
    this.countdownSeconds = this.countdownMinutes * 30; // Reset countdown to initial value
    this.startTimer(); // Start the timer again
  }

  number:any;
  percentage:any;
  result:any;

  calculatePercentage() {
    if (this.number !== undefined && this.percentage !== undefined) {
      this.result = (this.number * this.percentage) / 100;
    } else {
      this.result = undefined;
    }
  }
}
