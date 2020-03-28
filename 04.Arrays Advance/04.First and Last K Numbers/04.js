function sumElements(n, k) {

    const arr = [1];

    for (let i = 1; i < n; i++) {

        let target = i - k;
        let sum = 0;
        for (let j = i - 1; j >= target; j--) {
            if (j < 0) {
                break;
            }
            sum += arr[j];

        }
        arr.push(sum);
    }
    console.log(arr.join(' '));

}
sumElements(8, 2);