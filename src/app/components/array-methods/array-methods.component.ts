import { Component } from '@angular/core';

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})
export class ArrayMethodsComponent {

  constructor(){
    let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']



let fruits2 = ['apple', 'banana', 'orange'];
let lastFruit = fruits2.pop();
console.log(lastFruit); // Output: 'orange'
console.log(fruits2); // Output: ['apple', 'banana']


let fruits3 = ['apple', 'banana', 'orange'];
let firstFruit = fruits3.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits3); // Output: ['banana', 'orange']



let fruits4 = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits4); // Output: ['apple', 'banana', 'orange']


let numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(function(num) {
  console.log(num * 2);
});
// Output:
// 2
// 4
// 6
// 8
// 10


let numbers2 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers2.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



let fruits5 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let citrus = fruits5.slice(2, 4);
console.log(citrus); // Output: ['orange', 'grape']



let fruits6 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruits6.splice(2, 1, 'mango', 'peach');
console.log(fruits6); // Output: ['apple', 'banana', 'mango', 'peach', 'grape', 'kiwi']



let fruits7 = ['apple', 'banana'];
let vegetables = ['carrot', 'potato'];
let food = fruits7.concat(vegetables);
console.log(food); // Output: ['apple', 'banana', 'carrot', 'potato']



let fruits8 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let index = fruits8.indexOf('orange');
console.log(index); // Output: 2


let fruits9 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let hasOrange = fruits9.includes('orange');
console.log(hasOrange); // Output: true


let numbers3 = [1, 2, 3, 4, 5];
let allEven = numbers3.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven); // Output: false


let numbers4 = [1, 2, 3, 4, 5];
let evenNumbers = numbers4.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]



let numbers5 = [1, 2, 3, 4, 5];
let evenNumber = numbers5.find(function(num) {
  return num % 2 === 0;
});
console.log(evenNumber); // Output: 2



let numbers6 = [1, 2, 3, 4, 5];
let sum = numbers6.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log(sum); // Output: 15


let fruits10 = ['banana', 'apple', 'orange', 'grape'];
fruits10.sort();
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']



let numbers7 = [1, 2, 3, 4, 5];
numbers7.reverse();
console.log(numbers7); // Output: [5, 4, 3, 2, 1]


let fruits11 = ['apple', 'banana', 'orange'];
let result = fruits11.join(', ');
console.log(result); // Output: 'apple, banana, orange'


let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // Output: true


let fruits12 = ['apple', 'banana', 'orange'];
let values = fruits12.values();
for (let value of values) {
  console.log(value); // Output: 'apple', 'banana', 'orange'
}

let fruits13 = ['apple', 'banana', 'orange'];
let keys = fruits13.keys();
for (let key of keys) {
  console.log(key); // Output: 0, 1, 2
}



  }

}
