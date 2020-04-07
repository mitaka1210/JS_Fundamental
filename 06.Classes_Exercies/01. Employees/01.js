function namePerson(arr) {
    
    //let num = (arr.map(arr => arr.length)); //? дължината на елементите на масива.
    let person = [];

    for (const personName of arr) {
        
        let obj = {
            name: personName,
            personName: personName.length,
        }

        person.push(obj);
    };
    
    for (const persons of person) {
        console.log(`Name: ${persons.name} -- Personal Number: ${persons.personName}`);
    }
 
};


namePerson(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);
