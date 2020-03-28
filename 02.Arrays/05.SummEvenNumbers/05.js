function sumEvens(numStr) {
    // let numStr = [];

    const sumEvens = (numStr) => {
      let sum = 0;
      for (let i = 0; i < numStr.length; i++) {
          numStr[i] = Number(numStr[i]);
        if (numStr[i] % 2 == 0) {
        sum = sum + numStr[i];
        }
      }
      return sum;
    }
     
    console.log(sumEvens(numStr));
}
sumEvens(['1','2','3','4','5','6']);
