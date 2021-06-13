var t0 = performance.now()
var t1 = performance.now()
function add(num) {
    if ( num < 1 || num > 1000 ) {
      console.log(`Number input: ${num}`);
      return;
    }
  
    setTimeout(() => {
      console.log('Square root:', Math.sqrt(num));
      console.log('Nearest closest number: ', findClosestPrimeNumber(num));
      console.log("Elapsed time is " + (t1 - t0) + " milliseconds.")

    },num);
  }
  
  function findClosestPrimeNumber(num) {
    while( num > 0) {
      num--;
      if (isPrimeNumber(num)) {
        return num;
      }
    }
  }
  
  function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if ( num % i === 0 ) {
          return false; 
        }  
    }
    return true;
  }
  
add(999);