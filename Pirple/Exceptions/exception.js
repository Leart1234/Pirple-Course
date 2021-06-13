function reverseJsonArray(jsonString) {
    try {
      const arrayObj = JSON.parse(jsonString);
      arrayObj.reverse();
      return JSON.stringify(arrayObj);
    } catch(e) {
      return false;
    }
  }
  
  let correct = reverseJsonArray('["a","b","c"]'); 
  console.log(correct);
  
  let wrong = reverseJsonArray(123);
  console.log(wrong);
  
  




