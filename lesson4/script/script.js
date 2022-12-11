// Задание 1


// Напишите функцию, которая будет принимать 2 числа в качесте аргументов и возвращать результат их сравнения.
// Если числа равны - функция должна вернуть true
// Если не равны - false.
// P.S. Подумайте над разными вариантами решения этой задачи.



// function comparisonNum(){
//     const num1 = Number(prompt('Enter the first number'));
//     const num2 = Number(prompt('Enter the second number'));
//     const comparison = num1 === num2;

//     console.log(`comparison`, comparison);
// }

// comparisonNum()




   
// Задание 2


// Написать функцию для получения суммы чисел, которая принимает в себя 2 числа в качестве аргументов, и возвращает их сумму. Необходио написать 2 варианта, как стрелочную, так и обычную функции.
// Вызовите ее несколько раз с разными значениями.




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

// const res1 = getSum(6,9);
// console.log(`res1`, res1)



// Задание 3


// Напишите функцию для возведения числа в степень
// функция принимает 2 аргумента, число, с которым нужно провести операцию и необходимую степень
// степень является НЕОБЯЗАТЕЛЬНЫМ аргументом, значением по умолчанию является число 2
// функция должна вернуть результат операции



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




// Задание 4


// Реализуйте функцию, которая будеи принимать в себя число от 1 до 7, а возвращать строку, которая будет собой представлять день недели.
// В случае, если число не соответсвует дню недели, верните строку "Такого дня нет"
// yourFunction(2) // Вторник
// yourFunction(6) // Суббота
// yourFunction(10) // Такого дня нет



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



// Задание 5* (необязательное)


// Написать функцию, которая будет спрашивать у пользователя его имя и возраст, и с помощью alert приветствовать его.
// Далее, если возраст больше 30, то показать сообщение с приветсвием Здавствуйте, <Имя Пользователя>
// Если меньше, сообщением будет Привет, <Имя Пользователя> (в треугольных скобках должно быть значение имени, введенной пользователем)

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