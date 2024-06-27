import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordMatchValidator } from './PasswordMatchValidator';



@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent {

  AllCity:any=[
    {name:"hyderabad",image:"https://thumbs.dreamstime.com/b/charminar-hyderabad-india-view-icon-builiding-42242588.jpg"},
    {name:"kakinada",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6JyDeD6V2khnKymz3aLo58Utfev9xOQ1nb0yZ2UOBw&s"},
    {name:"vizag",image:"https://www.shutterstock.com/image-photo/view-visakhapatnam-dolphins-nose-visakha-260nw-1095079250.jpg"},
    {name:"vijayawada",image:"https://t3.ftcdn.net/jpg/00/84/85/50/360_F_84855024_cMNQz2iVjw8Pe8cDKgToDPcWYMRnCVee.jpg"}
  ]

  matrix:any= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10,11,12]
  ];

  selectedname: any;
  selectedimage: any;
  minutes:any;
  seconds:any;
  interval:any;
  passwordForm!: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder){
    this.starttimer()
    const array = [1, 2, 3, 4, 5];
    const doubledArray = array.reduce((item,total) => total+item,0);
    console.log(doubledArray);
    
  }
  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['',]
    }, {
      validators: PasswordMatchValidator('password', 'confirmPassword')
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.passwordForm.controls;
  }

  selectName(cityname:any){
  this.selectedname=cityname.target.value
  const city=this.AllCity.find((a:any)=>a.name === this.selectedname)
  this.selectedimage=city.image
  const cityIndex = this.AllCity.findIndex((city:any) => city.name === 'kakinada');
 if(cityIndex == 1){
  this.AllCity[cityIndex].image = "https://t3.ftcdn.net/jpg/00/84/85/50/360_F_84855024_cMNQz2iVjw8Pe8cDKgToDPcWYMRnCVee.jpg";
 }
  }

  starttimer(){
    this.minutes = 1;
    this.seconds = 0;

    this.interval=setInterval(()=>{
      if(this.minutes === 0 && this.seconds === 0){
        clearInterval(this.interval)
      }else{
        if(this.seconds == 0){
          this.minutes--;
          this.seconds=59
        }else{
          this.seconds--;
        }
      }
      
    },1000)
  }

  selectOption(index:number){
   alert('Index value: ' + index)
   console.log(index,'index value')
  }
 
  submitForm(){
this.submitted=true;
  }
}
