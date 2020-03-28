function solve(arr, arr2) {
    
    let firstArr = [];
    let secondArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        
        for (let k = 0; k < arr2.length; k++) {
            secondArr = arr2[k];
            if (firstArr === secondArr) {
                console.log(firstArr);
            }
        }
        firstArr = arr[i];

       
    }
   
    
}

solve(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);
