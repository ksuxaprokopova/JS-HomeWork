// Задание 1


// Используя разные типы циклов (for, while и do while) выведите в консоль числа в промежутке от 1 до 10. Потренируйтесь, и с помощью этих же циклов выведите числа от 20 до 10, в порядке уменьшения.



// for(let i = 1 ; i <=10 ; i++) {
//     console.log(`i`, i);
// }

// for(let j = 20 ; j>= 10 ; j--) {
//     console.log(`j`, j);
// }


// let k = 1;
// while( k <= 10 ) {
//     console.log(`k`, k);
//     k++;
// }


// let l =20;
// while( l >=10) {
//     console.log(`l`, l);
//     l--;
// }


// let a = 1;
// do {
//     console.log(`a`, a);
//     a++;
// }while ( a  <= 10 );

// let b = 20;
// do {
//     console.log(`b`, b);
//     b--;
// }while( b >= 10 );




// Задание 2


// Вывести простые числа в заданном промежутке

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Реализуте функцию, которая будет принимать 2 аргумента (от какого до какого числа искать простые числа)
// Поочередно выведите в консоль простые числа из данного промежутка.
// Например:

// для промежутка 1 и 10 результат будет 2,3,5,7
// для 20 и 100 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97



// let naturalNumbers = (start, finish) => {
//     nextPrice:
//     for (let i = start ; i <= finish; i++){
//         for (let j = 2; j < i; j++){
//             if ( i % j == 0){
//                continue nextPrice;
//             }
//         }
//         console.log(i);
//     }
// }

// naturalNumbers(2, 30);




// Задание 3* (опциональное)


// Дополнить классную работу счетчиком количества попыток

// Пользователь иммет только 3 попытки авторизации. Попробуйте разные варианты реализации, через цикл for и цикл while. отправьте на проверку более элегантный по вашему мнению вариант.

// При использовании каждой попытки пользователю должен показываться alert с сообщением об оставшемся количесве попыток



//  const LOGIN = "ADMIN";
//  const PASSWORD = "1q2w3e";

//  const authorise = () => {
//     let userPassword;
//     let userLogin;
//     let isAuthSuccess = false;

//             do {

//                 for (let i = 3 ; i >=1 ; i--){
//                     alert("Колличество попыток авторизации:" + i );


//                     userLogin = prompt("Логин: ");
//                     if(!userLogin){
//                         alert("Введите логин!");
//                         continue;
//                     }
    
//                     userPassword = prompt("Пароль: ");
//                     if(!userPassword){
//                         alert("Введите пароль!");
//                         continue;
//                     }
    
//                     if(userPassword === PASSWORD || userLogin === LOGIN){
//                         isAuthSuccess = true;

//                         break; 
//                     }else {
//                         alert("Данные не верны!");
//                     } 

//                     if( i === 1 || isAuthSuccess){
//                         alert("Вы не прошли авторизацию!");
//                         return;
//                     }
//                 } 

//             }while(!isAuthSuccess){
//                 alert("Welcome!");
                
//             }
        
//  };

//  authorise();