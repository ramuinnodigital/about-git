import { Component } from '@angular/core';

@Component({
  selector: 'app-string-methods',
  templateUrl: './string-methods.component.html',
  styleUrls: ['./string-methods.component.scss']
})
export class StringMethodsComponent {
  myvlue:any;

  constructor(){
    let str = "Hello";
console.log(str.charAt(0)); // Output: "H"

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Output: "Hello World"


let removeSpace = 'Hello World ram';
const ramu = removeSpace.replace(/\s/g, ''); // This will remove all spaces from the string
console.log(ramu);

const LastIndexOf = "Hello World";
console.log(LastIndexOf.lastIndexOf("o")); // Output: 7
console.log(LastIndexOf.lastIndexOf("z")); // Output: -1


const repeat = "Hello ";
console.log(repeat.repeat(3)); // Output: "Hello Hello Hello "

const match = "Hello World";
console.log(match.match(/o/g)); // Output: ["o", "o"]


const slice = "Hello World";
console.log(slice.slice(6));    // Output: "World"
console.log(slice.slice(0, 5)); // Output: "Hello"


let strItem = "Hello World";
console.log(strItem.indexOf("o")); // Output: 4


let strItem2 = "Hello World";
console.log(strItem2.substring(0, 5)); // Output: "Hello"


let strItem3 = "Hello World";
console.log(strItem3.toUpperCase()); // Output: "HELLO WORLD"
console.log(strItem3.toLowerCase()); // Output: "hello world"


let strItem4 = "Hello World";
console.log(strItem4.replace("World", "Universe")); // Output: "Hello Universe"


let strItem5 = "apple,orange,banana";
let fruits = strItem5.split(",");
console.log(fruits); // Output: ["apple", "orange", "banana"]


let strItem6 = "Hello World";
console.log(strItem6.startsWith("Hello")); // Output: true


let strItem7 = "Hello World";
console.log(strItem7.endsWith("World")); // Output: true

let ram='Hello/World'
if(ram.includes('/')){
  this.myvlue=ram.split('/')[1]
  console.log(this.myvlue)

 
}
else{
  
}



  }

  
}
