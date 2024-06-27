import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
declare var Croppie: any;


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private croppie: any;

  urlsubject=new Subject<any>()
  cartSubject = new Subject<any>();
  receiveSubject = new Subject<any>();

  private ToggleStatus=new BehaviorSubject<boolean>(true)
showhideStatus=this.ToggleStatus.asObservable();


show(){
this.ToggleStatus.next(true)
}

hide(){
  this.ToggleStatus.next(false)
}

sentDatatwo:any;

  constructor(private http:HttpClient) { 
   
  }

  setCroppieImage(imageUrl: any) {
    console.log(imageUrl)
    this.croppie.bind({
      url: imageUrl,
    });
  }

  cropImage(): Promise<string> {
    return this.croppie.result('base64');
  }

  initializeCroppie() {
    this.croppie = new Croppie(document.getElementById('croppieContainer'), {
      viewport: { width: 200, height: 200 },
      boundary: { width: 300, height: 300 },
    });
  }


  addtocart(item:any){
    this.cartSubject.next(item);   
  }

  receiveId(id:any){
    this.receiveSubject.next(id)

  }




  sendStudentsData(data:any){
   return this.http.post("http://localhost:5500/students/add-students",data)
  }

  getAllstudents(){
    return this.http.get("http://localhost:5500/students/StudentsList")
  }
  
  delete(id:any){
    return this.http.delete(`http://localhost:5500/students/Deletestudents/${id}`)
  }

  singleid(id:any){
    return this.http.get(`http://localhost:5500/students/singleStudent/${id}`)
  }


  sendevent=new Subject<any>()
  cropedImage=new Subject<any>()
  sendsignatureCroped=new Subject<any>()
  sendbankcroped=new Subject<any>()



  sendreq(data:any){
   return this.http.post("sendreq",data)
  }

  seneread(id:any){
   return this.http.post("updatenotification",id)
  }

  getnotification(id:any){
    return this.http.post("notification",id)
   }


   sendnomineedetails(data:any){
    return this.http.post("sendNomineeDetails",data)
   }

   getnomineedetails(){
    return this.http.get("NomineeDetails")
   }

}
