function solve(distance, passengers, price  ) {
    
    let needFuel = (distance / 100 * 7);

    needFuel += passengers * 0.100;

    let neededMoney = needFuel * price;


    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

solve (260, 9, 2.49);
