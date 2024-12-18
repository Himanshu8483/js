// let arr = [Himanshu, 22, Rewa];      in array keys are not defined

// OBJECT: for key value pairs
let obj={
    name:"Himanshu",
    age:25,
    city:"Bhopal",
    name:"Him" ,     // key unique will overwrite upper-one

    welcome: function(){
        console.log(`Welcome ${this.name} to ${this.city} home`);
    },
    fruits:["Apple", "Mango", "Banana"]

}
obj.welcome();  // to call a function
console.log(obj.fruits[1]);
// console.log(arr[1]);    // array access
// console.log(obj.name);  // object access

// obj.email="himanshukushwahabkp@gmail.com";      // to insert data from outside
// console.log(obj);   // to see updated object

// delete obj.city;    // to delete data by key.name
// console.log(obj);

// obj.welcome();      // to call a function


// Destructuring of Objects
const student={name:"Himanshu", age:22, city:"Rewa"};
const {name, age}=student;
console.log(name);      // Himanshu
console.log(age);       // 22

// Spread Operator
const student1 = {name:"Himanshu", age:25, Marks:80};
const student2 = {city:"Rewa", grade:"A",Marks:90}
const combinedStdent = {...student1, ...student2};
console.log(combinedStdent);        // { name: 'Himanshu', age: 25, city: 'Rewa', grade: 'A' }


const arr1 = ["Himanshu", 25]
const arr2 = ["Rewa", "A"]
const combined = [...arr1, ...arr2];
console.log(combined);          // [ 'Himanshu', 25, 'Rewa', 'A' ]

const array1=[1,2,3];
const combinedArray=[0, ...array1, 4];
console.log(combinedArray);     // [ 0, 1, 2, 3, 4 ]