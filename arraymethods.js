console.log("IMPORTANT ARRAY METHODS");

const numbers = [4, 5, 6, 7, 7, 34, 45];

// function multiplyBy2(number , index){

//     // console.log(`Index Is ${index} Number is ${number}*2 ${number*2}`)
//     // console.log(`Number is ${number}*2 ${number*2}`)
// }

// for(i=0; i<numbers.length;i++){  // Index Is 0 Number is 4*2 8
//     multiplyBy2(numbers[i],i)
// }

// numbers.forEach(multiplyBy2); // Index Is 0 Number is 4*2 8

// -------------------------- FOR EACH -------------------------- // It returns a string

numbers.forEach(function (number, index) {
  console.log(`Index Is ${index} Number is ${number}*2 ${number * 2}`);
});

const users = [
  { firstName: "Amitanshu", age: 23 },
  { firstName: "Abhishek", age: 30 },
  { firstName: "Kumar", age: 29 },
  { firstName: "Ritesh", age: 23 },
];

users.forEach(function (user) {
  console.log(user.firstName);
});

for (let user of users) {
  console.log(user.firstName);
}
users.forEach((user) => {
  return console.log(user.firstName);
}); // Arrow Functions

// -------------------------- MAP METHOD -------------------------- // It returns a new array where for each doesn't;

const numbers1 = [23, 3, 4, 3, 23, 4, 5, 5, 23, 34, 45, 32, 45, 32];

// const square = function(number){
//     return number* number;
// }

const numsq = numbers1.map((num, index) => {
  return ` index is  ${index} and Sqaure is  ${num * num}`;
});
console.log(numsq); // ' index is  0 and Sqaure is  529', ' index is  1 and Sqaure is

// -------------------------- FILTER METHOD -------------------------- // Array method

const numbers2 = [23, 3, 4, 3, 23, 4, 5, 5, 23, 34, 45, 32, 45, 32]; // Filter odd and even  -- will return boolean value

// const isEven = function(num){
//      return console.log(num%2===0);
// }

const evenNumber = numbers2.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNumber);

// -------------------------- REDUCE METHOD -------------------------- // Array method

// A function that accepts up to four arguments. The reduce method calls
// the callbackfn function one time for each element in the array.
// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is
// the accumulated result, and is provided as an
// argument in the next call to the callback function

const numbers3 = [23, 3, 4, 3, 23, 4, 5, 5, 23, 34, 45, 32, 45, 32]; // To get the sum in an arrya

const sum = numbers3.reduce((accumalator, currentValue) => {
  return accumalator + currentValue;
}, 100); // 100 is the initial value

console.log(sum); // 281 381

const userCart = [
  { product_id: 1, product_name: "mobile", price: 12000 },
  { product_id: 2, product_name: "laptop", price: 13000 },
  { product_id: 3, product_name: "tv", price: 14000 },
  { product_id: 4, product_name: "tool", price: 15000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount); // 54000

//  --------------------------  SORTING METHOD  -------------------------- //

const numbers4 = [4, 5, 6, 4, 5, 4, 33, 2, 4, 3, 2, 3, 4, 4]; // Change the number into string and then sorted
numbers4.sort(); // [2, 2, 3, 3, 33, 4, 4, 4, 4, 4, 4, 5, 5, 6]
console.log(numbers4); // [2, 2, 3, 3, 33, 4, 4, 4, 4, 4, 4, 5, 5, 6] = Check the first ascii code
numbers4.sort((a, b) => a - b); //[2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 6, 33]
console.log(numbers4);
numbers4.sort((a, b) => b - a);
console.log(numbers4); // [33, 6, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 2, 2]

const userNames = [`Amitanshu`, `Abhishek`, `Ritesh`, ``, `Kumar`];

userNames.sort();
console.log(userNames);

const products = [
  { productId: 1, produceName: "p1", price: 300 },
  { productId: 2, produceName: "p2", price: 3000 },
  { productId: 3, produceName: "p3", price: 200 },
  { productId: 4, produceName: "p4", price: 8000 },
  { productId: 5, produceName: "p5", price: 500 },
];
// lowToHigh
const lowToHigh = products.slice(0).sort((a, b) => {
  // Slice to clone the array  as sort chnages the orginal array
  return a.price - b.price;
});
console.log(lowToHigh);

//  --------------------------  FIND METHOD  -------------------------- //

const myArray23 = ["Hello", "Dog", "Lion", "cat"];

function isLength(string) {
  return string.length === 3;
}

//  const ans = myArray23.find(isLength);
//  console.log(ans) // returns the first element with the length 3

const ans = myArray23.find((string) => string.length === 3);
console.log(ans); // returns the first element with the length 3

const users25 = [
  { userud: 1, userName: "Amiatnshu" },
  { userud: 3, userName: "Amiatnshu" },
  { userud: 4, userName: "Amiatnshu" },
  { userud: 5, userName: "Amiatnshu" },
  { userud: 7, userName: "Amiatnshu" },
];

const A = users25.find((abc) => abc.userud === 3);
console.log(A);

//  --------------------------  EVERY METHOD  -------------------------- //

const num1 = [1, 2, 3, 4, 5, 6, 7, 6];
const num2 = [2, 4, 6, 8, 10, 12];
const ans23 = num1.every((num) => num % 2 === 0); // Callback function --> true/false (boolean)
const ans24 = num2.every((num) => num % 2 === 0);

console.log(ans23);
console.log(ans24);

const product = [
  { productId: 1, produceName: "p1", price: 300 },
  { productId: 2, produceName: "p2", price: 3000 },
  { productId: 3, produceName: "p3", price: 200 },
  { productId: 4, produceName: "p4", price: 8000 },
  { productId: 5, produceName: "p5", price: 500 },
];

// check if every product is below 30000

const ansd = product.every((cartItem) => cartItem.price < 30000);
console.log(ansd); // true

//  --------------------------  SOME METHOD  -------------------------- //

const num21 = [1, 2, 3, 4, 5, 6, 7, 6];
const num27 = [3, 9, 7, 11, 13];
// If there is any number that is even then return true

const ans21 = num21.some((num) => num % 2 === 0);
const ans27 = num27.some((num) => num % 2 === 0);
console.log(ans21);
console.log(ans27);

//  --------------------------  FILL METHOD  -------------------------- //

// Value , Start , END
// [-1,-1,-2,-4,-5]

const myArray21 = new Array(10).fill(-1); // [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
console.log(myArray21);

const myArray22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray22.fill(0, 2, 7);
console.log(myArray22);

//  --------------------------  SPLICE METHOD  -------------------------- //

// start ,delete , insert

const num2s = [1, 2, 3, 4, 5, 6, 7, 6];

const deletediteam = num2s.splice(1, 1); // index  [1, 3, 4, 5, 6, 7, 6]
console.log(deletediteam); // [2]
console.log(num2s);
num2s.splice(1, 0, "inserted");
console.log(num2s); // [1, 'inserted', 3, 4, 5, 6, 7, 6] 

// Insert and Delete 

const deletediteam1 = num2s.splice(1, 3, "inserted_1" ,"inserted_2" , "inserted_3" );
console.log(deletediteam1); //  ['inserted', 3, 4] 
console.log(num2s) // [1, 'inserted_1', 'inserted_2', 'inserted_3', 5, 6, 7, 6]