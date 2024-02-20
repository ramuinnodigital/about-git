import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss']
})
export class SlideNavComponent {
 



  CopyText:any
  realname: any;
  

constructor(private spinner: NgxSpinnerService){
 
}



submit(){
  this.spinner.show();
  if(this.CopyText){
    this.spinner.hide();
    const CopyTextLegth=this.CopyText.length;
    const CopyTextLegthMinues=CopyTextLegth-2
    let realname=this.CopyText
    for (let i=0; i<CopyTextLegthMinues; i++){
    realname=realname.replace(realname[i],'*')
    
    }

  }
}


}
