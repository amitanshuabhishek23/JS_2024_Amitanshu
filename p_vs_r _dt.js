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
        console.log(array2===array1); // true  Use this 
        console.log(array2==array1); // true 
        console.log("Value of array1", array1); // (2) ['item1', 'item2']
        console.log("Value of array2", array2);  // (2) ['item1', 'item2']
        console.log("After Pushing")
        array1.push("item3");
        console.log("Value of array1", array1); // ['item1', 'item2', 'item3']
        console.log("Value of array2", array2);  // ['item1', 'item2', 'item3'] 


    // How are they store in the memory ? 
        // Primitive - Stored in Stack - One has its own space 
        // Reference - Stored In Heap Memory and the Stack has pointer the same address of the reference from heap. 

    // To clone array 
    let firstName5="Amitanshu"
    let myname12=firstName5.slice(0);
    console.log(myname12); 

    let array3=["item1","item2"];
    console.log("Before Slice" ,array3);
    let array4=array3.slice(0); 
    console.log("After Slice ",array4); 
    let array8=array3.slice(0).concat(["iten7","item8"]); 
    console.log("Adding to addition",array8);
     
    let array5 = [].concat(array3,["item6"]); 
    console.log("After Concat ",array5);  

    // Spread Operator 

    let array6 = [...array5,"item8"  ];
    console.log(array6===array5); // Pointer is different 
    console.log("... Spread Operator", array6); 

    let array9 = [...array5,...array6];

// For Loop In Array 


