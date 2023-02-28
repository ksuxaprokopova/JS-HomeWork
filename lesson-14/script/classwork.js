// Задание:
// Создать форму с валидацией полей.
// 1. Форма должна содержать следующие поля:
// -login,
// -email,
// -password, 
// -чекбокс, который подтверждает согласие на обработку данных.
// 2. Действие при сабмите формы должно определяться из-вне, т.е. может быть разным, при нажатии разных кнопок.
// 3. Сабмит  формы не должен перегружать страницу. 
// 4. Форма должна  проходить  валидацию по следующим правилам:
// -все поля должны быть заполнены,
// -пароль должен содержать минимум 6 символов, 
// -логин должен быть уникальным(массив занятых логично для примера предоставляется).
// 5. Валидация  проходит  в момент  отправки  формы,  если пользователь ввёл не корректные  данные, то отправка прекращается, а под те импуты, в которые  введены  не корректные  данные, выводится сообщение об ошибке.
// 6. Если не стоит галочка о согласии обработки данных-форма не может  быть  отправлена 
// 7. В результате  успешного  сабмита   формы (данные валидны) , отобразится в консоли объект,  содержащий емайл, логин и пароль

const takenLogins = ["alexxx", "john_cena", "sam", "ANDROMEDA2000"];



// - сабмит формы
// - провести валидацию
//    {
//         isFormsValid: true || false,
//         erorrs: {
//           login: ' Вы не ввели логин',
//           password: ' Вы ввели пароль менее 6ти символов',
//           email: '  Введите корректный логин'
//           }
//     }
// - если данные валидны, вывести значение в консоль
// - если не валидны , подсветкой импут с ошибочным значениями, вывести  под ним текст  ошибки
// - при изменении чекбокса, проверять его значение, в зависимости  от него убирать или добавлять атрибут disabled кнопок


const form = document.getElementById("form");
const formInputs = document.querySelectorAll("input[type=text]");
const agreeCheckbox = document.getElementById("agree");
const submitBtn = document.getElementById("submit");

const loginInput = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const simpleValidateForm = (login, email, password) => {
    // console.log(`login`, login);
    // console.log(`email`, email);
    // console.log(`password`, password);

    const errors = {};
    let isFormsValid = true;



    if(!login){
        isFormsValid = false;
        errors.login = "Вы не ввели логин";
    };
    if(!email){
        isFormsValid = false;
        errors.email = "Вы не ввели e-mail";
    };
    if(!password){
        isFormsValid = false;
        errors.password = "Вы не ввели пароль";
    };


    if(password !== "" && password.length < 6){
        isFormsValid = false;
        errors.password = "Ваш пароль содержит менее 6-ти символов";
    };


    if(takenLogins.includes(login)){
        isFormsValid = false;
        errors.login = "Этот логин уже занят";
    };

    return {
        errors,
        isFormsValid,
    };
};



const handleCheckboxChange = (event) => {
    const checked = event.target.checked;

    if(checked){
        submitBtn.removeAttribute("disabled");
    }else{
        submitBtn.setAttribute("disabled", "");
    }
};



const highlightErroredInputs = (errors) => {
    for(let name in errors){
        const text = errors[name];
        

        const erroredInput = form.querySelector(`input[name=${name}]`);
        // console.log(`erroredInput`, erroredInput);

        const errorTextElement = form.querySelector(
            `input[name=${name}] ~ .errorMessage`
        );
        // console.log(`errorTextElement`, errorTextElement);

        erroredInput.setAttribute("data-invalid", "");
        errorTextElement.innerText = text;

        return text;
    };
   
};



const handleInput = (event) => {
    const currentInput = event.target;

    if(currentInput.hasAttribute("data-invalid")){
        currentInput.removeAttribute("data-invalid");
    };

    const errorTextElement = form.querySelector(
        `input[name=${currentInput.name}] ~ .errorMessage`
    )

    errorTextElement.innerText = "";

};



const handleFormsSubmit = (event) => {
    event.preventDefault();

    const loginValue = loginInput.value;
    const emailValue = emailInput.value;
    const passwordValue =passwordInput.value;

    const validationResult = simpleValidateForm(
      loginValue, 
      emailValue, 
      passwordValue
    )

    if(!validationResult.isFormsValid){
        highlightErroredInputs(validationResult.errors)
    }else{
        console.log({
            login: loginValue,
            email: emailValue,
            password: passwordValue,
        })
    };

    console.log("vaidationResult", validationResult);
};

agreeCheckbox.addEventListener("change", handleCheckboxChange);
form.addEventListener("submit", handleFormsSubmit);
formInputs.forEach((input) =>{
    input.addEventListener("input", handleInput)
});

