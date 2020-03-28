function factorial(a, b) {

    let sum = 1;
    let sum2 = 1;

    for (let i = 1; i <= a; i++) {

        sum *= i;

    }

    for (let j = 1; j <= b; j++) {

        sum2 *= j;

    }
    let result = sum / sum2;
    console.log(`${result.toFixed(2)}`);
}
factorial(5, 2);