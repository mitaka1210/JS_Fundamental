function solve(day) {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "friday", "Saturday", "Sunday"];

    if (day >= 1 || day <= 7 ) {
        console.log(days[day - 1])

    }
    else  {
        console.log("Invalid day!")
    }


}

solve(5);
