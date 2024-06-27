import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step-main',
  templateUrl: './step-main.component.html',
  styleUrls: ['./step-main.component.scss']
})
export class StepMainComponent {

  selected:any;

  changeroute=[
    {
      step:1,
      title:'one',
      status:'completed'
    },
    {
      step:2,
      title:'two',
      status:'completed'
    },
    {
      step:3,
      title:'three',
      status:'completed'
    },
    {
      step:4,
      title:'four',
      status:'completed'
    }
  ]


  constructor(private route:Router,private active:ActivatedRoute){
    this.selected=1;
    this.active.queryParams.subscribe((res:any)=>{
      console.log(res.step,'query')
      if(res.step == 'one'){
        this.selected=1;
      }else if(res.step == 'two'){
        this.selected=2;
      }else if(res.step == 'three'){
        this.selected=3;
      }else if(res.step == 'four'){
        this.selected=4;
      }
    })
    
  }


  selectedValue(id:any){
    if(id == 1){
      this.navigateurl(id)
      this.selected=1
    }else if(id == 2){
      this.navigateurl(id)
      this.selected=2
    }
    else if(id == 3){
      this.navigateurl(id)
      this.selected=3
    }
    else if(id == 4){
      this.navigateurl(id)
      this.selected=4
    }
  }

  navigateurl(id:any){
    if(id == 1){
    this.route.navigate(['/step-main'],{queryParams:{step:'one'}})
    }else if(id == 2){
      this.route.navigate(['/step-main'],{queryParams:{step:'two'}})
    }else if(id == 3){
      this.route.navigate(['/step-main'],{queryParams:{step:'three'}})
    }else if(id == 4){
      this.route.navigate(['/step-main'],{queryParams:{step:'four'}})
    }
  }
}
