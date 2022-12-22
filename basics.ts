// // Variables

// let name: string;
// let name: unknown;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];

// // union

// let age: string | number;

// let role: [number, string];

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Santanu",
//   age: 10,
// };
// let person2: Person = {
//   name: "Santanu",
// };

// let lotsOfPersons: Person[];

// // function

// function printName(name: string) {
//   console.log(name);
// }

// printName("Santanu");

// let printName : Function ;

// let printName: (name: string) => void ;
// let printName: (name: string) => never ;
// let printName: (name: string) => string ;

// Type and Interface

// type Person = {
//   name: string;
//   age?: number;
// };

// interface Person {
//   name: string;
//   age?: number;
// }

// type X = {
//   a: string;
//   b: string;
// };

// inheritance or extend

// type Y = X & {
//   c: string;
//   d: string;
// };

// let y: Y = {
//   a: "",
//   b: "",
//   c: "",
//   d: "",
// };

interface Person {
    name: string;
    age?: number;
  }
  
  interface Guy extends Person {
    profession: string;
  }
  
  let myGuy: Guy = {
    name: "Santanu Ghosh",
    age: 10,
    profession: "Web dev",
  };
  
  console.log(myGuy);
  
  type X = Person & {
    a: string;
    b: string;
  };
  
  interface Y extends Person {
    c: string;
    d: string;
  }
  