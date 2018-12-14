const books = [
  {
    title: "Harry Potter",
    author: "JK Rowling"
  },
  {
    title: "Percy Jackson",
    author: "Adam Zeus"
  },
  {
    title: "The Apple",
    author: "Eve Adams"
  }
];

const bookListContainer = document.querySelector("#book-list");
const filterBooksInput = document.querySelector("#filter-books");

function renderBooks(booksList) {
  bookListContainer.innerHTML = "";
  booksList.forEach(book => {
    const bookItem = document.createElement("li");
    bookItem.className = "list-group-item";
    bookItem.textContent = book.title;
    bookListContainer.appendChild(bookItem);
  });
}

function filterBooks(books, bookTitle) {
  const filteredBooks = books.filter(book => {
    return book.title.toLowerCase().includes(bookTitle.toLowerCase());
  });
  return filteredBooks;
}

filterBooksInput.addEventListener("input", function(e) {
  const bookTitle = e.target.value;
  console.log(bookTitle);
  const filteredBooks = filterBooks(books, bookTitle);
  console.log(filteredBooks);
  renderBooks(filteredBooks);
});

renderBooks(books);
