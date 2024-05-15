// Primitive VS Refrence Data Type 

    // Primitive -- Immutable  
        let num1 = 6 ;  
        let num2 = num1; 
        console.log("Value of Num1", num1); // Value of Num1 6 
        console.log("Value of Num2", num2); // Value of Num2 6 
        num1++; 
        // num2 = num1;  // Value of Num2 7
        console.log("Value of Num1", num1); // Value of Num1 7
        console.log("Value of Num2", num2);  // Value of Num2 6

          num2 = num1;  // Value of Num2 7 
          console.log("Value of Num1", num1); // Value of Num1 7
          console.log("Value of Num2", num2);  // Value of Num2 7

    // Reference Type 
        let array1=["item1","item2"];
        let array2=array1;
        console.log("Value of array1", array1); // (2) ['item1', 'item2']
        console.log("Value of array2", array2);  // (2) ['item1', 'item2']
        console.log("After Pushing")
        array1.push("item3");
        console.log("Value of array1", array1); // ['item1', 'item2', 'item3']
        console.log("Value of array2", array2);  // ['item1', 'item2', 'item3'] 


    // How are they store in the memory ? 
        // Primitive - Stored in Stack - One has its own space 
        // Reference - Stored In Heap Memory 



