function kElements(arr) {

    const k = arr.shift();

    let ress = arr.slice(0, k);

    console.log(ress.join(' '));

    const last = arr.length;

    ress = arr.slice(last - k);

    console.log(ress.join(' '));



}

kElements(['2', '7', '8', '9']);