// function solve(arr, arr2) {
   
//     let sum = 0;
//     let sum2 = 0;
//     for ( i = 0; i < arr.length; i++) {
//         arr[i] = Number(arr[i]);
//         sum = sum + arr[i];
              
//     }

//     for ( i = 0; i < arr2.length; i++) {
//         arr2[i] = Number(arr2[i]);
//         sum2 = sum2 + arr2[i];
        
//     }



//     if (sum != sum2) {
//         console.log(`Arrays are identical. Sum: ${sum}`);
        
//     } 
//     else if ( [arr] = [arr2]){
//         console.log(`Arrays are not identical. Found difference at  index'`);
//     }
    
//     // console.log(arr2[i]);
   
    

   
 
    
// }
// solve(['10', '20', '30'], ['10', '20', '30']);
function solve(arr1, arr2) {
    let sum = 0;
    for (let i in arr1) {
        const firstEl = arr1[i];
        const secondEl = arr2[i];
        if (firstEl !== secondEl) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
       
        sum += +firstEl;
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}
solve(['10','20','30'], ['10','20','30']);
