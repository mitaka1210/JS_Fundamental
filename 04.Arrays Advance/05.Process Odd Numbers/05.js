function oddNumber(arr) {


    const ele = [];

    for (let i = 0; i <= arr.length - 1; i++) {

        if (i % 2 === 1) {

            ele.push(arr[i]);
        }

    }
    let sum = ele.map(x => x * 2);

    console.log(sum.reverse(1).join(' '));
}
oddNumber([10, 15, 20, 25]);