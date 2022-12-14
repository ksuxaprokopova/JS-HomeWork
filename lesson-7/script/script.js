// Задание 1
// Реализовать функцию, которая составляет расписание

// В цикле спрашивать у пользователя задачу и время, на которое она запланирована. После получения данных, записываем их в объект расписания в формате время: задача
// Окно ввода prompt должно появляться до тех пор пока пользователь не нажмет Esc или кнопку Отмена.
// По окончании работы функция должна вернуть объект с расписанием.
// Вывести распиание в консоль.
// Результат должен иметь приблизительно такой вид:

// {
//   "10:00": "Подъем",
//   "10:15": "Зарядка",
//   "10:30 ": "Завтрак",
// }


const makeScheduleAsk = () => {
    let end = false;
    const makeTimetable = {};

    do{
        let askTime = prompt("Set the time: ");
        let askTask = prompt("Set the task: ");

        if(!askTask || !askTime){
            end = true;
        }else{
            makeTimetable[askTime] = askTask;
            alert("Task added!");
        }
    }while(!end){
        return makeTimetable;
    };
};

let timetable = makeScheduleAsk();
console.log(`timetable`, timetable);







// Задание 2
// Написать функцию, которая находит сумму зарплат работников.

// На вход функция будет получать объект, где значениями в объекте являются СТРОКИ, содержащие размер заработной платы сотрудников компании.
// Необходимо посчитать сумму всех значений и вернуть ее.
// const salaries = {
//   John: "4300.00",
//   Ann: "5700.40",
//   Pete: "4900.95",
// };
// Результатом для данного объекта должно получится число 14901.35.
// Hint: работа с целыми числами более безопасна, чем с десятичными.


// const salaries = {
//     John: "4300.00",
//     Anna: "5700.40",
//     Peter: "4900.95",
// };

// const getSalariesTotal = (salaries) => {
//     let total = 0;
//     for(let name in salaries){
//         console.log(`name`, name);
//         console.log(`salaries[name]`, salaries[name]);
//         total += Number( salaries[name]);
//     }

//     return total.toFixed(2);
// };

// const totalResult = getSalariesTotal(salaries);
// console.log(`totalResult`, totalResult);