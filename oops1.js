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

