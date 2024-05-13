console.log(typeof "Hello Word"); 
console.log("Hello Word");

// typeof Operator 

let age =22 ; 
let firstName = "Amitanshu"; 
console.log(typeof age);
console.log(typeof firstName); 

// Convert Number to String 
console.log(typeof age + " ") // number
console.log(typeof (age + " ")) //  string -- add a empty string an add the brackets 

// convert string to number 
let myStr = "34";  // String
console.log(typeof myStr) // String
myStr = +"34"; // Add a + sign before the string to convert it in the number format 
console.log(typeof myStr)  // number
let age1=18;
age = String(age); 
console.log(typeof age ) // string 
let age2="18";
age2 = Number(age2); 
console.log(typeof age2 ) // number 

// String Concatenation 
let string1="Amitanshu"; 
let string2="Abhishek"; 
let fullname = string1+" "+string2; 
console.log(fullname); 
let string3="17"; 
let string4="10"; 
let fullname1 = +string3+ +string4; 
let fullname2 = string3+ string4; 
console.log(fullname1); // 27
console.log(fullname2); // 1710 
let about_me = " My name is " + fullname + " and my age is " + fullname1;
console.log(about_me);

// Using template String 
let about_me1 = `My name is ${fullname} and my age is ${fullname1}` 
console.log(about_me1);  

// What us undefined in JS ?? 

let firstName7;
console.log(typeof firstName7) // undefined -- Same applies with VAR  // undefined   
firstName7="Amitanshu" ; 
console.log(typeof firstName7,firstName7 ) // string Amitanshu

// const firstName8;  // Not possible with const
// console.log(typeof firstName8) // SyntaxError: Missing initializer in const declaration



// What us null  in JS ?? 

let myVar = null;
console.log(typeof myVar , myVar) // object null 

console.log(typeof myVar) // object data type  its s type of bug which can't be fixed as lots of code written

myVar="Amitanshu";
console.log(typeof myVar , myVar) // string 


//BigInt 

let number1=1234324324234324234242525254; 
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991 
console.log(number1) // 1.2343243242343242e+27 

let number2=BigInt(1234324324234324234242525254); // 
let number3=1224234324325525n;
console.log(number3) // 1224234324325525n 
console.log(number2) // 1234324324234324208617783296n
console.log(number2+number3); // 1234324324235548442942108821n 

// console.log(number2+age2); // TypeError: Cannot mix BigInt and other types, use explicit conversions as age 2 is the integer type. 

// BOOLEAN AND COMPARISION OPERATOR 

let num1 =5; 
let num2  =7;  
let num3  ="5";  

console.log(num1>num2); // false
console.log(num1<num2); // true
console.log(num1<=num2); // true
console.log(num1>=num2); // false 

// WITH RESPECT TO STRING 

let string11 = "5"; 
let string12 = 7;  
let string13 = "7";   
let string14 = "7";   

console.log(string11 == string13 ) // false  
console.log(string14 == string13 ) // true
console.log(string12 == string13 ) // true -- It will only check the value not with the data type.  

// === VS == 
console.log(string12 === string13 ) // true -- It will only check the value and data type.  

// != vs !==


console.log(num1!=num2); // true
console.log(num1!=num3); // false 
console.log(num1!==num3); // true  -- It checks the data type  
console.log(num1!== num2); // true

// TRUTHY AND FALSY VALUES 

// --- FAlSY VALUES 

// false 
// " "
// null 
// undefined 
// 0    