
// Из массива с данными создать форму и обработать событие ее отправки.

// Вам предоставляется массив данных, коллекция, где каждый объект характеризует поле ввода, которое необходимо отобразить на экране.
// Поля ввода могут быть следующих типов:
// текстовое поле (обычный инпут) - text
// селект - select
// Модель данных, описывающих неободимое поле ввода, следующая:
// element: описывает какой елемент создать: текстовое поле или select

// name: имя для поля ввода (атрибут name)

// label: значение, которое отображается в теге label для текущего поля

// options: массив вариантов option, будет присутсвовать, если значение поля element = 'select', то есть текущее поле ввода - селект

// Массив options представлен в следующей модели данных:
// text: значение, которое показывается пользователю

// value: значение атрибута value тега option

// При сабмите формы страница НЕ должна перезагружаться
// Результатом сабмита формы должен быть объект, в котором хранятся все значения, введенные пользователем. Ключами, по которым хранятся значения, должны быть значения атрибута name соответствущего поля ввода.
// Каждое поле ввода + label к нему требуется завернуть в div.
// В форме обязательно должна содержаться button type=submit.
// Форма должна быть создана полностью средствами JavaScript. В html файле должно быть пусто, максимум только элемент-контейнер, в который вы в последсвии добавите форму.
// Вы можете использовать любые стили и дополнительные элементы. Главное выполнить все по заданию.
// Примеры: Для поля ввода, которое описано следующим образом - результатом должна быть такая верстка:

// {
//   element: 'text',
//   name: 'login',
//   label: 'Логин',
// }
// <div>
//   <label for="login">Логин</label>
//   <input type="text" name="login" id="login" />
// </div>
// {
//   element: 'select',
//   name: 'fruits',
//   label: 'Выберите фрукты',
//   options: [
//     {
//       text: 'Апельсины',
//       value: 'oranges',
//     },
//     {
//       text: 'Яблоки',
//       value: 'apples',
//     },
//     {
//       text: 'Груши',
//       value: 'pears',
//     },
//   ]
// }
// <div>
//   <label for="fruits">Выберите фрукты</label>
//   <select name="fruits" id="fruits">
//     <option value="oranges">Апельсины</option>
//     <option value="apples">Яблоки</option>
//     <option value="pears">Груши</option>
//   </select>
// </div>
// При следующих вводных данных у вас должен получится примерно такой результат (стили не применялись):

const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык программирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];


const handleForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    for(let pair of formData.entries()){
        data[pair[0]] = pair[1];
    }
};


const createInput = (inputData) => {
    const input = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("id", inputData.name);
    input.setAttribute("name", inputData.name);
    input.classList.add("input");

    return input;
};



const createSelect = (selectData) => {
    const select = document.createElement("select");

    select.setAttribute("id", selectData.name);
    select.setAttribute("name", selectData.name);

    selectData.options.forEach((opt) => {
        const option = document.createElement("option");
        
        option.innerText = opt.text;
        option.setAttribute("value", opt.value);

        select.append(option);
    });

    return select;
};



const createForm = (arrFormData) => {
    const form = document.createElement("form");
    const buttonSubmit = document.createElement("button");

    buttonSubmit.setAttribute("type", "submit");
    buttonSubmit.innerText = "submit";

    buttonSubmit.classList.add("submit");
    

    arrFormData.forEach((formElement) =>{
        const divWrapper = document.createElement("div");
        const label = document.createElement("label");


        label.setAttribute("for", formElement.label);
        label.innerText = formElement.label;


        if(formElement.element === "text"){
            const input = createInput(formElement);

            divWrapper.append(label, input);
        }else if(formElement.element === "select"){
            const select = createSelect(formElement);
            divWrapper.append(label, select);
        }

         

        form.append(divWrapper);
    })

    form.append(buttonSubmit);
    document.body.append(form);

    return form;
};

let form = createForm(formConfig);
form.addEventListener("submit", handleForm);