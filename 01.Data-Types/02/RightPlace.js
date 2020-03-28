function solve(firstName,secondName,symbol) {

    let result =  firstName.replace('_', secondName);
    let output = result ===symbol ? 'Matched' : 'Not Matched'
    console.log(output)    
}

solve ('Str_ng', 'I', 'Strong');
