const mortal = "man";
let mortalTest = function(name){

    function test(name){
        if(name === mortal)
            return true;
        else
            return false;
    }
    return test(name);
}
console.log(mortalTest("man"));
console.log(mortalTest(""));
console.log(mortalTest("Leart"));
console.log(mortalTest(20));