function a(input) {

    let step = Number(input[input.length - 1]); //! Правим масива да е от числа;
    let number = [];

    for ( let i = 0; i < input.length-1; i+=step)
    {
      number.push(input[i]);
     
     
    }
    console.log(number.join(' '));
}


a(['1', '2', '3', '4', '5', '6', '7', '8', '2']);
//? Последното число означава стъпката с която вартим. В случая това е 2: отпечатваме 1+2= 3; 3+2= 5; 5+2= 7;
