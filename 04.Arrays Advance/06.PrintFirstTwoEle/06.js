function firstTwoEle(arr) {

    let newArr = arr.sort((a, b) => a - b);


    let ele = newArr.slice(0, 2);
    console.log(ele.join(' '));


}
firstTwoEle([30, 15, 50, 5]);