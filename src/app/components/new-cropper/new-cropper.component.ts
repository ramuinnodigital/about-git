import { Component, ViewChild, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageCropperComponent } from 'ngx-image-cropper';
declare var $: any;
import Cropper from 'cropperjs';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-new-cropper',
  templateUrl: './new-cropper.component.html',
  styleUrls: ['./new-cropper.component.scss'],
})
export class NewCropperComponent implements OnInit {
  name = 'Image cropper for Angular';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  maintainAspectRatio = false;
  croppedImages: any[] | undefined;
  

  // @ViewChild(ImageCropperComponent, { static: false }) imageCropper!: ImageCropperComponent;
  // @ViewChild(ImageCropperComponent)
  // imageCropper!: ImageCropperComponent;

  @ViewChild('cropper', { static: false }) cropper: ImageCropperComponent | undefined;
  
  displayedImage: any;
  finalcropedimage:any;
  convertimage: any;
  save: any;
  rotationState: number = 0;

  constructor(private sanitizer:DomSanitizer,private router: Router){
   
  }

  ngOnInit() {
    // Initialize any necessary properties or settings here
  }
 

 

  fileChangeEvent(event: any): void {
    if(event){
      $('#exampleModal').modal('show');
    }
    this.imageChangedEvent = event;
  
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
    this.finalcropedimage=this.croppedImage.changingThisBreaksApplicationSecurity
   
  }

  imageLoaded() {
    this.showCropper = true;
    
  }

  cropperReady() {
   
  }

  loadImageFailed() {
  
  }

  go(){
    this.router.navigate(['/'])
  }

 
 
  // rotateImage() {
  //   if (this.imageCropper) {
  //     switch (this.rotationState) {
  //       case 0:
  //         this.rotationState = 1;
  //         break;
  //       case 1:
  //         this.rotationState = 2;
  //         break;
  //       case 2:
  //         this.rotationState = 0;
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   alert(this.rotationState)
  // }



  
  

  saveCroppedImage() {
    if (this.croppedImage) {
      this.save=this.croppedImage.changingThisBreaksApplicationSecurity;
      this.blobToBase64(this.save, (base64String: any) => {
        if(base64String){
          this.displayedImage = base64String; 
          $('#exampleModal').modal('hide');
        }
        
      });
    }
  }

  blobToBase64(dataUrl: string, callback: (base64String: string) => void): void {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result as string);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', dataUrl);
    xhr.responseType = 'blob';
    xhr.send();
  }

  


  

}
