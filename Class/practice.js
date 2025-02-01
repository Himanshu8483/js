// Narrow and Wide Scopes (Variable Scope in JavaScript):
// Scope means where a variable can be accessed in your code.

// Narrow Scope:
// Example: A variable inside a function is narrowly scoped to that function.
function greet() {
  let message = 'Hello!';
  console.log(message); // Works here
}
console.log(message); // Error! 'message' is not accessible outside the function

// Wide Scope:
// Variables are available in a larger part of your code.
// Example: A global variable can be accessed from anywhere.
let message = 'Hello!';
function greet() {
  console.log(message); // Accessible inside the function
}
console.log(message); // Accessible outside the function too


// 🔵 Types of Binding:
// ✅ 1. Implicit Binding (Automatic)
// When you call a function inside an object, this automatically refers to that object.
// const person = {
//     name: 'John',
//     greet() {
//       console.log(`Hello, ${this.name}`);
//     }
//   };
//   person.greet(); // Output: Hello, John
  
// ✅ 2. Explicit Binding (Manual)
// You can manually tell a function what this should refer to using call(), apply(), or bind().
//   const person = {
//     name: 'Alice'
//   };
  
//   function greet() {
//     console.log(`Hello, ${this.name}`);
//   }
  
//   greet.call(person); // Output: Hello, Alice
  
// ✅ 3. Arrow Function Binding
// Arrow functions don’t have their own this. They take this from the surrounding code.
// this doesn’t refer to person! It inherits this from the global scope, where name is not defined.
const person = {
    name: 'Mike',
    greet: () => {
      console.log(`Hello, ${this.name}`);
    }
  };
  person.greet(); // Output: Hello, undefined
  