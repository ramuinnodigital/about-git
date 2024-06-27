import { Component } from '@angular/core';

@Component({
  selector: 'app-pratice-on-array',
  templateUrl: './pratice-on-array.component.html',
  styleUrls: ['./pratice-on-array.component.scss']
})
export class PraticeOnArrayComponent {

  arrayOfObjects = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 3, name: 'Object 3' }
  ];

products = [
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 40 }
  ];

people = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Doe', age: 40, city: 'Chicago' }
  ];

words = ['apple', 'banana', 'cherry'];
  
 
  
  
 
  

  constructor() {
    
    this.updateArrayWithId(3);
  
    const formattedProducts = this.products.map((product:any) => ({
      id: product.id,
      label: `${product.name} - $${product.price}`
    }));
    console.log(formattedProducts,'formatted products');


    const namesAndAges = this.people.map(({ name, age }) => `${name} (${age} years old)`);
    console.log(namesAndAges,'names and ages');

    const addindex=this.words.map((a:any,index:any)=>`${a} (${index+1})`)
    console.log(addindex,'add index')
}


  updateArrayWithId(arrayid:any){
    const findindexvalu=this.arrayOfObjects.findIndex((a:any)=>a.id == arrayid)
    if(findindexvalu !== -1){
      this.arrayOfObjects.splice(findindexvalu,1)
    }
  }
}
