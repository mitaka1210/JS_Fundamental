function person(first,last,age) {

    let obj = {firstName: first, lastName: last, age: age};
            for (let prop in  obj) {
                console.log(`${prop}: ${obj[prop]}`);
            }
}
person(
"Peter", 
"Pan",
"20"
);
