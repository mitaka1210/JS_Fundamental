function solve(firstChar, secondChar){

    let firstCode = firstChar.charCodeAt(); // ! Вземаме номера от ACII таблицата на буквата или знака и го записваме в променливата. 
    let secondCode = secondChar.charCodeAt();


    // ? Тук сравнямваме числата

    let start = Math.min(firstCode, secondCode);
    let end = Math.max(firstCode, secondCode);

  
    let characters = [];

    //? Заврътаме един цикъл от най-малката стойност до най-голямта. 
    for(let i = start + 1; i < end; i++){
        let currentCharacter = String.fromCharCode(i);

        characters.push(currentCharacter);
    }

    console.log(characters.join(' '));

}
solve('a','d');
