function rotationArr(arr, rotation) {


    for (let i = 1; i <= rotation; i++) {
        
        let firstElement = arr.shift();
        arr.push(firstElement);
        
    }

    console.log(arr.join(" "));
    
}

rotationArr([2, 4, 15, 31], 2);
