var t0 = performance.now()
var t1 = performance.now()
function compute(num) {
    let startTimeMs;
    new Promise( (resolve, reject) => {
      startTimeMs = (new Date).getTime();
      if ( num < 1 || num > 1000 ) {
        console.log(`Number input: ${num}`);
        return;
      }
  
      console.log('Square: ', Math.pow(num, 2));
      resolve(num);
    })
    .then( (num) => {
      return new Promise( (resolve,reject) => {
        setTimeout(() => {
          resolve(num);
        }, num);
      });
    })
    .then( (num) => {
      console.log('Square root:', Math.sqrt(num));
      console.log('Nearest closest number: ', findClosestPrimeNumber(num));;
      console.log("Elapsed time" + (t1 - t0) + " milliseconds.")
    });
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
  
  compute(16);