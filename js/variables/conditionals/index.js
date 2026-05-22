let age = 18;
if (age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are not an adult")
}



let mark = 60;

if (mark >= 90){
    console.log("Your grade A");
}else if (mark >= 70){
    console.log("Your garde B ");
}else{
    console.log("Your grade C");
}



let day = "friday";
switch (day){
    case "Sunday":
        console.log("Sunday");
        break;
    case "Monday":
        console.log("Monday");
        break;
    default:
    console.log("Invalid day");
}


let text_day = 3;
switch (text_day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursady");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
    console.log("Invalid day");
}