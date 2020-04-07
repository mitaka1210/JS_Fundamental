function city(arr) {
    
    let cityCoordinates = [];

    for (const citys of arr) {
        const token = citys.split(' | ');
        let obj = {
            
            town: token[0],
            latitude: Number(token[1]),
            longitude: Number(token[2])
            
        };


        
        console.log(obj);
    }

}
city(

    ['Sofia | 42.696552 | 23.32601',
     'Beijing | 39.913818 | 116.363625']

);
