// Задание 1


// Напишите функцию, которая принимает массив булевых значений, а возвращает число, которое представляет собой количесво значений true в массиве

// countTrue([true, false, false, true, false]); // -> 2
// countTrue([false, false, false, false]); // -> 0
// countTrue([]); // -> 0




//  const amountTrue = (value) => {
//     const res = [];

//     for(let element of value){
//         if(element){
//             res.push(element);
//         }
//     }
//     return res.length;
//  };

//  const resFinal = amountTrue([true, false, false, true, false]);
//  const resFinal2 = amountTrue([false, false, false, false]);
//  const resFinal3 = amountTrue([]);
// console.log(`resFinal`, resFinal)
// console.log(`resFinal`, resFinal2)
// console.log(`resFinal`, resFinal3)





// Задание 2


// Вам необходимо посчитать количество вхождений каждого элемента в массиве. Результатом работы написанного вами метода должен быть объект, где ключами являются елементы массива а их значениями - количесво раз, которое каждый конкретный элемент встречается в массиве. В массиве гарантировано находятся исключительно строки.

// getOccurrencesCount(["a", "v", "a", "b", "b"]);
// // {
// //   a: 2,
// //   v: 1,
// //   b: 2,
// // }

// getOccurrencesCount([
//   "apples",
//   "oranges",
//   "pears",
//   "pears",
//   "apples",
//   "oranges",
//   "oranges",
//   "pears",
// ]);
// // {
// //   apples: 2,
// //   oranges: 3,
// //   pears: 3,
// // }



// const getEntryElements = (items) => {
//     const entryElements = {};

//     for(let element of items){
//         if(!entryElements[element]){
//             entryElements[element] = 1;
//         }else{
//             entryElements[element] += 1;
//         }
//     }

//     return entryElements;
// };

// const finalResult = getEntryElements(["a", "v", "a", "b", "b"]);
// const finalResult2 = getEntryElements([
//        "apples",
//        "oranges",
//        "pears",
//        "pears",
//        "apples",
//        "oranges",
//        "oranges",
//        "pears",
//     ])
// console.log(`finalResult`, finalResult)
// console.log(`finalResult`, finalResult2)





// Задание 3


// Вам предоставляется массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает это «лишнее» N.

// findExcess([0, 1, 2]); // -> 1
// findExcess([1, 2, 3]); // -> 2
// findExcess([2, 6, 8, 10, 3]); // -> 3
// findExcess([0, 0, 3, 0, 0]); // -> 3
// findExcess([1, 1, 0, 1, 1]); // -> 0


// const removeUnnecessary = (integers) => {
//     let evenArray = [];
//     let oddArray = [];

//     for(let number of integers){
//         number % 2 == 0 ? evenArray.push(number) : oddArray.push(number);
//     }

//     if(evenArray.length > oddArray.length){
//         return oddArray[0];
//     }else{
//         return evenArray[0];
//     }
// }

// const finalResult = removeUnnecessary([0, 1, 2]);
// const finalResult2 = removeUnnecessary([1, 2, 3]);
// const finalResult3 = removeUnnecessary([2, 6, 8, 10, 3]);
// const finalResult4 = removeUnnecessary([0, 0, 3, 0, 0]);
// const finalResult5 = removeUnnecessary([1, 1, 0, 1, 1]);

// console.log(`finalResult`, finalResult);
// console.log(`finalResult`, finalResult2);
// console.log(`finalResult`, finalResult3);
// console.log(`finalResult`, finalResult4);
// console.log(`finalResult`, finalResult5);