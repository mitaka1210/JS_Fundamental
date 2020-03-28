function solve(arr) {

    let newArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
       
        if (arr[i] % 2 === 0 ) {
            newArr.push(arr[i] + i);
        } else {
            newArr.push(arr[i] - i) ;
        }
       
        
    }
    console.log(newArr);

    console.log(arr.reduce((a, b) => a + b, 0));
    console.log(newArr.reduce((a, b) => a + b, 0));
    
}

solve([5, 15, 23, 56, 35]);
