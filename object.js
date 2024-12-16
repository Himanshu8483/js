// let arr = [Himanshu, 22, Rewa];
// Object
let obj={
    name:"Himanshu",
    age:25,
    city:"Bhopal",
    name:"Him" ,     // key unique will overwrite upper-one

    welcome: function(){
        console.log("Welcome to my home");
    }
}
// console.log(arr[1]);    // array access
console.log(obj.name);  // object acces

obj.email="himanshukushwahabkp@gmail.com";      // to insert data from outside
console.log(obj);   // to see updated object

delete obj.city;    // to delete data by key.name
console.log(obj);

obj.welcome();      // to call a function