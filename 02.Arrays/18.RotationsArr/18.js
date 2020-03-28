function rotateArray(input) {

    let rotation = Number(input[input.length - 1]); 
    
    //? последен член 2 защото( дължината е 5 =>  5 - 1 = 4; в масива input[4] = 2; започваме да бройме от НУЛА(0));


    let print = input.slice(0, input.length - 1);   // всичко без две
    
    let last = '';
    

    for (let i = 0; i < rotation % print.length; i++) {
       
        last = print.pop();
        
        print.unshift(last);
        
        
    }
    console.log(print.join(' '));
}
rotateArray(['5', '2', '3', '4', '2']);
