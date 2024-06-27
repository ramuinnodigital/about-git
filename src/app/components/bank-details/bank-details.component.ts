import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent {

  search:any;
  searchbranch:any;
  show:boolean=true;
  showbranch:boolean=true;
  searchifsc:any;
  checkifsce:boolean=true;
  showdetailsbox:boolean=false;

  bankdetails=[
    {
      bankname:'indian bank',
      branch:'kakinada',
      ifcs:'IDIB000C150',
      address:'CHITRADA'
    },
    {
      bankname:'state of india',
      branch:'pithapuram',
      ifcs:'SBIN0071233',
      address:'FIRSTFLOOR,AMMANBUILDINGS,GOPALAPURAM,MANNURPO,POLLACHITALUK,COIMBATOREDIST,TAMILNADU-642005'
    },
    {
      bankname:'union bank',
      branch:'hyderabad',
      ifcs:' UBIN0920193',
      address:'FIRST FLOOR, MOORUSAVORMATH PRESS BLDG, NEW COTTON MKT RD, HUBLI-580029'
    },
    {
      bankname:'icici bank',
      branch:'vijayawada',
      ifcs:' ICIC00TTCBL',
      address:' MAIN OFFICE 23 G.CAR STREET TIRUPATI AP'
    },
    {
      bankname:'axis bank',
      branch:'vizag',
      ifcs:' UTIB0VNSBL1',
      address:'AT PO PUSAD, TAH PUSAD 445204'
    }
  ]
  filterbranch: any;
  fiterifsccode:any;
  selectedetails: any;
  progressPercentage: number = 0;

  constructor(){
    console.log(this.bankdetails)

   
  }

  check(data:any){
    if(this.search){
      this.search=data.bankname;
      this.show = false;
    }
    
    this.filterbranch=this.bankdetails.filter((a:any)=>a.bankname == data.bankname)
   
   
  }

  checkbranch(data:any){
    this.searchbranch=data.branch
    if(this.searchbranch){
      this.showbranch=false;
    }
    if(data){
      this.selectedetails=data;
      this.showdetailsbox=true;
    }

  
  }

  myentervalue(event:any){
    if(event.target.value){
      this.show=true;
    }
   
  }


  checkifsc(data:any){
    this.searchifsc=data.ifcs;
    this.checkifsce=false;

    if(data){
      this.selectedetails=data;
      this.showdetailsbox=true;
    }
  }

  edit(){
    this.showdetailsbox=false;
    this.selectedetails='';
    this.searchifsc='';
    this.searchbranch='';
    this.filterbranch='';
    this.search='';

  }
}
