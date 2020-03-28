function sumNumber(arr) {

    let sum = arr.map(Number);

    return sum[0] + sum.pop(); //! sum.pop() === sum.lenght - 1 Така взимаме последния елемент от масива.

}
console.log(sumNumber(['20', '30', '40']));