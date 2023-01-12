// Додаток "Бібліотека"
// Реалізувати додаток, який буде іммітвати термінал в бібліотеці. Користувач зможе:

// взяти будь яку книгу з бібліотеки
// здати книгу назад в бібліотеку
// принести свою книгу та додати ії в базу даних.
// База даних - масив книг, котрі утримуються в бібліотеці.

// Властивості книги(модель):

// id: уникальний ідентифікатор
// author: автор
// name: назва
// isReading: інформація про те, чи доступна книга
// Взяти книгу:

// користувач вводить назву книги, яку хоче взяти. При цьому, йому показується список доступних
// алгоритм має перевірити:
// чи є взагалі така книга в наявності
// чи доступна вона зараз (isReading)
// якщо перевірка пройшла, то видати книгу користувачу, змінивши статус isReading на true та показати ії ідентифікатор
// якщо ні, то сказати користувачу чому він не може взяти книгу:
// або ії немає в базі данних
// або ії зараз читає хтось інший
// Повернути книгу:

// користувач вводить іжентицікатор книги, котру хоче повернути
// перевіряємо, чи існує книга з таким ідентифікатором в базі данних
// якщо так, книга в базі данних зиінює свій статус на isReading: false
// якщо ні, повідомляємо, що книги з таким айді не існує
// Додати книгу:

// Користувач почергово вводить дані книги: Автора та Назву.
// книзі привласнюється унікальний ідентифікатор і вона додається в базу даних зі статусом isReading: false
// повідомляємо користувачу про те, що книга успішно додана
// Пропозиції по реалізаціЇ:

// для кожної дії використовуйте окрему функцію
// для генрерації унікального айді книги також використовуйте окремий метод. Id кожної книги має бути унікальним.
// в файлах base.js і index.html уже є заготовка під додаток. Вам потрібно скопіювати його вміст та продовжити роботу.
// функція library буде викликатися по кліку на кнопку Go to library. Як це працює ми вивчимо пізніше.
// рекомендуємо використовувати switch case для того, щоб визначити яку функцію викликати.
// намагайтесь максимально використовувати методи массивів.
// Можливі варіанти покращення додатку

// реалізуйте пошук не тільки по назві книги, а і по автору
// реализуйте валидацію додавання нових книг. Назви не мають повторюватися.
// змініть модель книги: її доступність буде визначатися не полем isReading, а кількістю доступних книг. Тобто, однакових книг в наявності може бути декілька. (Цей пункт конфліктує з попереднім. Реалізуйте один з них, чи кожен по черзі)


const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
  { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
  { id: 3, author: "Оруел", name: "1984", isReading: false },
  { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
  { id: 5, author: "Достоевский",name: "Преступление и наказание", isReading: false },
];



function library() {
    let action = prompt("What action do you to take?(\n-take,\n-return,\n-add)");
  
    if (action === null) {
      alert("Bye!");
  
    return;
    }
  
    action = action.toLowerCase().trim();
  
    switch (action) {
      case "take":
        takeBook();
        break;
      case "return":
        returnBook();
        break;
      case "add":
        addBook();
        break;
      default:
        alert("No action!");
    }
  };


  
const takeBook = () => {
     const availableBooksNames = books
        .filter((book) => !book.isReading)
        .map((book) => ` - ${book.name}`)
        .join("\n");
  
      let desiredBookName = prompt(`Enter book name:\n${availableBooksNames}`);
  
      if (!desiredBookName) {
        const availableBooksAuthor = books
         .filter((book) => !book.isReading)
         .map((book) => ` - ${book.author}`)
        .join("\n");

         let desiredBookAuthor = prompt(`Enter book author:\n${availableBooksAuthor}`);

        const desiredBookA = books.find((book) => {
           return book.author.toLowerCase() === desiredBookAuthor;
        });
    
        if (!desiredBookA) {
           alert("No book with this autor");
    
           return;
        }
    
        if (desiredBookA.isReading) {
            alert("Sorry, this book is reading by someone else");
    
         return;
        }
    
        desiredBookA.isReading = true;
    
        alert(`Your book id is ${desiredBookA.id}`);
    
      }else{
      
        desiredBookName = desiredBookName.trim().toLowerCase();
        desiredBookAuthor = desiredBookAuthor.trim().toLowerCase();
  
        const desiredBookA = books.find((book) => {

        return book.name.toLowerCase() === desiredBookName;

        });
  
        if (!desiredBookA) {
          alert("No book with this name");
  
          return;
        }
  
        if (desiredBookA.isReading) {
        alert("Sorry, this book is reading by someone else");
  
         return;
        }
  
        desiredBookA.isReading = true;
  
        alert(`Your book id is${desiredBookA.id}`);
  
   
      };
     

    
  };
  



  const returnBook = () => {
    const returningBookId = Number(prompt("Enter book id:"));
  
    if (!returningBookId) {
      alert("No book id");
  
      return;
    }
  
    const currentBook = books.find((book) => book.id === returningBookId);
  
    if (!currentBook) {
      alert("Invalid book id");
  
      return;
    }
  
    if (!currentBook.isReading) {
      alert("This book is not reading now");
  
      return;
    }
  
    currentBook.isReading = false;
    alert(`Thanks, come again! Do you like "${currentBook.name}"? `);
  };
  



  const addBook = () => {
    const name = prompt("Book name");
    const author = prompt("Book Author");
  
    const newBook = {
      name,
      author,
      isReaading: false,
      id: generateBookId(),
    };
  
    console.log(`newBook`, newBook);
    books.push(newBook);
  
    alert(`Book was added! Libary id: ${newBook.id}`);
  };

  

  function generateBookId () {
    let isBookWithIdExists = true;
    let generatedId;
  
    do {
      generatedId = Math.ceil(Math.random() * 1000);
      isBookWithIdExists = Boolean(books.find((book) => book.id === generatedId));
    } while (isBookWithIdExists);
  
    return generatedId;
  };