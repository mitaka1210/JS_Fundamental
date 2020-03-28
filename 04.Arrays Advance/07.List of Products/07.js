function listProducts(arr) {

    const sortArr = arr.sort();
    const newArr = [];

    for (let i = 0; i < sortArr.length; i++) {

        console.log(`${ i + 1}.${sortArr[i]}`);

    }

}
listProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);