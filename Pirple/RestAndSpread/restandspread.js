//It can be used to copy one array into another or 
//to concatenate 2 arrays together. Rest Parameter is collecting all remaining elements into an array . 
//Spread Operator is unpacking collected elements such 
//as arrays into single elements
//Rest parameter use to collect all parameters after the first parameter into an array.
//Each one of the parameter values collected into the array is then multiplied by the first parameter,
//We can use the spread operator to efficiently split arrays, objects, and strings. 
//Splitting up a string into characters has become easier. 



  var array1 = [0, 1, 2];
  var array2 = [3, 4, 5];
  
  arraySpread = [...array1, ...array2];
  console.log(arraySpread);
  
  
  function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));