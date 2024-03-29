// Задание 1


// Получить информацию о стране, в которой находится пользователь (местонаходжение определяется по IP) и вывести на страницу информацию о ней (название, столицу, валюту и флаг). Для этого вам понадобятся следующие API:

// Для получения названия, столицы и валюты используйте эндпойнт https://ipapi.co/json/ который вернет вам информацию о стране, которой принадлежит ваш текущий IP адрес.
// Для получения флага сделайте запрос по адресу https://restcountries.com/v2/name/NAME где вместо NAME необходимо подставить название страны, которое вы получите из первого запроса.
// Все запросы отправляйте методом GET. Обязательно используйте fetch и async await.

// Подсказка
// Документация к API:

// https://restcountries.com
// https://ipapi.co/




// Задание 2
// С помощью сервиса swapi.dev запросите информацию о персонаже Звездных войн, а так же все фильмы, в которых он появлялся.

// Для этого на странице должна быть форма, в которую пользователь может ввести id желаемого персонажа (доступны айди персонажей от 1 до 82).
// После отправки формы, необходио отправить запрос по адресу https://swapi.dev/api/people/ID где вместо ID необходимо подставить значение, которое пользователь ввел в форму.
// Далее, на странице необходимо отрендерить карточку с именем персонажа и кнопкой Фильмы.
// При клике на кнопку в карточке, необходимо добавить в карточку с персонажем названия всех фильмов, в которых он появлялся. Информация о каждом фильме хранится по ссылкам, которые перечисленны в массиве по ключу films в ответе на предыдущий запрос (запрос на /people/ID).
// Все запросы на фильмы необходимо отправлять с помощью метода Promise.all.

// Документация к API: https://swapi.dev/