
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

const numbers = new Set([1,2,3,4,3]); // Set(4) {1, 2, 3, 4} -- It will ignore the duplicate but doesn't throw the error ; 
console.log(numbers) // Set(4) {1, 2, 3, 4}


























//SET 

//MAP

//HASHMAP










