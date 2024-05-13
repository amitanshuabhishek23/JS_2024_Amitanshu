
"use strict"; // to make sure we not miss any keyword 

console.log("Hello Word 2");
console.log('File 2 JS');
console.log(`File Backtick 2 JS`); // String 

//Comments 

// Console.log can print something on console.  Shortcut command + / 

// Variable dec and use

var firstName = "Amitanshu"  // case sensitive 

console.log(firstName) // print Amitanshu

//change variable value 

 var firstname = "Abhishek"; 

console.log(firstname)  // print Abhishek 


var value1 = 4 ;

console.log(value1 ** 4) // We can do math in console log  

// we can use $ and _ score while dec variable 

var $a1 = 8; 
var _ae =4;

console.log($a1);
console.log(_ae);

// Convention Using Variable

// start with the small letter and use camelcase 

// Let and Var Scope 


var firstName1 = "Amitanshu" ; 
firstName1 = "Abhishek";
// var firstName1 = "Abhishek"; posssible the in case of var 
console.log(firstName1);  


let firstName2 = "Amitanshu" ; 
// let firstName2 = "Abhishek"; Not possible in let 
firstName2 = "Abhishek";
console.log(firstName2);   

// Declare constant in Javascript 

const pi = 3.14;
// pi = 3.15;  TypeError: Assignment to constant variable.

// const pi = 3.15;  SyntaxError: Identifier 'pi' has already been 

console.log(pi);
console.log(pi*2*2); 


// String Indexing 

// A b h i s h e k 
// 0 1 2 3 4 5 6 7 

let firstName4="Amitanshu"  // No error 

console.log(firstName4[0])

//length of string 

console.log(firstName4.length)


//firstname.length  
// last Index : length - 1 

console.log(firstName4[firstName4.length-1]) // Space are included  


// String Methods  

//trim()

let firstName3="           Amitanshu         "

console.log(firstName3.length)
// firstName3.trim();  It won't work as string is immutable 
firstName3=firstName3.trim(); // 9 Space removed  
console.log(firstName3.length)


// toUpperCase() 

firstName3=firstName3.toUpperCase();
console.log(firstName3)
// toLowerCase()


firstName3=firstName3.toLowerCase();
console.log(firstName3)

//slice 

//start index 
//end index 



let firstName5="Amitanshu" ;

let myname=firstName5.slice(1,5);

console.log(myname);
































