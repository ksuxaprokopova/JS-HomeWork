// 1)

const a = 5;
const b = 10;
let additionResult;
let subtractionResult;
let divisionResult;
let miltiplicationResult;

additionResult = a + b;
    console.log("a + b = ", additionResult);

subtractionResult = a - b;
    console.log("a - b = ", subtractionResult);

divisionResult = a / b;
    console.log("a / b = ", divisionResult);

miltiplicationResult = a * b;
    console.log("a * b = ", miltiplicationResult);



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

let number1 = Number(prompt("Enter the first number"));
let number2 = Number(prompt("Enter the second number"));

if (number1 > number2){
    alert( number1 + " more than " + number2);
}else if( number1 < number2){
    alert(number1 + " less than " + number2);
}else{
    alert(number1 + " equal " + number2);
}