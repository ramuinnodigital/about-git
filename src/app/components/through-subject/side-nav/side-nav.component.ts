import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  cartItmes:any=[]

  items = [
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 1 },
    { id: 3, name: 'Item 3', price: 30, quantity: 1 },
    { id: 4, name: 'Item 4', price: 40, quantity: 1 }
  ];
  totalvalue: any;
  myy: any;

  


  constructor(private subject:SubjectService){
    this.cartItmes=this.subject.returnItems()
    console.log(this.cartItmes,'cartitems')

  }

  removeFromCart(i:any){
    this.subject.removeiteems(i)
    console.log('')
  }

  getTotalPrice() {
    let totalvalue=0
  // this.items.forEach((item:any)=>{totalvalue += item.price * item.quantity
  //   })
  this.items.forEach((a)=>totalvalue += (a.price * a.quantity))
  
    return totalvalue

   
    // return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  }

  calculateTotalAmount(){
    let amount=0
    this.items.forEach((a)=>amount += a.price * a.quantity)
    return amount

  }
  
myquantiey=1
  incrementQuantity(itemmmm:any) {
    this.myquantiey++
    itemmmm.quantity++;
  }

  decrementQuantity(item:any) {
    if (item.quantity > 1 || this.myquantiey > 1) {
      this.myquantiey--;
      item.quantity--;
    }
  }



}
