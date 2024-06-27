import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {

  // alldata=[
  //   {
  //     id:1,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:2,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:3,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:4,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:5,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:6,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:7,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:8,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:9,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:10,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:11,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:11,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:12,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:13,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:14,
  //     name:'suresh',
  //     city:'kakinada'
  //   },
  //   {
  //     id:15,
  //     name:'suresh',
  //     city:'kakinada'
  //   }

  // ]

  buttonarray:any[]=[]
  dButtonarray:any[]=[]

  currentPage=1;
  pagesize=5 ;
  loopdata: any;
  totalpages:any;
  defaultprice=2000;
  total=0;
  dicount!: number;
  applycoupon:any;
  alldata:any[]=[]

  constructor(private login:LoginService){
    this.login.get().subscribe((res:any)=>{
      this.alldata=res
    this.totalpages=Math.ceil(this.alldata.length / this.pagesize)
    this.buttonarray = Array.from(new Array(this.totalpages), (x,i) => i+1);
    this.updatecalcultion()
  })
}



  updatecalcultion(){
   const startindex=(this.currentPage -1) * this.pagesize;
   const endindex=(startindex + this.pagesize)
  this.loopdata=this.alldata.slice(startindex,endindex);
  // this.dButtonarray = [];
  // this.dButtonarray = this.buttonarray.slice(this.currentPage - 1, this.currentPage + 9)
  }

  previews(){
    if(this.currentPage > 1){
      this.currentPage --;
      this.updatecalcultion();
    }
  }

  next(){
    if(this.currentPage < this.totalpages){
      this.currentPage ++;
      this.updatecalcultion();
    }
  }

  sendnumber(number:any){

   this.currentPage=number;
   this.updatecalcultion();
  }

  apply(value: any){
if(value == 'RA12M'){
  this.dicount = ((this.defaultprice/ 100) * 50); 
  this.total = this.defaultprice - this.dicount;
}
  }

}
