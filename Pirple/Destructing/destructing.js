/*
The differences are that you can destructure values from an object using braces {}
 to define the new variables that stand for the object which is being destructed and
 destructing an array uses brackets [] to tell that an array is being destructed.

 Also for destructing an object you have to use the property names as the new variables
 names, but we can also use another names for the new variables, if we don't want to
 use the same names as the object property.
*/
//Array
const  arr1 = ['1','2','3','4','5','6'];
const [num1 , num2 , num3 , num4 , num5 , num6] = arr1;
console.log(num1,num5);

//Object
const user = {
    id: '12',
    is_verifing: true
}
const {id , is_verifing} = user;
console.log(id , is_verifing);