function solve(arr) {
    
    let amountOfBiscuits = +arr[0];
    let countOfTheWorkers = +arr[1];
    let biscuitForOneMouth = +arr[2];
    
    let defectiveDay = 0;
    let fullWorkDay = 0;
    //! One mouth = 30days;


    //let sumAllBiscuitForDay = amountOfBiscuits * countOfTheWorkers;

    for (let i = 0; i < 30 ; i++) {
        
        if (i % 3 == 0) {
            defectiveDay += Math.floor(((amountOfBiscuits * countOfTheWorkers)* 0.75));
        }
        else {
            fullWorkDay += amountOfBiscuits * countOfTheWorkers;; 
        }
        
    }
    
      
    let totalSum = defectiveDay + fullWorkDay;

    let differenceFactory = totalSum - biscuitForOneMouth;

    let percentDiff = Math.abs(((differenceFactory / biscuitForOneMouth) * 100));

    if (totalSum > biscuitForOneMouth) {
        console.log(`You have produced ${totalSum} biscuits for the past month.`);
        console.log(`You produce ${percentDiff.toFixed(2)} percent more biscuits.`);
    }
    
    else {
        console.log(`You have produced ${totalSum} biscuits for the past month.`);
        console.log(`You produce ${(percentDiff.toFixed(2))} percent less biscuits.`);
    }
      
}

solve([ '65', '12', '26000' ]);

//solve(
//    78,
//    8,
//    16000
//);

//    You have produced 17160 biscuits for the past month.
//You produce 7.25 percent more biscuits.

//You have produced 21450 biscuits for the past month.
//You produce 17.50 percent less biscuits.
