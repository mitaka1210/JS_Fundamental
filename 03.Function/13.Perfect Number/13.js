function perfectNumber(number, x) {

    let multiplication = (Math.pow(2, (x - 1)) * (Math.pow(2, x) - 1));

    if (number === multiplication) {
        console.log("We have a perfect number!");
    } else {

        console.log("Its not so perfect.");
    }

};
perfectNumber(7, 2);