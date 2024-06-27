import { Component } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.scss']
})
export class ShowHideComponent {
  password:any;
  showPassword:boolean=false;


  filterone:boolean=false;
  filtertwo:boolean=false;
  filterthree:boolean=false;
  filterfour:boolean=false;
  filterfive:boolean=false;

  maxStars: number = 5;
  rating= 4;
  stars: any[] = [];


  products = [
    { name: 'samsung', price: 100 ,rating:2.2},
    {name:'samsung',price:55.99,rating:2.2},
    { name: 'samsung', price: 109.95,rating:3},
    { name: 'oppo', price: 200 ,rating:0},
    { name: 'oppo', price: 320 ,rating:5},
    { name: 'apple', price: 300,rating:5 },
    { name: 'lenovo', price: 400 ,rating:2.2},
    { name: 'lenovo', price: 450 ,rating:5},
    { name: 'lenovo', price: 480 ,rating:1},
    { name: 'samsung', price: 500 ,rating:5},
    { name: 'oppo', price: 220 ,rating:5},
    { name: 'apple', price: 280 ,rating:5},
    { name: 'apple', price: 460 ,rating:3.5},
    { name: 'nokia', price: 500 ,rating:5},
    { name: 'oppo', price: 290 ,rating:3},
    { name: 'apple', price: 350 ,rating:5},
    { name: 'lenovo', price: 410 ,rating:2},
    { name: 'nokia', price: 540,rating:4.5},
    { name: 'nokia', price: 530 ,rating:5}
  ];
  sendrating: any;
Math: any;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

constructor(){
  this.stars = Array(this.maxStars).fill(0).map((x, i) => i + 1);
 this.sendrating=this.rating


 
}



  getfilter(){
   return this.products.filter((a:any)=>{
      if(this.filterone && a.price <= 100){
        return true;
      }
      if(this.filtertwo && a.price > 100 && a.price <=200){
        return true;
      }
      if(this.filterthree && a.price > 200 && a.price <=300){
        return true;
      }
      if(this.filterfour && a.price > 300 && a.price <=400){
        return true;
      }
      if(this.filterfive && a.price > 400 && a.price <=500){
        return true
      }
      return false;
    })
  }

  // setRating(rating: number): void {
  //   alert('working')
  //   this.rating = rating;
  // }

 
}
