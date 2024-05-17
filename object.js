// OBJECT REFRENCE TYPE
// --  Array are good but not suffcient for real world data.
// --  Object store key value pair
// --  Object don't have the index.

// HOW TO CREATE OBJECTS

const person = { name: "Amitanshu", age: 26 };
console.log(person); // {name: 'Amitanshu', age: 26}
console.log(person.name);
console.log(person.age);

const person1 = { name: "Amitanshu", age: 26, hobbies: ["Sleeping", "Coding"] };
console.log(person1.name);
console.log(person1.age);
console.log(person1.hobbies[0]);
console.log(person1.hobbies);

person1.gender = "male"; // to add a key value pair in the object.
console.log(person1);

// Difference between dot and bracket notation

console.log(person1["name"]);
console.log(person1["age"]);
person1["working"] = "No"; // To add any key value pair
console.log(person1);
console.log(person1["hobbies"][0]);

const person2 = {
  name: "Amitanshu",
  age: 26,
  "personal hobbies": ["Sleeping", "Coding"], // In case if the key has two word in that case we need to use the brackets "personal hobbies" - Key
};

console.log(person2["name"]);
console.log(person2["age"]);
console.log(person2["personal hobbies"][0]); // how to mention the key and fetch the value

// I want to add the key in the person2 from any variable see below

const key = "email";
// person2["key"]="amitanshu.abhishek@gmail.com"
// console.log(person2); //{name: 'Amitanshu', age: 26, personal hobbies: Array(2), key: 'amitanshu.abhishek@gmail.com'}
// person2.key="amitanshu.abhishek@gmail.com"
// console.log(person2); //
// {name: 'Amitanshu', age: 26, personal hobbies: Array(2), key: 'amitanshu.abhishek@gmail.com'}

person2[key] = "amitanshu.abhishek@gmail.com";
console.log(person2); // {name: 'Amitanshu', age: 26, personal hobbies: Array(2), email: 'amitanshu.abhishek@gmail.com'}

// HOW TO ITERATE OBJECT

const person4 = { name: "Amitanshu", age: 26, hobbies: ["Sleeping", "Coding"] };

//for in loop and objects.key

for (let key in person4) {
  console.log(person4[key]); //  Amitanshu 26 ['Sleeping', 'Coding']
}

for (let key in person4) {
  console.log(`${key} :: ${person4[key]}`); // Use template String hobbies :: Sleeping,Coding  will come as string
}

for (let key in person4) {
  console.log(key, ":: ", person4[key]); //  hobbies ::  (2) ['Sleeping', 'Coding'] will come as array
}

console.log(Object.keys(person4)); // (3) ['name', 'age', 'hobbies']

console.log(typeof Object.keys(person4)); //  object type is array

const val = Array.isArray(Object.keys(person4)); // proof
console.log(val); // true

//for of  loop and objects.key

for (let key of Object.keys(person4)) {
  console.log(key, ":: ", person4[key]);
}

// COMPUTED PROPERTIES

const key1 = "object1";
const key2 = "object2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
  [key1]: value1,
  [key2]: value2,
};

console.log(obj);

// OR

const obj1 = {};
obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1);

// SPREAD OPERATOR

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const newArray = [...array1, ...array2];
console.log(newArray);
const newArray1 = [...array1, array2];
console.log(newArray1);

const newArray2 = [..."avcjdfjdjod"];
console.log(newArray2);

const newArray4 = [..."122333343253463464354"];
console.log(typeof newArray4);

//  const newArray5=[...122333343253463464354]
//  console.log(typeof newArray5) // Uncaught TypeError: 122333343253463470000 is not iterable

// SPREAD OPERATOR  IN OBJECTS (key are unique and if they have same key multip
// le time in that case the latest value of the key will be picked )

const obj21 = {
  key1: "value1",
  key2: "value3",
  key3: "valu19",
};

console.log(obj21); // {key1: 'valu19', key2: 'value3'

const obj22 = {
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj21, ...obj22 };

console.log(newObject); // {key1: 'valu19', key2: 'value3', key3: 'value3', key4: 'value4'}

// const newObject1 = { ...obj21, ...obj22 };
// console.log(newObject1);
const newObject3 = { ...obj22, ...obj21 };
console.log(newObject3); // {key3: 'valu19', key4: 'value4', key1: 'value1', key2: 'value3'} valu19 as  obj21 was the last and latest

const newObject1 = { ...obj21, ...obj22 , key69 : "value69"};
console.log(newObject1); // {key1: 'value1', key2: 'value3', key3: 'value3', key4: 'value4', key69: 'value69'} 

const newObject2 = {..."abc"}
console.log(newObject2); // {0: 'a', 1: 'b', 2: 'c'}
console.log(newObject2[2]); // c
console.log(newObject2[5]); // undefined

const newObject4 = {...["item","item2"]} // Not used 
console.log(newObject4); // {0: 'item', 1: 'item2'}


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

// OBJECT DESTRUCTING 

const band = {
    bandName : "123" ,
    songName : "abc",
    year : "1986"
};

// const bandName = band.bandName;
// const famousSong = band.songName; // use let to change the name for band not possible in const 
// console.log(bandName , famousSong ) ;   

// SHORCUT 

let{bandName , songName,...restProps} = band;
console.log(bandName , songName ) ;   // 123 abc 
console.log(restProps) ; // {year: '1986'}




const band1 = {
    bandName1 : "123" ,
    songName1 : "abc",
    year : "1986"
};

let{bandName1:key12 , songName1:key13} = band1;   // rename the key in object 
console.log(key12 , key13 ) ;   // 123 abc 

// console.log(bandName1 , songName1 ) ; // object.js:202 Uncaught ReferenceError: bandName1 is not defined


// OBJECT INSIDE ARRAY and IT IS USED IN REAL TIME APPLICATION 

const user =[

    {userid:1,firstName:"Amitanshu",gender:"male"},
    {userid:2,firstName:"Ankita",gender:"female"},
    {userid:3,firstName:"Abhishek",gender:"male"},
    {userid:4,firstName:"AA",gender:"male"}


]

console.log(user); // [{…}, {…}, {…}, {…} 

for (let users of user) {
    console.log(users.firstName ,"::", users.gender )
} 

// NESTED DESTRUCTURING 

const [user1 , user2 , user3] = user;
console.log(user1); // {userid: 1, firstName: 'Amitanshu', gender: 'male'}

// const [{firstName} , {gender} , {userid}] = user;
// console.log(firstName ,"::", gender ) //  Amitanshu :: female 

const [{firstName:usernamefores,userid:fefe,gender} , {gender:rgrg} , {userid:id}] = user; // renaming 
console.log(usernamefores,fefe , gender ,"::", rgrg , gender) // Amitanshu :: female == rename   