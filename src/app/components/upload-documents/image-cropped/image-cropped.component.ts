import { Component, Input, Output } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ImageCroppedEvent, LoadedImage,ImageTransform  } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-cropped',
  templateUrl: './image-cropped.component.html',
  styleUrls: ['./image-cropped.component.scss']
})
export class ImageCroppedComponent {
  eventData: any;
  eventImage: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  @Input() type:any;
  


  constructor(private serive:SubjectService, private sanitizer: DomSanitizer){
    this.serive.sendevent.subscribe((res:any)=>{
      this.eventData=res;
      console.log(this.eventData,'event')
    })


  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
  console.log(this.croppedImage,'croped images')

}
imageLoaded(image: LoadedImage) {

}
cropperReady() {
 
}
loadImageFailed() {

}

save(){
  console.log(this.type,'input type')
  if(this.type === 'pan'){
    this.serive.cropedImage.next(this.croppedImage)
  }else if(this.type === 'signature'){
    this.serive.sendsignatureCroped.next(this.croppedImage)
  }else if(this.type === 'bank'){
    this.serive.sendbankcroped.next(this.croppedImage)
  }


}




}
