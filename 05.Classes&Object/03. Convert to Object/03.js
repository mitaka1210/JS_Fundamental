function convertToObj(str) {
    
    let person = JSON.parse(str);
    
    for (const key in person) {

        console.log(`${key}: ${person[key]}`);
    }
}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
