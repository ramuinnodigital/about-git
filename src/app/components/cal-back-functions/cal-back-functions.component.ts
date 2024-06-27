import { Component } from '@angular/core';

@Component({
  selector: 'app-cal-back-functions',
  templateUrl: './cal-back-functions.component.html',
  styleUrls: ['./cal-back-functions.component.scss']
})
export class CalBackFunctionsComponent {


  constructor(){}

  ngOnInit(){
 
  }
 

 
 
  fetchfunction(){
  return new Promise((resove,error)=>{
    const success = Math.random() < 0.5;
    if(success){
      resove('data fetched successfully')
    }else{
      error('something went wrong')
    }
   })
  }


 async check(){
    // try{
    //   let data=this.fetchfunction();
    //   console.log(data)
    // }catch (error){
    //   console.log(error)
    // }
    try{
      const mydat=await this.getsuceessmessage();
      console.log(mydat)
    }catch(error){
      console.log(error)
    }
    
  }



  getsuceessmessage(){
    const createStudent = async (req:any, res:any): Promise<void> => {
      if(10 > 5){
        try {
       req('yes')
      } catch (error) {
        res('no')
      }
      }
      
  };
  return createStudent
  }
  
  }
  

