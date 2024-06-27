import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import {ElementRef, HostListener, ViewChild } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-switch-method',
  templateUrl: './switch-method.component.html',
  styleUrls: ['./switch-method.component.scss']
})
export class SwitchMethodComponent {
 
  isChecked: boolean = false;
  content: string | null = null;
  uploadProgress: number = -1; // Initialize upload progress to -1 (not started)
  apiUrl: string = 'https://example.com/upload';

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  namesList: string[] = ['ram', 'mahesh', 'suresh', 'kumar', 'ravi','rahul','ramya','name','null','boolean'];
  selectedNumber:any;
  repeatedNames: string[] = [];

  nameToRepeat: string = 'Your Name';

  
  // myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  // myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
 
  imageUrl = '';
  imageAlt = 'Hyderabad Image';
  zoomFactor = 1.2;
  zoomBoxVisible = false;

  progress: number = 0;
  notifications: any[] = [];
  constructor(private http: HttpClient) {
     
  }

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.notifications.push({});
  //     this.updateProgress();
  //   }, 2000); 
  // }
  // updateProgress() {
  //   const maxProgress = 100;
  //   const notificationCount = this.notifications.length;
  //   this.progress = (notificationCount / maxProgress) * 100;
  //   console.log(this.progress,'progress count')

   
  // }
  ngOnInit(): void {
    // Simulating file upload progress
   
  }

  updateNames() {
    
    this.repeatedNames = Array.from({length: this.selectedNumber },()=> this.namesList[this.selectedNumber -1]);
    
  }

  // updateNames() {
  //   this.repeatedNames = this.generateRepeatedNames(this.selectedNumber);
  // }

  // private generateRepeatedNames(count: number): string[] {
  //   const repeatedArray: string[] = [];
  //   if (count > 0 && count <= this.namesList.length) {
  //     const selectedName = this.namesList[count - 1];
  //     for (let i = 0; i < count; i++) {
  //       repeatedArray.push(selectedName);
  //     }
  //   }
  //   return repeatedArray;
  // }


  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const fileSizeInBytes = file.size;
      this.notifications.push({ fileSize: fileSizeInBytes });
      this.updateProgress();
    }
  }

  updateProgress(): void {
    const maxFileSize = 3 * 1024 * 1024; // Max file size in bytes (e.g., 10MB)
    let totalSize = 0;

    this.notifications.forEach(notification => {
      totalSize += notification.fileSize || 0;
    });

    this.progress = Math.min((totalSize / maxFileSize) * 100, 100);
  }

 

  handleMouseMove(event: MouseEvent): void {
    const container = document.querySelector('.zoom-container') as HTMLElement;
    const zoomBox = document.getElementById('zoomBox') as HTMLElement;
    const zoomedImage = document.getElementById('zoomImage') as HTMLImageElement;

    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    const zoomFactor = 2; // Set the zoom factor

    zoomBox.style.display = 'block';
    zoomBox.style.left = `${mouseX - zoomBox.offsetWidth / 2}px`;
    zoomBox.style.top = `${mouseY - zoomBox.offsetHeight / 2}px`;

    zoomedImage.style.transformOrigin = `${mouseX}px ${mouseY}px`;
    zoomedImage.style.transform = `scale(${zoomFactor})`;
  }

  resetZoom(): void {
    const zoomBox = document.getElementById('zoomBox') as HTMLElement;
    const zoomedImage = document.getElementById('zoomImage') as HTMLImageElement;

    zoomBox.style.display = 'none';
    zoomedImage.style.transform = 'scale(1)';
  }  
}
