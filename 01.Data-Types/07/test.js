function getName() {

    console.log(this.name);
    
    
}

function get() {
    

    let student = {
        name: "Pesho"
    }
    let student2 = {
        name: "Kolio"
    }
    let student3 = {
        name: "Gosho"
    }
    let student4 = {
        name: "ivan"
    }
}

getName.call(student2);
