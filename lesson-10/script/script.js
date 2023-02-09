const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
  { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
  { id: 3, author: "Оруел", name: "1984", isReading: false },
  { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
  { id: 5, author: "Достоевский", name: "Преступление и наказание", isReading: false },
];



// Реализовать приложение, которое будет иммитировать терминал в библиотеке.
// Пользователь сможет:
// - взять любую уже существующую в базе книгу
// - сдать книгу назад в библиотеку
// - принести свою книгу и добаить ее в базу данных

// База данных - массив книг, которые сожержатся в библиотеке

// Свойства книги(модель):
// - id: уникальный идентификатор
// - author
// - name
// - isReading: содержит информацию о том, доступна ли книга







function library() {
    let action = prompt("What action do you want to: \n -take,\n -return,\n -add?");
  
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


// Взять книгу:
// - пользователь вводит название книги, при этом ему показывается список
//   доступных
// - алгоритм должен проверить следующие параметры:
//   - есть ли вообще такая книга в наличии
//   - доступна ли она сейчас (isReading)
// - если проверка прошла, то выдать книгу пользователю,
//   изменив ее статус isReading на true и сообщив ее идентификатор

// - если нет то сказать пользователю почему он не может взять книгу:
//   - либо ее нет в базе данных
//   - либо ее сейчас читает кто-то другой


  
const takeBook = () => {
    const availableBooksNames = books
      .filter((book) => !book.isReading)
      .map((book) => ` - ${book.name}`)
      .join("\n");
    

    const availableBooksAuthors = books
        .filter((book) => !book.isReading)
        .map((book) => ` - ${book.author}`)
        .join("\n");
  
    let desiredBookName = prompt(`Enter book name:\n${availableBooksNames}`);
  
    if (!desiredBookName) {
        let desiredBookAuthor = prompt(`Enter book author:\n${availableBooksAuthors}`);

        if(desiredBookAuthor){
            desiredBookAuthor = desiredBookAuthor.trim().toLowerCase();

            const desiredBookA = books.find((book) => {
                return book.author.toLowerCase() === desiredBookAuthor;
            });

            if (!desiredBookA) {
                alert("No book with this author");
            
                return;
            };

            if (desiredBookA.isReading) {
                alert("Sorry, this book is reading by someone else");
            
                return;
            };

            desiredBookA.isReading = true;
  
            alert(` Your book id is${desiredBookA.id}`);

            return;
        }alert("You have not chosen a book!\n Bye!");
  
        return;
    };
  
    desiredBookName = desiredBookName.trim().toLowerCase();

  
    const desiredBook = books.find((book) => {
      return book.name.toLowerCase() === desiredBookName;
    });

  
    if (!desiredBook) {
      alert("No book with this name");
  
      return;
    };

  
    if (desiredBook.isReading) {
      alert("Sorry, this book is reading by someone else");
  
      return;
    };
  
    desiredBook.isReading = true;
  
    alert(` Your book id is${desiredBook.id}`);
  
    // console.log(`books`, books);
};


// Вернуть книгу:
//  - пользователь вводит идентификатор книги, которую хочет вернуть
//  - проверяем, существует ли книга с таким айди в базе данных
//  - если да, книга в базе данных меняет свой статус на isReading: false
//  - если нет - сообщаем что книги с таким айди не существует  
  
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
    alert(`Thanks, come again! Do you like "${currentBook.name}" ${currentBook.author}? `);
};
  
  // Добавить книгу:
  //  - пользователь поочердно вводит данные книги: Автора и Название
  //  - книге присваивается уникальный идентификатор и она добавляется в базу
  //    данных со статусом isReading: false
  //  - сообщаем пользователю о том, что книга успешно добавлена


const addBook = () => {
    const name = prompt("Book name");
    const author = prompt("Book Author");
  
    const newBook = {
      name,
      author,
      isReaading: false,
      id: generateBookId(),
    };
  
    // console.log(`newBook`, newBook);
    books.push(newBook);
  
    alert(`Thank you! Book was added!\n Libary id: ${ newBook.id}`);
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


