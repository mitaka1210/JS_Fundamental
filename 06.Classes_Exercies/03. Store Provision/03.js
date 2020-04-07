function shop(arr1, arr2) {


    
   let availableProduct  = restock(arr1, {});
    let deliveryProduct = restock(arr2, availableProduct);


    for (const product of Object.keys(deliveryProduct)) {
        console.log(`${product} -> ${deliveryProduct[product]}`);
    }


    function restock(arr, obj) {

        for (let i = 0; i < arr.length; i+=2) {
        
            const product = arr[i]; // Chips CocaCola Bananas Pasta Beer
            const quantity = Number(arr[i + 1]); // 5 9 14 4 2 
    
            if (! obj.hasOwnProperty(product)) { //? тук проверяваме да ли продукта го има вече, ако го няма го добавяме.
                obj[product] = quantity;
            }
            else {
                obj[product] += quantity;
    
            }
    
        }
        return obj;
    }
        
        
   



}

shop(
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
