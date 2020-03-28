function solve(arr, arr2) {
    
    
    let newArr = [];

 

    for (let i = 0; i < arr.length; i++) {
     
        if (i % 2 === 0 ) {

            let firstNum = Number(arr[i]);
            let secondNum = Number(arr2[i]);

             newArr.push(firstNum  + secondNum);

        }
        else  {
            newArr.push(arr[i] + arr2[i]);
        }
       
        
    }
    // console.log(newArr);
    console.log(newArr.join(' - '));
   
    
    
}

solve(
['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);
