// Intro to Arrays  
    // --- Ordered Collection of iteam  
    let fruits =["apple","mango","grapes"];
    console.log(fruits[0]); 
    // let mixed =["1","2",null, undefined,"string","mango",string]
    // console.log(mixed[6]); // Uncaught ReferenceError: string is not defined 
    let mixed =["1","2",null, undefined,"string","mango"] // Any data type can be stored in the Array 
    console.log(mixed[2]); // null 
    console.log(fruits); // ['apple', 'mango', 'grapes']
    fruits[1]="banana";  // Arrays are mututable in nature 
    console.log(fruits); // ['apple', 'banana', 'grapes'] 

// Reference Type [Obejct]
    console.log(typeof fruits); // object
    let obj ={};  console.log(typeof obj) // object 
    console.log(Array.isArray(fruits)) // true Use Array.isArray to see if object type is array or not 

// Array PUSH and POP 
    
    console.log(fruits);
    fruits.push("chiku"); // ['apple', 'banana', 'grapes']  
    console.log(fruits); //  ['apple', 'banana', 'grapes', 'chiku'] at the last 
    let poppedfruit = fruits.pop();  // It returns the last element 
    // console.log(fruits.pop()); // grapes 
    console.log(fruits); //['apple', 'banana', 'grapes']   
    console.log(`Pop will push out the last elelment of the array i.e ${poppedfruit}`)  

    //---- UNSHIFT  To add the elememt at the 0th Index 

    fruits.unshift("Chiku");
    console.log(fruits); // ['Chiku', 'apple', 'banana', 'grapes']
    fruits.unshift("Chikki");
    console.log(fruits); // ['Chikki', 'Chiku', 'apple', 'banana', 'grapes'] 

    //--- shift() To remove the element from the 0th index and return the same 
    fruits.shift("Chiku"); 
    console.log(fruits);  // ['Chiku', 'apple', 'banana', 'grapes'] 

    // -- WITH RESPECT TO PERFORMANCE PUSH AND POP IS MUCH FASTER THAN SHIFT AND UNSHIFT -- //  


// For Loop In Array 

console.log(fruits); // ['Chiku', 'apple', 'banana', 'grapes']

console.log(fruits.length); 
console.log(fruits[fruits.length-1]); // Last Index  

let fruits2=[]
for (i=0 ; i<fruits.length;i++)
    {
        fruits2.push(fruits[i].toUpperCase())
       

    }
    console.log(fruits2);

// ARRAY WITH CONST KEYWORD  -- Mostly used by the devlopers 
// No address change was done as in stack memory still has the same ponter to the heap memory.

const fruit =["apple","banana"];  // heap memory add 0x11
console.log(fruit);
fruit.push("oragane")
console.log(fruit); // WHY ??   No address change was done as in stack memory still has the same ponter to the heap memory.

// ARRAY FOR WHILE 

const fruit1 = ['Chiku', 'apple', 'banana', 'grapes'] ;
let i5 =0; 
const fruitd = [];
while(i5 < fruit1.length)
    {
        fruitd.push(fruit1[i5].toUpperCase());
        i5++;
    }
console.log(fruitd);

// for of loop in  Array 
const ff = ['Chiku', 'apple', 'banana', 'grapes'] ; 

for (let ff1 of ff)
    {
        console.log(ff1.toUpperCase()) ; 

    }


// for in loop in  Array 

const fruitss = ['Chiku', 'apple', 'banana', 'grapes'] ; 

for (let index in fruitss) {
    console.log(index); // will frint index 
    console.log(fruitss[index]); 
}

// ARRAY DESTRUCTING 

const myArray = ["value1" , "value2" , "value4" ]; 

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];



let [ myvar1 , myvar2,myvar3 ] = myArray; 
// const [ myvar1 , myvar2 ] = myArray;  // const cant be changed 
myvar1="value_changed"
console.log(myvar1);
console.log(myvar2);
console.log(myvar3);  // undefined



// let [ myvar1 , ,  myvar2 ] = myArray; // skip 
// // const [ myvar1 , myvar2 ] = myArray;  // const cant be changed 
// myvar1="value_changed"
// console.log(myvar1);
// console.log(myvar2);




const myArray1 = ["value1" , "value2" , "value4" ]; 

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

1

let [ myvar11 , myvar21, ...myNweArray ] = myArray1; 
// const [ myvar1 , myvar2 ] = myArray;  // const value cant be changed 
myvar1="value_changed"
console.log(myvar11);
console.log(myvar21);
    
console.log(myNweArray);










