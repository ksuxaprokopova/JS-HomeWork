// Задание 1
// Реализовать регистрацию пользователя в валидацией пароля

// Спрашивать у пользователя имя, фамилию и пароль до тех пор, пока он не введет корректные значения.
// Валидными именем и фамилией явлются любые строки, которые содержат хотя бы 1 символ.
// Валидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра. Примеры корректных паролей: AbCxx12, 1234xY, abcdeF. Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz.
// После валидации данных необходимо отформатировать имя и фамилию и вывести на экран с помощью alert полное имя пользователся в правильном формате. Под форматированием имеется ввиду написание имени и фамилии с большой буквы. Например, если юзер ввел jOhn bROWN, то в результате форматирования должно получится John Brown.
// Hints: вам может понадобится цикл do while, так же советуем разбивать код на отдельные функции, каждая с ОДНОЙ логической целью.


 

 const authorise = () => {

    let userName;
    let userSurname;
    let userPassword;



    do{

        userName = prompt("Enter your name: ");
        userSurname = prompt("Enter your surname: ");

        let firstLetterName = userName.slice(0, 1);
        let firstLetterSurname= userSurname.slice(0, 1);
        let lastLetterName = userName.slice(1);
        let lastLetterSurname = userSurname.slice(1);
        let lastName = `${firstLetterName.toUpperCase}${lastLetterName.toLowerCase} ${firstLetterSurname}${lastLetterSurname}`;



        if(userName.length >= 1 && userSurname.length >= 1){
           alert(lastName);
        }else{
           alert("Enter correct data!");
        };

        userPassword = prompt("Enter your password: ");
        if(userPassword.length >= 6 ){

        }

    }

 };

authorise();