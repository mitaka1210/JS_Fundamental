function shopPrice(product, quantity) {

    
    if (product === "water") {
        price = 1.00;
        let result = price * quantity;
        console.log(`${result.toFixed(2)}`);
        
    } else if (product === "coffee") {
        price = 1.50;
        let result = price * quantity;
        console.log(`${result.toFixed(2)}`);
        
    }
    else if  ( product === "snacks") {
        price = 2.00;
        let result = price * quantity;
        console.log(`${result.toFixed(2)}`);

    }
    else if ( product === "coke") {
        price = 1.40;
        let result = price * quantity;
        console.log(`${result.toFixed(2)}`);
    }
    
}

shopPrice('coffee', 2);
