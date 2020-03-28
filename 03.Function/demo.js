function factorial(n, m) {
    j = 1;
    for (i = 1; i <= n; i++) {
        j = j * i;
    }
    let sum = j / m;
    console.log(`${sum.toFixed(2)}`);
}
factorial(6, 2);