function cityPopulation(name,area,population,country,postcode) {
    
    let obj = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postcode

    }


    for (const key in obj) {

        console.log(`${key} -> ${obj[key]}`);
    }
}
cityPopulation("Sofia"," 492", "1238438", "Bulgaria", "1000");
