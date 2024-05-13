// IF ELSE CONDITIONAL

let age = 17;

if (age >= 18) {
  console.log("User Can Vote");
} else {
  console.log("Use can stand in school election ");
}

let num = 13;

if (num % 2 === 0) {
  console.log("EVEN");
} else {
  console.log("ODD");
}

// TRUTHY AND FALSY VALUES

// --- FAlSY VALUES

// false
// ""
// null
// undefined
// 0

let firstName;
let firstName11 = "";
let firstName12 = null;
let firstName13 = 0;

if (firstName11) {
  console.log(firstName11);
} else {
  console.log("First Name is empty", typeof firstName11); // First Name is empty string
}

if (firstName) {
  console.log(firstName);
} else {
  console.log("First Name is empty", typeof firstName); // First Name is empty undefined
}
if (firstName12) {
  console.log(firstName12);
} else {
  console.log("First Name is empty", typeof firstName12); // First Name is empty object
}

// ternary operator

let age4 = 10;
let drink = age4 > 5 ? "coffee" : "milk";
console.log(drink);

// AND OR

let firstName17 = "Amitanshu";
let age17 = 22;

if (firstName17[0] === "A" && age17 > 18) {
  console.log("Name Starts with A and Age is greater than 19");
} else {
  console.log("Inside Else");
}

let firstName18 = "Amitanshu";
let age18 = 18;

if (firstName18[0] === "A" || age18 > 18) {
  console.log("Inside If");
} else {
  console.log("Inside Else");
}

// Nested if else

// Winning Number 7

// 7 Your Guess is Correct
// 5 is too low
// 22 is too high

// let winning_num = 7;

// let userGuess = prompt("Guess the number"); // take input as the string
// // console.log(typeof userGuess ,+userGuess);

// if (+userGuess === winning_num) {
// console.log("Your guess is right !!"); // Your guess is right !!
// } else {
// if (+userGuess < winning_num) {
//     console.log("Two low");
// } else {
//     console.log("Too High");
// }
// }

// else if

let tempInDegree = 4;

if (tempInDegree < 0) {
  console.log("extremely cold outside");
} else if (tempInDegree < 16) {
  console.log("It is cold outside");
} else if (tempInDegree < 25) {
  console.log("wheather is okay ");
} else if (tempInDegree < 35) {
  console.log("lets go for swim");
} else if (tempInDegree < 45) {
  console.log("turn on AC");
} else {
  console.log("too hot!!");
}

console.log("Hello");

// SWITCH STATEMENT

let day = 6;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  default: // Make sure we have dafault
    console.log("Invalid");
    break;
}

// WHILE LOOP

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
console.log(`Current Value of i is ${i}`); // i =11

let total = 0;
let i1 = 0;

while (i1 <= 10) {
  total = total + i1;
  i1++;
}
console.log(`Current Value of i is ${total}`); // i =11

// Sum of n natural numbers
let n = 10;
let total1 = (n * (n + 1)) / 2;
console.log(`total value is ${total1}`);

// for loop

// print 0 to 9

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// let i2 =0
// for (; i2 < 10 ; i2++){ // This works
//     console.log(i2)
// }

// BREAK KEYWORD AND CONTINUE KEYWORD

console.log("FOR LOOP BREAK");
for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

console.log("4th Matched");

console.log("FOR LOOP CONTINUE");
for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    console.log("44444");
    continue;
  }
  console.log(i);
}

console.log("4th Will NOT BE PRINTED");

// DO WHILE LOOP
console.log("DO WHILE LOOP");

let i5=10;
do{
    console.log(i5);
    i5++;
}
while(i5<9);

console.log(`Value of I is ${i5}`)
