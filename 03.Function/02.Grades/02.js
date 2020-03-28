function grades(number) {
    
    if (number >= 2.00 && number <= 2.99) {
        console.log("Fail")
    }
    else if (number >= 3.00 && number <= 3.49 ){
        console.log("Poor");
    }
    else if (number >= 3.50 && number < 4.49 ){
        console.log("Good");
    }
    else if (number >= 4.50 && number <=5.49 ){
        console.log("Very good");
    }
    else if (number >= 5.50 && number < 6.00 ){
        console.log("Excellent");
    }
   
}
 grades(4.50);
