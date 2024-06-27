import { Component } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-practice-on-filter',
  templateUrl: './practice-on-filter.component.html',
  styleUrls: ['./practice-on-filter.component.scss']
})
export class PracticeOnFilterComponent {

  products = [
    { id: 1, name: 'Product A', category: 'Electronic', price: 100 },
    { id: 2, name: 'Product B', category: 'Books', price: 30 },
    { id: 3, name: 'Product C', category: 'Electronics', price: 800 },
    { id: 4, name: 'Product D', category: 'Clothing', price: 50 }
  ];

  orders = [
    { id: 1, customer: { name: 'John', city: 'New York' }, total: 100 },
    { id: 2, customer: { name: 'Jane', city: 'Los Angeles' }, total: 150 },
    { id: 3, customer: { name: 'Doe', city: 'Chicago' }, total: 200 }
  ];

  data = [10, 20, '30', '40', 50, '60'];

getdata = [
    { id: 1, category: 'A', status: 'active' },
    { id: 2, category: 'B', status: 'inactive' },
    { id: 3, category: 'A', status: 'active' },
    { id: 4, category: 'C', status: 'inactive' },
    { id: 5, category: 'B', status: 'active' }
  ];

 events = [
    { id: 1, name: 'Event A', date: new Date('2024-04-10') },
    { id: 2, name: 'Event B', date: new Date('2024-05-10') },
    { id: 3, name: 'Event C', date: new Date('2024-06-20') }
  ];

agecalculation = [
    { id: 1, details: { name: 'John', age: 30 } },
    { id: 2, details: { name: 'Jane', age: 25 } },
    { id: 3, details: { name: 'Doe', age: 40 } }
  ];

getproducts = [
    { id: 1, name: 'Product A', category: 'Electronics', price: 500 },
    { id: 2, name: 'Product B', category: 'Books', price: 30 },
    { id: 3, name: 'Product C', category: 'Electronics', price: 800 },
    { id: 4, name: 'Product D', category: 'Clothing', price: 50 }
  ];  
  constructor(){

    const filterProducts = (items:any, category:any, minPrice:any, maxPrice:any) => {
      return items.filter((product:any) => 
        product.category === category || product.price <=10 || product.price >=900
      );
    };
    
    const filteredElectronics = filterProducts(this.products, 'Electronic', 30, 1000);
    console.log(filteredElectronics,'filer items');


    const fileroreder=this.orders.filter((a:any)=>a.customer.city === "New York" || a.total >= 200)
    console.log(fileroreder,'filter orders')

    const numbersOnly = this.data.filter(item => typeof item === 'number');
    console.log(numbersOnly); // Output: [10, 20, 50]

   
    const activeCategories = ['A', 'B'];
    const getactivestatus=this.getdata.filter((a:any)=>activeCategories.includes(a.category) && a.status === 'inactive')
    console.log(getactivestatus,'get active status')


    const currentDate = new Date();
    const upcomingEvents = this.events.filter(event => event.date <= currentDate);
    console.log(upcomingEvents,'today data filter');

    const age=this.agecalculation.filter((a:any)=>a.details.age >= 25 && a.details.name.startsWith('J'))
    console.log(age,'age')




    const filters = {
      category: 'Electronics',
      priceRange: [400, 900]
    };
    
    const filteredProducts = this.getproducts.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
  );
  
  console.log(filteredProducts, 'filtered products');

  }
}
