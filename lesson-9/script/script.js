// Задание 1


// 1.1
// С помощью метода массива map преобразуйте массив чисел в массив булевых значений.
// Принцип преобразования следующий: если число больше 0, в итоговый массив записывается true, если меньше - false.
// [1, 2, -10, -2, 7]; // -> [true, true, false, false, true]



// const digitsArr = [1, 2, -10, -2, 7, 4, -77, 11, -9];

// const resultArr = digitsArr.map((digit) => {
//     if(digit > 0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(`resultArr`, resultArr);




// 1.2
// Дан массив пользователей (в примере ниже)

// Напишите функцию, которая с помощью комбинации методов массива filter и map будет возвращать массив имен взролых (старше 18 лет) администраторов (role === 'admin').

// const users = [
//   {
//     name: 'Sam',
//     role: 'admin',
//     age: 25,
//   },
//     {
//     name: 'Peter',
//     role: 'admin',
//     age: 16,
//   },
//     {
//     name: 'Pablo',
//     role: 'admin',
//     age: 32,
//   },
//     {
//     name: 'Enrico',
//     role: 'client',
//     age: 43,
//   },
//     {
//     name: 'Mary',
//     role: 'client',
//     age: 34,
//   },
//     {
//     name: 'Katerine',
//     role: 'guest',
//     age: 17,
//   },
// ];

// const adultsAdmins = users
//     .filter((user) => user.role === "admin")
//     .filter((user) => user.age >= 18)
//     .map((user) => user.name)


// console.log(`adultAdmin`, adultsAdmins);





// 1.2
// Дан массив чисел
// С помощью метода reduce вычислите среднее арифметическое чисел в массиве.


// const numbers = [1, 10, 17, 24, 45];

// function arithmeticMean(acc, number, index) {
//     const sum = acc + number;

//     if ( index === numbers.length -1 ){
//         return sum / numbers.length
//     };
//     return sum;
//   }

// const result = numbers.reduce(arithmeticMean, 0)
// console.log(`numbers`, numbers);
// console.log(`result`, result);




// Задание 2


// Написать собственную реализацию методов массива map, forEach, filter

// Это могут быть функции под названием ownMap, ownForEach, ownFilter.
// На вход они должны принимать массив, с которым необходимо осущуествить действие, и колбек-функцию, которая применится к каждому из элементов массива.
// Встроенные методы массива map, forEach, filter испольовать запрещено.
// Пример работы:

// const isNegative = (number) => number < 0;
// const increment = (number) => number + 1;
// const logger = (element, index, array) => {
//   console.log(`In array [${array}] on position ${index}: ${element}`);
// };

// ownForEach = (arr, logger) => {
//   for(let num of arr){
//     logger(num, arr.indexOf(num), arr);
//   };
// };
// ownForEach([1, 2, 3], logger);

// const ownMap = (arr, increment) => {
//   let arrClone = [];
  
//   for(let num of arr){
//     arrClone.push(increment(num));
//   }
//   return arrClone;
//  };

// let resultOwnMap = ownMap([1, 2, 3], increment);
// console.log(`resultOwnMap`, resultOwnMap);

 
// const ownFilter = (arr, isNegative) => {
//   let arrClone = [];

//   for(let num of arr){
//     if(isNegative(num) === true){
//       arrClone.push(num);
//     };
//   }
//   return arrClone;
// };
//  let resultOwnFilter = ownFilter([-2, 4, -1], isNegative);
//  console.log(`resultOwnFilter`, resultOwnFilter);


// Вы можете испольвать уже готовые колбек-функции isNegative, increment, logger, для тестов, или напсиать свои. Работа будет проверяться на основе предоставленых функций, так что советуем проверить работу на них.





// Задание 3* (опциональное)


// Написать универсальную функцию для фильтрации массива объектов

// Функция принимает на вход 2 аргумента, первый это массив данных, второй - объект содержащий данные для фильтрации.

// На выходе результатом должен быть массив сожержащий объекты в которых нашлись совпадения.

// Учтите, что функция должна быть универсальной и работать с любыми объектами одного уровня вложенности.

// Пример (данные можно взять любые другие):

const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

// filterData(data, { age: 23 });
// // [
// //     {
// //         "name": "Steve",
// //         "age": 23,
// //         "position": "middle",
// //         "isActive": true
// //     }
// // ]

// filterData(data, { age: 24 });

// // [
// //     {
// //         "name": "John",
// //         "age": 24,
// //         "position": "senior",
// //         "isActive": false
// //     },
// //     {
// //         "name": "Mary",
// //         "age": 24,
// //         "position": "middle",
// //         "isActive": false
// //     }
// // ]

// filterData(data, { age: 19, position: "junior" });
// // [
// //     {
// //         "name": "Sally",
// //         "age": 19,
// //         "position": "junior",
// //         "isActive": false
// //     }
// // ]

// // то есть, функция вернула массив со всеми работниками на позиции junior и всеми работниками, которым 19 лет

const  filterData =(dataArr, objectForFilter) => {
  let result = dataArr.filter((item) => {
    console.log(`keys:`, Object.keys(objectForFilter));
    return Object.keys(objectForFilter).every( key => {
      console.log(`item`, item[key]);
      console.log(Object.keys(objectForFilter));
      return item[key] === objectForFilter[key];
    });
  })
  return result;

};

let result1 = filterData(data, { age: 23 });
let result2 = filterData(data, { age: 24 });
let result3 = filterData(data, { age: 19, position: "junior" });
console.log(`result1`, result1);
console.log(`result2`, result2);
console.log(`result3`, result3);



