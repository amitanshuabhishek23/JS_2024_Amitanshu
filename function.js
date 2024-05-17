console.log("Hi Functions");

// Function in JavaScript

// -- Function Declaration ------------------------------------// 
function singHappyBirthday() {
  console.log("Happy Birthady To You..!!");
}

function Add() {
  // console.log(2+5);
  return 2 + 4;
}

singHappyBirthday(); // Calling function
console.log(Add()); // 6
const a = Add();
console.log(a); //6

function sum(a, b) {
  return a + b;
}

console.log(sum(8, 8)); // 16
console.log(sum(8 + 8)); // NaN Not a Number
console.log(sum()); // NaN Not a Number

// OR EVEN CHECK

function isEven(num) {
  // if(num%2==0){
  //     return true;
  // }
  // // else {
  // //     faslse
  // // }
  // return false;

  return num % 2 === 0;
}
console.log(isEven());

function firstChart(anyString) {
  return console.log(anyString[0]);
}
firstChart("Amitansu");

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return console.log(i);
    }
  }
  return console.log(-1);
}
const myArray = [1, 2, 3, 4, 5, 6];
findTarget(myArray, 3);

// -- Function Expresssion ------------------------------------// 

const HBD = function () {
  console.log("Happy Birthady To You..!!");
};

//   HBD = function () {
//     console.log("Happy  To You..!!"); // TypeError: Assignment to constant variable. if we use let then no error
//   }

HBD();

// -- arrow function ------------------------------------// 

const AHBD = () => {
  console.log("Arrow Happy Birthady To You..!!");
};

AHBD();

const AfindTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return console.log(i);
    }
  }
  return console.log(-1);
};

AfindTarget(myArray, 3); // 2

const firstChart1 = (anyString) => {
  return console.log(anyString[0]); // One Parameter may not have braket ()
};

const isEven1 = (num) => console.log(num % 2 === 0);
isEven1(3); // false

const firstChart2 = (anyString) => console.log(anyString[0]); // One Parameter may not have braket ()
firstChart2("Amitannsu");

// Hoisting ------------------------------------// 

// Can be done with function declartion

hello(); // I am possible because of hoisting concepts

function hello() {
  console.log("I am possible because of hoisting concepts"); // Not possible with var , let , const
}

// function inside function
function app() {
  const myF = () => console.log("Hello from MyFunc");
  const addTwo = (n1, n2) => console.log(n1 + n2);
  const mul = (n1, n2) => console.log(n1 * n2);
  console.log("Inside APP");
  myF();
  addTwo(2, 3);
  mul(3, 4);
}
app();

//Lexical Scope ------------------------------------// 

const myVar51 = "lexical_scope_value_myFunc";

function myApp() {
  // const myVar51 = "value_myApp";

  function myFunc() {
    // const myVar51 = "value_myFunc";
    console.log(myVar51);
  }
  console.log(myVar51);
  myFunc();
}

myApp();

// Block Scope Vs Function Scope
// Let and const are block scope  {let and const are used within these curly braces} var can be used any where
//var is function scope   fun() { can ve used any where}

// Default Parameters

function addTwoD(a, b) {
  if (typeof b === "undefined") {
    b = 0;
  }
  return a + b;
}
console.log(addTwoD(4));

function addTwoDP(a, b=0) {
    return a + b;
  }
  console.log(addTwoDP(4)); //4 

  // Rest Parameters 

  function myFuncR(a,b,...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `,c); // (6) [5, 6, 7, 8, 9, 2] // Array
    console.log(`c is ${c}`); // c is 5,6,7,8,9,2  // String 
  }

  myFuncR(3,4,5,6,7,8,9,2)


  function adAll(...a){
    let sum =0; 
        for (let i of a) { // of means value and in means index 
            sum = sum + i;
            i++  
            }
 return  sum ;      
    }

    console.log(adAll(3,4,5,6,7,8,9,2)) 

//PARAMETER DESTRUCTURING  ------------------------------------// 

const person23 ={
    firstName23: "Amitanshu " , 
    gender:"male"
}

// function printDetails(obj){
//     console.log(obj.firstName23)
//     console.log(obj.gender)
//}


function printDetails({firstName23,gender,age}){
    console.log(firstName23)
    console.log(gender)
    console.log(age) // undefined
}
printDetails(person23);  

// CALLBACK FUNCTIONS ------------------------------------// 

 function neddToCAll (){
    console.log("Inside my neddToCAll") 
 }

 function mainFunction(callback)
  {
    console.log("Hi I am main function" , callback)
    callback();
 }

 mainFunction(neddToCAll); //Inside my neddToCAll