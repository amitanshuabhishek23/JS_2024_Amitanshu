const obj1 = {

    key1: "value1" ,
    key2: "value2" ,
    

}



const obj2 = Object.create(obj1); // {} empty object 
// this is the different way to create the empty object 
// console.log(obj2); 

obj2.key3="value3"
console.log(obj2);

console.log(obj2.key2); // if we have the key2 in obj2 in that case it will override the key2 value 


// console.log(typeof(obj2));// Object 

console.log(obj2.__proto__) // {key1: 'value1', key2: 'value2'} 


// -------
function hello(){

    console.log("Hello World");
}

// javascript function ===> function + object 

console.log(hello.name); // will print function name 

// you can add your own property 

hello.myOwnproperty = "Very Unique"; // Added a propert to function 
console.log(hello.myOwnproperty);


// function provides more useful properties 

console.log(hello.prototype); // {} -- Only functions provide prototype properties 

if(hello.prototype){
    console.log("Prototype is present")
}

else {
    console.log("Prototype is not presnet")
}

hello.prototype.abc = "acdc"
hello.prototype.abc = "acddc"
hello.prototype.sing = function(){
    return "Laaaaaaa"
};

console.log(hello.prototype.sing());
console.log(hello.prototype.abc); // It will override 
















