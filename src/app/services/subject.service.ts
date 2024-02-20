import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private items:any=[]=[];
  subscribe(arg0: (value: boolean) => void) {
    throw new Error('Method not implemented.');
  }

  private ToggleStatus=new BehaviorSubject<boolean>(true)
showhideStatus=this.ToggleStatus.asObservable();

show(){
this.ToggleStatus.next(true)
}

hide(){
  this.ToggleStatus.next(false)
}

 sendData = new Subject<string>()
  sentDatatwo:any;

  constructor() { 
    this.sendData.subscribe((res:any)=>{
      this.sentDatatwo=JSON.stringify(res);
    })
    console.log(this.items,'items')
  }


  addtocart(item:any){
    this.items.push(item)
    alert(this.items)
    
  }

  removeiteems(i:any){
    this.items.splice(i,1)
  }

  returnItems(){
   return this.items
  }

  



  sendevent=new Subject<any>()
  cropedImage=new Subject<any>()
  sendsignatureCroped=new Subject<any>()
  sendbankcroped=new Subject<any>()
}
