
//  --------------------------   ITERABLES  -------------------------- // 

// Iterables are those in which we can apply "for of" loop.  

//--String , Array  || Object are not iterable 

const firstname = "Amiatnshu" ; 
for (let char of firstname){
    console.log(char);
}


const items =[`item` , `item2` , "item3"] 

for (let item of items){
    console.log(item);
}

const users = {

    "key1" : "value1", 
    "key2" : "value2", 

}

// for (let item of users){ 
//     console.log(item); // iterables_05.js:27 Uncaught TypeError: users is not iterable 
// }


//  --------------------------   ARRAY LIKE OBJECTS  -------------------------- //  


// -- Those element who has the propert of length 
//-- Which can be access through the index : String 



const firstname1 = "Amiatnshu" ; 
    console.log(firstname1.length);  // 9 
    console.log(firstname1[3]); // a  

//  --------------------------   SET   -------------------------- //   

//-- How to create a set  ?  
//== Store Data 
// In set duplicate is not allowed 
//-- Order is not guaranteed 
// -- No index based access 
// Iterable 

const numbers = new Set([1,2,3,4,3]); // Set(4) {1, 2, 3, 4} -- It will ignore the duplicate but doesn't throw the error ; 
console.log(numbers) // Set(4) {1, 2, 3, 4}

const numbers1 = new Set();
console.log(numbers1) // Set(0)  Empty set 
numbers1.add(1); 
numbers1.add(3); 
numbers1.add(['item1' , 'item2']); 
numbers1.add(['item1' , 'item2']);  // Added as it has the diff memory address 
console.log(numbers1) // Set(2) {1, 3} 

if(numbers1.has(1)){
    console.log("1 is present..!!")
}
else{
    console.log("1 is not present")
}

for(let item of numbers1){
    console.log(item)
}

const myArray = [1,2,3,3,4,4,,5,5,4,,,5,,5,4,3,,4,4,,4,3,3,4,,5,4,345,6,6,7,65,,7,78,,66,6,,78,7,,6,5,5,6,7,78,,,67,6,6555,,7,6,,6,]

const uniqueElements = new Set(myArray); 
console.log(uniqueElements);  

let length =0; 
for(let element of uniqueElements){

    length++;

}

console.log(length);
























//SET 

//MAP

//HASHMAP










