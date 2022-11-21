// 1)

// const a = 5;
// const b = 10;
// let additionResult;
// let subtractionResult;
// let divisionResult;
// let miltiplicationResult;

// additionResult = a + b;
//     console.log("a + b = ", additionResult);

// subtractionResult = a - b;
//     console.log("a - b = ", subtractionResult);

// divisionResult = a / b;
//     console.log("a / b = ", divisionResult);

// miltiplicationResult = a * b;
//     console.log("a * b = ", miltiplicationResult);



// 2)

// true;
// true;
// false;
// (0||42) 42  true;
// true;
// true;
// false;
// false;
// true;
// true;
// (10|| 0||"") 10 true;
// (10 && dog) dog false;



// 3)

// let number1 = Number(prompt("Enter the first number"));
// let number2 = Number(prompt("Enter the second number"));

// if (number1 > number2){
//     alert( number1 + " more than " + number2);
// }else if( number1 < number2){
//     alert(number1 + " less than " + number2);
// }else{
//     alert(number1 + " equal " + number2);
// }



// 4)

let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let action = (prompt("Enter the desired action( +, -, *, /)"));

const sumResult = num1 + num2;
let differenceResult = num1 - num2;
let miltiplicationResult = num1 * num2;
let divisionResult = num1 / num2;

switch(action){
    case "+": 
        alert(" Result = " + sumResult);
        break;
    case "-":
        alert(" Result = " + differenceResult);
        break;
    case "*":
        alert(" Result = " + miltiplicationResult);
        break;
    default:
        alert(" Result = " + divisionResult);
}



// 5)

// const MIN_AGE = 12;
// const minMaxAge = 18;
// const MAX_AGE = 80;
// const maxMinAge = 60;
// const visitorAge = Number(prompt("How old are you?"));
// let permissionMinAge;
// let permissionMaxAge;


// if(visitorAge >= MIN_AGE && visitorAge < minMaxAge){
//     permissionMinAge = confirm("Do you have permission from your parents?");
//     if(permissionMinAge) {alert("Well, entry is allowed!");}
//     else{alert("Sorry, you are not allowed to enter!")}
// }else if( visitorAge >= maxMinAge && visitorAge < MAX_AGE){
//     permissionMaxAge = confirm("You have a companion under 60 years age?");
//     if(permissionMaxAge){alert("If you are sure entry is a allowed.");}
//     else{alert("Sorry, you are not allowed to enter!")}
// }else if( visitorAge < MIN_AGE || visitorAge > MAX_AGE){
//     alert("Sorry, you are not allowed to enter!");
// }else{
//     alert("We`re glad to see you, entry allowed!")
// }