// Задание 1
// Реализовать регистрацию пользователя в валидацией пароля

// Спрашивать у пользователя имя, фамилию и пароль до тех пор, пока он не введет корректные значения.
// Валидными именем и фамилией явлются любые строки, которые содержат хотя бы 1 символ.
// Валидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра. Примеры корректных паролей: AbCxx12, 1234xY, abcdeF. Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz.
// После валидации данных необходимо отформатировать имя и фамилию и вывести на экран с помощью alert полное имя пользователся в правильном формате. Под форматированием имеется ввиду написание имени и фамилии с большой буквы. Например, если юзер ввел jOhn bROWN, то в результате форматирования должно получится John Brown.
// Hints: вам может понадобится цикл do while, так же советуем разбивать код на отдельные функции, каждая с ОДНОЙ логической целью.

let userName;
let userSurname;
let userPassword;
 

 const authorise = () => {
   

      do{


         bigName = userName.toUpperCase.slice(0, 1);
         littleName = userName.toLowerCase.slice(1);
         bigSurname = userSurname.toUpperCase.slice(0, 1);
         littleSurname - userSurname.toLowerCase.slice(1);


         userName = prompt("Enter your name: ");
         userSurname = prompt("Enter your surname: ");
 
         if(userName.length >= 1 && userSurname.length >= 1){
            alert(bigName + littleName + " " + bigSurname + littleSurname);
            continue;
         }else{
            alert("Enter correct data!");
            continue;
         };
            
         bigLetters = userPassword.indexOf().toUpperCase();
         littleLetters = userPassword.indexOf().toLowerCase();
         numberLetters;


         userPassword = prompt("Enter your password: ");

         if(userPassword.length >= 6 && bigLetters &&  littleLetters && isFinite(userPassword)){
            continue;
         }else{
            alert("Enter correct password! (AbCxx12, 1234xY, abcdeF)");
            continue;
         }


      }while(true);

      alert("Welcome!");


};

authorise();