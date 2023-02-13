// Реализовать функционал получения постов и комментариев к ним с сервера.

// Получить список всех постов с эндпоинта https://jsonplaceholder.typicode.com/posts и отрисовать их на странице.
// В каждом посте должна находится кнопка с текстом Show comments, которая отвечает за получение комментариев к этому конкретному посту.
// При нажатии на кнопку, на сервер по адресу https://jsonplaceholder.typicode.com/posts/{postId}/comments (где ВМЕСТО postId должeн находится id поста) отправляется запрос, к которому необходимо запросить комментарии.
// Полученные комментарии нужно отрендерить в посте (где-то под ним, выбов визуального оформления остается за вами).
// Когда комментарии отрендерены, текст в кнопке необходимо заменить на Hide comments.
// Повторное нажатие на кнопку (если комменты уже отрендерены), удаляет их с поста. Текст кнопки снова меняется на Show comments.
// Документация к API: https://jsonplaceholder.typicode.com/