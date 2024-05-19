console.log("IMPORTANT ARRAY METHODS") 


const numbers =[4,5,6,7,7,34,45];

// function multiplyBy2(number , index){


//     // console.log(`Index Is ${index} Number is ${number}*2 ${number*2}`) 
//     // console.log(`Number is ${number}*2 ${number*2}`) 
// }

// for(i=0; i<numbers.length;i++){  // Index Is 0 Number is 4*2 8
//     multiplyBy2(numbers[i],i)
// }

// numbers.forEach(multiplyBy2); // Index Is 0 Number is 4*2 8 


// -------------------------- FOR EACH -------------------------- //

numbers.forEach(function(number , index ){
    console.log(`Index Is ${index} Number is ${number}*2 ${number*2}`) 
});  

const users = [

    {firstName: "Amitanshu" , age: 23},
    {firstName: "Abhishek" , age: 30},
    {firstName: "Kumar" , age: 29},
    {firstName: "Ritesh" , age: 23}, 
]

users.forEach(function(user){
    console.log(user.firstName); 
})

for(let user of users){
    console.log(user.firstName); 
};
users.forEach((user)=> {return  console.log(user.firstName)}); // Arrow Functions 

// -------------------------- MAP METHOD -------------------------- // It returns a new array where for each doesn't; 

const numbers1 = [23,3,4,3,23,4,5,5,23,34,45,32,45,32];

// const square = function(number){
//     return number* number;
// }

 const numsq = numbers1.map((num, index) => { return ` index is  ${index} and Sqaure is  ${num*num}`}); 
 console.log(numsq); // ' index is  0 and Sqaure is  529', ' index is  1 and Sqaure is  


// -------------------------- FILTER METHOD -------------------------- // Array method 


const numbers2 = [23,3,4,3,23,4,5,5,23,34,45,32,45,32]; // Filter odd and even  -- will return boolean value

// const isEven = function(num){
//      return console.log(num%2===0);
// }


const evenNumber = numbers2.filter((num) => {

   return num%2===0

});
console.log(evenNumber); 

// -------------------------- REDUCE METHOD -------------------------- // Array method 