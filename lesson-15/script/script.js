// Задание 1 

// Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:

// total, из объекта paging, который вложен в объект meta
// значение is_active, которое принадлежит первому объекту в массиве data. Переименуйте переменную в isActive.
// const response = {
//     data: [
//         {
//            username: "samuel",
//            is_active: true,
//            created_at: "2020-11-20T09:53:50.000000Z",
//         },
//         {
//            username: "john",
//            is_active: false,
//            created_at: "2020-11-20T09:53:50.000000Z",
//         },
//         {
//            username: "peter",
//            is_active: false,
//            created_at: "2020-11-20T09:53:50.000000Z",
//         },
//     ],
//     meta: {
//         paging: {
//         current: 1,
//         next: 2,
//         prev: null,
//         total: 14,
//         per_page: 3,
//         },
//     },
// };

// const {
//     meta:
//         {
//             paging: {total: result}
//         },
//     data:
//         [
//             fistIsActive
//         ],   

//     }
//  = response;

// const { is_active } = fistIsActive;
// const isActive = is_active;

// console.log(`result`, result);
// console.log(`isActive`, isActive);






// Задание 2


// Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:

// name
// surname
// все остальные свойста (height, age) должны быть присвоены объекту parameters.
// const user = {
//   name: "gabriel",
//   surname: "brown",
//   age: 17,
//   height: 178,
// };

// const{ name, surname, ...parameters } = user;

// console.log(`name`, name);
// console.log(`surname`, surname);
// console.log(`parameters`, parameters)






// Задание 3


// const handleMax = ( ...numbers) => {
//     let max = 0;

//     numbers.forEach((num) => {
//       if(num > max){
//         max = num
//       };
//     });

      

//   return max;
// };

// console.log( handleMax(6, 5, 7, 11))
// Переделайте функцию max таким образом, что бы она принимала любое количество аргументов (при условии, что все они являются числами, и возвращала максимальное из них). P.S. В данной задаче нельзя использовать Math.max()





// Задание 4 



// Переделайте функцию createMessage таким образом, что бы на вход передавались не 4 аргумента, а один объект. Деструктузизуйте его в прямо в аргументах или в теле функции, и присвойте значения по умолчанию:

// Guest для поля author
// текущую дату для поля time
// const createMessage = (author, text, reciever, time) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// };
// const message = createMessage("Peter", "Hello", "Sam", new Date());
// console.log(message);

// const createNewMessage = ( author = "guest", text, reciever, time = new Date()) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// } 

// // // после выполнения этого задания, функция должна коректно работать с таким аргументом
// const messageNew = createNewMessage({
//   reciever: "John",
//   text: "Hi!",
// });

// // const messageNew = createNewMessage("John", "Hi!")
// console.log(messageNew);





// Задание 5


//1)
//  Напишите регулярное выражение, которое находит подстроки с такими свойствами:
//  начинается с буквенного символа
// заканчивает на буквенный символ
// между первым и послденим символом находятя только числовые символы
// для поиска используйте метод match

let strOne = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
let regexpOne = /\w\d+\w/gi;
console.log(strOne.match(regexpOne));

// // для строки str результат должен быть следующий: 
// // [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]



// 2)
// Напишите регулярное выражение для валидации домена (адреса сайта)
// Валидные домены: ex.ua, google.com, yandex.ru, site.com.ua, my-page.com
// то есть, доменные имена начинаются с любого количества буквенных символов, чисел, символов - _ ., заканчиваются подстрокой, длина которой не менее 2 символов. Начало и конец обязательно разделены точкой
// используйте метод test

let strTwo = "ex.ua, google.com, yandex.ru, site.com.ua, my-page.com";
let regexpTwo = /([a-z._-]+).([\w]{2,})/gi

console.log(strTwo.match(regexpTwo));
console.log(regexpTwo.test(strTwo));



// 3)
// Напишите регулярное выражаение, которое проверяет строку:
// строка не должна содержать ничего кроме числовых символов
// длина строка должна быть не менее 12, но можно и больше
// Тестируйте свои регулярки тут: https://regex101.com

let strFree = "5588889030008808088";
let regexpFree = /(\d+){12,}/gi;

console.log(strFree.match(regexpFree));
