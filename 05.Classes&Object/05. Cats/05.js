function nameCat(arr) {

        class Cat{

            constructor(name,age){
            
                this.name = name;
            
                this.age = age;



            this.meow = () => {
                console.log(`${name}, age ${age} says Meow`);
            }
        
        }
    }
    
    arr.forEach(element => {
       let [name, age] = element.split(' ');
       let cat = new Cat (name,age);
       cat.meow();  
    });
   
  

}

nameCat(['Mellow 2', 'Tom 5']);
