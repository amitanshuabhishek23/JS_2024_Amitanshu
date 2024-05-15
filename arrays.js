// Intro to Arrays  
    // --- Ordered Collection of iteam  
    let fruits =["apple","mango","grapes"];
    console.log(fruits[0]); 
    // let mixed =["1","2",null, undefined,"string","mango",string]
    // console.log(mixed[6]); // Uncaught ReferenceError: string is not defined 
    let mixed =["1","2",null, undefined,"string","mango"] // Any data type can be stored in the Array 
    console.log(mixed[2]); // null 
    console.log(fruits); // ['apple', 'mango', 'grapes']
    fruits[1]="banana";  // Arrays are mututable in nature 
    console.log(fruits); // ['apple', 'banana', 'grapes'] 

// Reference Type [Obejct]
    console.log(typeof fruits); // object
    let obj ={};  console.log(typeof obj) // object 
    console.log(Array.isArray(fruits)) // true Use Array.isArray to see if object type is array or not 

// Array PUSH and POP 
    
    console.log(fruits);
    fruits.push("chiku"); // ['apple', 'banana', 'grapes']  
    console.log(fruits); //  ['apple', 'banana', 'grapes', 'chiku'] at the last 
    let poppedfruit = fruits.pop();  // It returns the last element 
    // console.log(fruits.pop()); // grapes 
    console.log(fruits); //['apple', 'banana', 'grapes']   
    console.log(`Pop will push out the last elelment of the array i.e ${poppedfruit}`)  

    //---- UNSHIFT  To add the elememt at the 0th Index 

    fruits.unshift("Chiku");
    console.log(fruits); // ['Chiku', 'apple', 'banana', 'grapes']
    fruits.unshift("Chikki");
    console.log(fruits); // ['Chikki', 'Chiku', 'apple', 'banana', 'grapes'] 

    //--- shift() To remove the element from the 0th index and return the same 
    fruits.shift("Chiku"); 
    console.log(fruits);  // ['Chiku', 'apple', 'banana', 'grapes'] 

    // -- WITH RESPECT TO PERFORMANCE PUSH AND POP IS MUCH FASTER THAN SHIFT AND UNSHIFT -- //  





