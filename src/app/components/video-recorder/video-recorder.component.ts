import {Component,  ViewChild,  OnInit,  ElementRef} from '@angular/core';
declare var MediaRecorder: any;


@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.component.html',
  styleUrls: ['./video-recorder.component.scss']
})
export class VideoRecorderComponent{

    videoElement!: HTMLVideoElement;
    recordVideoElement!: HTMLVideoElement;
    mediaVideoRecorder: any;
    videoRecordedBlobs!: Blob[];
    isRecording: boolean = false;
    downloadVideoUrl!: string;
    stream!: MediaStream;
    recored:boolean=false;
    @ViewChild('recordedVideo')
  recordVideoElementRef!: ElementRef;
    @ViewChild('liveVideo')
  videoElementRef!: ElementRef;
    @ViewChild('audioElement')
  audioElementRef!: ElementRef;
  audioElement!: HTMLAudioElement;


    constructor() {}
    async ngOnInit() {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 480
            },
            audio: true
        }).then(stream => {
            this.videoElement = this.videoElementRef.nativeElement;
            this.recordVideoElement = this.recordVideoElementRef.nativeElement;
            this.stream = stream;
            this.videoElement.srcObject = this.stream;
            this.audioElement = this.audioElementRef.nativeElement;
        });
    }
    startVideoRecording() {
        this.videoRecordedBlobs = [];
        let options: any = {
            mimeType: 'video/webm'
        };
        try {
            this.mediaVideoRecorder = new MediaRecorder(this.stream, options);
        } catch (err) {
            console.log(err);
        }
        this.mediaVideoRecorder.start();
        this.isRecording = !this.isRecording;
        this.onDataAvailableVideoEvent();
        this.onStopVideoRecordingEvent();
        // Hide the recorded video when the "Start Recording" button is clicked
        this.recordVideoElement.style.display = 'none';
        this.videoElement.style.display = 'none';
      
    }
    stopVideoRecording() {
        this.mediaVideoRecorder.stop();
        this.isRecording = !this.isRecording;
        this.recordVideoElement.style.display = 'block';
    }
  

  playBase64Recording() {
    if (this.downloadVideoUrl) {
        this.recordVideoElement.play()
            .then(() => console.log('Playback started successfully'))
            .catch(error => console.error('Error starting playback:', error));
    }
}



    onDataAvailableVideoEvent() {
        try {
            this.mediaVideoRecorder.ondataavailable = (event: any) => {
                if (event.data && event.data.size > 0) {
                    this.videoRecordedBlobs.push(event.data);
                }
            };
        } catch (error) {
            console.log(error);
        }
    }
   

onStopVideoRecordingEvent() {
  try {
      this.mediaVideoRecorder.onstop = (event: Event) => {
          const videoBuffer = new Blob(this.videoRecordedBlobs, {
              type: 'video/webm'
          });

          const reader = new FileReader();
          reader.onloadend = () => {
              const base64data = reader.result as string;
              this.downloadVideoUrl = base64data;
              console.log(this.downloadVideoUrl,'down load')
              this.recordVideoElement.src = this.downloadVideoUrl;
              this.audioElement.src = this.downloadVideoUrl;
              this.playBase64Recording();
          };

          reader.readAsDataURL(videoBuffer);
      };
  } catch (error) {
      console.log(error);
  }
}
}
