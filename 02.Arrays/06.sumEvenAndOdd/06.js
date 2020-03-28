function sumEvens(numStr) {
    // let numStr = [];

    const sumEvens = (numStr) => {
      let evenSum = 0;
      let oddSum = 0;
      for (let i = 0; i < numStr.length; i++) {
          numStr[i] = Number(numStr[i]);
        if (numStr[i] % 2 == 0) {
            evenSum += numStr[i];
            
        }
        else if (numStr[i] % 2 > 0 ) {
            oddSum = oddSum + numStr[i];
           
        }
        
         diffSum = evenSum - oddSum;
      }
      return  diffSum;
     
    }
    
     
    console.log(sumEvens(numStr));
}
sumEvens([3,5,7,9]);
