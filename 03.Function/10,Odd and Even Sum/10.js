function oddEvenNumber(num) {
    

    const evenDigits = even(num);
    const oddDigits = odd(num);


    const evenSum = getSum(evenDigits);
    const oddSum = getSum(oddDigits);
    

 console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function even(num) {

        let evenNum = [];

        num.toString().split('').forEach((digit) => {


            
            let currentNumber = Number(digit);

            if (currentNumber  % 2 === 0) {
                
                evenNum.push(currentNumber);
            }
            
        });

        return evenNum;

    }

    
    function odd(num) {


        let oddNum = [];

        num.toString().split('').forEach((digit) => {


            
            let currentNumber = Number(digit);

            if (currentNumber  % 2 === 1) {
                
                oddNum.push(currentNumber);
            }
            
        });

        return oddNum;
    }

    function getSum(arr) {

        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            
        }
        return sum;
    }
    
}

oddEvenNumber('3495892137259234');
