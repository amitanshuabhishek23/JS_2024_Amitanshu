console.log("WELCOME TO JS OOPS PROGRAMMING");

//----------------  METHOD --------------------- //
// -- Function Inside Object   is called as method.

const person = {
  firstName: "Amitanshu",
  age: 23,
  about: function () {
    console.log(`Person Name is ${this.firstName} and age is ${this.age}`);
    console.log(this); // {firstName: 'Amitanshu', age: 23, about: ƒ}
  },
};
person.about();

function personInfo() {
  console.log(`Person name is ${this.firstName} and age is ${this.age}.`);
}

const person1 = {
  firstName: "Amitanshu",
  age: 23,
  about: personInfo, // Assigning the function
};

const person2 = {
  firstName: "Abhishek",
  age: 28,
  about: personInfo, // Assigning the function
};

const person3 = {
  firstName: "Ankita",
  age: 27,
  about: personInfo, // Assigning the function
};

person1.about();
person2.about();
person2.about();

console.log(this); // Window {window: Window, self: Window, document: document, name: '

// this == window -- javascript object

// "use strict"  If use this will be undefined
function myfunc() {
  console.log(this);
}
window.myfunc(); // myfunc is a element under window object

// call method

function about1(hobby, fav) {
  console.log(
    `Person name is ${this.firstName} and age is ${this.age} and this is fav`,
    hobby,
    fav
  );
}

const person4 = {
  firstName: "thisAmitanshu",
  age: 24,
};

const person5 = {
  firstName: "Amitanshu",
  age: 29,
};

// How to use "about" in person5

//person4.about1.call(person5); // Using call and assigning  this as person5
about1.call(person5, "Guitar", "Arijit"); // Person name is Amitanshu and age is 29 and Guitar Arijit

// --  Apply -- //

about1.apply(person5, ["Guitarapply", "Arijitapply"]); // pass the arg in list

// -- Bind -- // -- return function

const func = about1.bind(person5, "bindg", "bachbind");
func(); // Person name is Amitanshu and age is 29 and this is fav bindg bachbind

// Don't do these mistake

const person6 = {
  firstName: "thisAmitanshu",
  age: 24,
  about3: function (hobby, fav) {
    console.log(
      `Person name is ${this.firstName} and age is ${this.age} and this is fav`,
      hobby,
      fav
    );
  },
};

const myfunc2 = person6.about3.bind(person6, "Amit", "SSS");
myfunc2(); // Person name is undefined and age is undefined and this is fav undefined undefined
console.log(myfunc2); //(hobby, fav) {
// console.log(
//   `Person name is ${this.firstName} and age is ${this.age} and this is fav`,
//   hobby,
//   fav
// ); }

// -----------------ARROW FUNCTIONS------------------//
// This won't work same in arrow function. It picks n-1 objects. 


