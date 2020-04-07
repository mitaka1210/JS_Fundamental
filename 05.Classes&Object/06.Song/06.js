function songs(arr) {

    let numOfSongs = +(arr.shift());

    //console.log(numOfSongs);
    for (let i = 0; i < arr.length - 1; i++) {

        
        let splitted =  arr[i].split("_");
        let typeList = splitted[0];
        let name = splitted[1];
        let time = splitted[2];
        
        let lastElement = arr[arr.length - 1];
        if (typeList === lastElement) {
            console.log(`${name}`);
        } 
        else if (lastElement === "all") {
            console.log(`${name}`)
        }
    }
}
songs([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']

);
