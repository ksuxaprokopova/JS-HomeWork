// 1)



// function comparisonNum(){
//     const num1 = Number(prompt('Enter the first number'));
//     const num2 = Number(prompt('Enter the second number'));
//     const comparison = num1 === num2;

//     console.log(`comparison`, comparison);
// }

// comparisonNum()




   
// 2)




// a.

// function getSum( a, b){
//     console.log(`a`, a);
//     console.log(`b`, b);
//     const sum = a + b;
//     console.log(`a + b =`, sum)
// }

// getSum(9, 6);
// getSum(3, 67)


// b.

// const sum = (a, b) => a + b;
// const getSum = sum(36, 87);
// console.log(`getSum`, getSum);


// c.

// function getSum(a, b){
//     return a + b;
// }
// const sum = (a, b)  => a + b;

// const res1 = sum(6,9);
// console.log(`res1`, res1)



// 3)

// function degreeNum( a = 0, degree ){
//     console.log(`a`, a);
//     console.log(`degree`, degree);

//     switch(degree){
//         case 2:
//             console.log(a ** 2);
//             break;
//         case 3:
//             console.log(a**3);
//             break;
//         case 4:
//             console.log(a ** 4);
//             break;
//     }
// }
// degreeNum( 5, 2);
// degreeNum( 6, 3);




// 4)

// function dayWeeks(){
//     const numDay = Number(prompt("Enter a number from 1 to 7"));
//     dayWeeks = numDay;
    

//     switch(numDay){
//         case 1 :
//             console.log("day 1 : monday");
//             break;
//         case 2 :
//             console.log("day 2 : tuesday");
//             break;
//         case 3 :
//             console.log("day 3 : wednesday");
//             break;
//         case 4 :
//             console.log("day 4 : thursday");
//             break;
//         case 5 :
//             console.log("day 5 : friday");
//             break;
//         case 6 :
//             console.log("day 6 : saturday");
//             break;
//         case 7 :
//             console.log("day 7 : sunday");
//             break;
//     }

// }

// dayWeeks()



// 5)

// function greetings(){
//     const userName = prompt("Enter your name.");
//     const userAge = Number(prompt("Enter your age"));

//     if(
//         userAge >= 30
//     ){
//         console.log("Здавствуйте," + userName + "!");
//         return;
//     }else{
//         console.log("Привет, " + userName + "!");
//     }
// }
// greetings()