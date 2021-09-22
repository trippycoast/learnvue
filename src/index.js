let bool = true;
bool = false;

let num = 1;

// if(num > 10 && num < 100){
//     console.log("suurem");
// }


if(num > 10 ){
    console.log("suurem");
} else if(num == 10){
    console.log("võrdne");
} else {
    console.log("väiksem");
}

let option = 6;

switch(option) {
    case 1: 
        console.log('üks');
        break;
    case 2:
        console.log('kaks');
        break;
    case 3: 
    case 4:
        console.log('kolm v neli');
        break;
    default: 
        console.log('dunno lol');
}
