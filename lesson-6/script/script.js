// Задание 1
// Реализовать регистрацию пользователя в валидацией пароля

// Спрашивать у пользователя имя, фамилию и пароль до тех пор, пока он не введет корректные значения.
// Валидными именем и фамилией явлются любые строки, которые содержат хотя бы 1 символ.
// Валидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра. Примеры корректных паролей: AbCxx12, 1234xY, abcdeF. Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz.
// После валидации данных необходимо отформатировать имя и фамилию и вывести на экран с помощью alert полное имя пользователся в правильном формате. Под форматированием имеется ввиду написание имени и фамилии с большой буквы. Например, если юзер ввел jOhn bROWN, то в результате форматирования должно получится John Brown.
// Hints: вам может понадобится цикл do while, так же советуем разбивать код на отдельные функции, каждая с ОДНОЙ логической целью.



const stringUpperLetter = (userString) =>{
   const firstLetterString = (userString[0]).toUpperCase();
   const lastLettersString = (userString.slice(1)).toLowerCase();

   return firstLetterString + lastLettersString;
};




const userRegistrationName = () => {
   let userName;

   do{
      userName = prompt("Enter your name: ");

      if(!userName){
         alert("You didn`t enter your name!");
      }else{
         break;
      }
   }while(true);

   nameUpperCase = stringUpperLetter(userName);

   return nameUpperCase;
};




const userRegistrationSurname = () => {
   let userSurname;

   do{
      userSurname = prompt("Enter your surname: ");

      if(!userSurname){
         alert("You didn`t enter your surname!");
      }else{
         break;
      }
   }while(true);

   surnameUpperCase = stringUpperLetter(userSurname);

   return surnameUpperCase;
};





const userRegistrationPassword = () => {
   let userPassword;
    do{
      userPassword = prompt("Enter your password(password must contain at least 6 characters and mixed case characters): ");

      if(!userPassword || userPassword.length <= 6){
         alert("Password must contain at least 6 characters!");
      }else if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || userPassword.toUpperCase() === userPassword){
         alert("Incorrect password!");
      }else{
         alert("Registration successful!");
         break;
      }
    }while(true);

    return userPassword;
};



const correctName = userRegistrationName();
const correctSurname = userRegistrationSurname();
const correctPassword = userRegistrationPassword();


alert(`You are registered under the name: ${correctName} ${correctSurname}.
Your password: ${correctPassword}`);


stringUpperLetter();
userRegistrationName();
userRegistrationSurname();
userRegistrationPassword();





// Задание 2
// Реализовать функцию - генератор случайных чисел в заданном промежутке

// Функция должна принимать на вход 2 числа, которые являются границами промежутка.
// Функция должна возвращать случайное число, которое большое или равно меньшего числа и меньше или равно большего.

// const getRandomNumber = (min, max) => {
//    const random = min + Math.random(min) * (max + 1 - min);

//    return Math.floor(random);
// };

// const resRandom = getRandomNumber(5, 45);
// console.log(`resRandom`, resRandom);