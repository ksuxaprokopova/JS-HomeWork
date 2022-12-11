// Задание 1


// Дана пара переменных:

// const a = 5;
// const b = 10;
// Проведите все доступные в JS математические операции с этими переменными (+, -, /, *). Результат каждой операции выведите в консоль. Подпишите каждое значение, что бы было понятно, чем является каждое значение в консоли.

// P.S. Всегда подписывайте значения, которые выводите в консоль. Это хорошая привычка, которая поможет вам не путаться в будущем.


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



// Задание 2


// Без запуска кода ответьте, какое значение будет результатом каждого из выражений ниже, а также напишите, является это значние правдивым или ложным.



// true && true 
// false || true 
// true && 'false'
// 0 && 1 || ' ' && 42
// null == undefined 
// '' == 0
// 1 === '1'
// NaN === NaN && true
// true || false && true || false
// (true || false) && (true || false)
// 10 || 0 && 'dog' || ''
// (10 || 0) && ('dog' || '')

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



// Задание 3


// Спросить с помощью prompt у пользователя 2 числа и записать их в переменные.
// Сравнить полученные числа.
// С помощью alert вывести на экран сообщение о том, какое число больше. Если числа равны - сообщить что числа равны
// Например:

// Пользователь ввел числа 2 и 5 - вывести на экран сообщение Число 5 больше, чем число 2
// Пользователь ввел числа 10 и 10 - вывести на экран сообщение Числа равны
// Подсказка: Воспользуйтесь условным оператором if. Для того что бы вывести итоговое сообщение, вам понадобится конкатенация строк. Если интересно, почитайте про синтаксис шаблонных строк в js и воспользуйтесь им вместо конкатенации.



// let number1 = Number(prompt("Enter the first number"));
// let number2 = Number(prompt("Enter the second number"));

// if (number1 > number2){
//     alert( number1 + " more than " + number2);
// }else if( number1 < number2){
//     alert(number1 + " less than " + number2);
// }else{
//     alert(number1 + " equal " + number2);
// }



// Задание 4* (опциональное)


// Реализовать калькулятор используя prompt и alert.

// Последовательно спросить у пользователя два числа и желаемое действие.
// Действия могут быть следующие: + - / *
// Выполнить математическую операцию с полученными значениями.
// Результат показать пользователю
// Подсказка: В данном задании используйте оператор switch case



// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// let action = (prompt("Enter the desired action( +, -, *, /)"));

// const sumResult = num1 + num2;
// let differenceResult = num1 - num2;
// let miltiplicationResult = num1 * num2;
// let divisionResult = num1 / num2;

// switch(action){
//     case "+": 
//         alert(" Result = " + sumResult);
//         break;
//     case "-":
//         alert(" Result = " + differenceResult);
//         break;
//     case "*":
//         alert(" Result = " + miltiplicationResult);
//         break;
//     default:
//         alert(" Result = " + divisionResult);
// }



// Задание 5* (опциональное)


// Напишите простую программу допуска посетителей на американские горки. Необходимо спросить у пользователя возраст, далее проанализровать и дать ему ответ о допуске на аттракцион.

// Возможные варианты:

// пенисионерам (60-80 лет) и подросткам (12-18 лет) доступ разрешен с разрешения взрослых. По этому если возраст посетителя находится в указанных возрастных диапазонах, то нужно дополнительно спросить его о разрешении от взрослых.
// взрослым вход разрешен
// детям и очень пожилым людям вход запрещен
// Подсказка: для обработки первого варианта вы можете использовать условный оператор if внутри другого, то есть воспользоваться вложенной конструкцией.



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