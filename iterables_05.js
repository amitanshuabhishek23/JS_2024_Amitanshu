//  --------------------------   ITERABLES  -------------------------- //

// Iterables are those in which we can apply "for of" loop.

//--String , Array  || Object are not iterable

const firstname = "Amiatnshu";
for (let char of firstname) {
  console.log(char);
}

const items = [`item`, `item2`, "item3"];

for (let item of items) {
  console.log(item);
}

const users = {
  key1: "value1",
  key2: "value2",
};

// for (let item of users){
//     console.log(item); // iterables_05.js:27 Uncaught TypeError: users is not iterable
// }

//  --------------------------   ARRAY LIKE OBJECTS  -------------------------- //

// -- Those element who has the propert of length
//-- Which can be access through the index : String

const firstname1 = "Amiatnshu";
console.log(firstname1.length); // 9
console.log(firstname1[3]); // a

//  --------------------------   SET   -------------------------- //

//-- How to create a set  ?
//== Store Data
// In set duplicate is not allowed
//-- Order is not guaranteed
// -- No index based access
// Iterable

const numbers = new Set([1, 2, 3, 4, 3]); // Set(4) {1, 2, 3, 4} -- It will ignore the duplicate but doesn't throw the error ;
console.log(numbers); // Set(4) {1, 2, 3, 4}

const numbers1 = new Set();
console.log(numbers1); // Set(0)  Empty set
numbers1.add(1);
numbers1.add(3);
numbers1.add(["item1", "item2"]);
numbers1.add(["item1", "item2"]); // Added as it has the diff memory address
console.log(numbers1); // Set(2) {1, 3}

if (numbers1.has(1)) {
  console.log("1 is present..!!");
} else {
  console.log("1 is not present");
}

for (let item of numbers1) {
  console.log(item);
}

const myArray = [
  1,
  2,
  3,
  3,
  78
];

const uniqueElements = new Set(myArray);
console.log(uniqueElements);

let length = 0;
for (let element of uniqueElements) {
  length++;
}

console.log(length); 


const person1 ={

    firstname : "Amitanshu",
    1 : "one"
}

console.log(person1.firstname)
console.log(person1.Age)
console.log(person1[0]) // Undefined
console.log(person1 [firstname]) // Undefined
console.log(person1 ['firstname'])
console.log(person1) 
console.log(typeof person1['1'])  



// --  Object  Literal
// -- key -- > String
// -- key -- > Symbol

//  --------------------------   MAP   -------------------------- // 

// Stores key value pair same as object  
// In o

const person = new Map();
console.log(person); // Map(0) {size: 0}

person.set("firstName", "Amitanshu");
person.set("Age", 23);
person.set(1, "One");
person.set([1,2,3], "OneTwoThree");
person.set({1 :"Amitanshu"}, "OneTwoThree");
// console.log(person);  
// console.log(person[0]) // Undefined
// console.log(person [firstname]) // Undefined 


// console.log(person.get(1)) // One -- String
// console.log(person.get("Age")) //23
// console.log(person.get('firstName')) // Amitanshu  


for (let key of person.keys())
{
    console.log(key, typeof key) // 1 'number' 
}

for (let [key , value] of person)
    {
        console.log(Array.isArray(key)) // 1 'number'  // true
        console.log(key,value)


    }

    const newPerson = new Map ( [['fristName' , 'Amitanshu'] , ['age' , 23]])
    console.log(newPerson) 


   const person2 = {

    id : 1 , 
    firstname: "Amitanshu"

   } 

   // I want to add the diff key value pair in the person2 using Map 

   const userInfo = new Map() ; 

   userInfo.set(person2, {age:8 , gender:"male"}); 

   console.log(person2) 
   console.log(userInfo) 

   console.log(person2.id); 
   console.log(userInfo.get(person2).age);  // 8 

   // -- Cloning the Object.assign 

   const obj = {
    key1: "Value1",
    key2: "Value2"
   }

   const obj2 =obj; // Same address in heap memory 

const obj3 = {... obj} ; // Diff address 

const obj4 = Object.assign({},obj); // Same as spread opreator

// --------------OPTIONAL CHAINING--------------

 const user = {
  firstname : "Amitanshu", 
  // add : {flatNo : 403}
 }

console.log(user.firstname); // Amitanshu
// console.log(user.add.flatNo); // 403 

console.log(user?.add); // Undefined 

// console.log(user.add.flatNo); // TypeError: Cannot read properties of undefined (reading 'flatNo')
 console.log(user?.add?.flatNo)

// We use ? incase if the property is not available in the object or incase object is 
// not available or is declared using let like let user ; in that case it will throw undefined as it will not 
// stop the exceution. 

