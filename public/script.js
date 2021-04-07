// Variables to call Elements 
const buttonForm = document.querySelector(".btn-form");
const bookForm = document.querySelector(".book-form");
const saveNewBook = document.querySelector(".btn-save");
const booksCard = document.querySelector(".books-card");
const modal = document.querySelector(".modal");
const removeBtn = document.getElementsByClassName(".delete");

// Book Constructor:
function Book(title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// UI Tasks
function displayBooks() {


  const books = getBooks();


  books.forEach((book) => addBookToLibrary(book));
}



function addBookToLibrary(book) {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';


  // Construct card content
  const content = `
  <div class="col-sm-2 mt-4">
    <div class="card">
      <div class="card-header text-center">
        <h5>${book.title}</h5>
      </div>
  
        <div class="card-body">
  
          
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          
         
        </div>
      <div class="d-grid gap-2 d-md-block m-auto my-2">
        <button class="btn btn-warning delete" type="button">Remove</button>
        
      </div>
        
      
    </div>
  </div>
    `;

  // Append newyly created card element to the container
  booksCard.innerHTML += content;
}



function deleteBook(book) {
  if (book.classList.contains("delete")) {
    book.parentElement.parentElement.remove();
  }
}

function clearFormFields() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
}

// Store Books Local Storage

function getBooks() {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
}

function addBook(book) {
  const books = getBooks();

  books.push(book);

  localStorage.setItem("books", JSON.stringify(books));
}

function removeBook(title) {
  const books = getBooks();

  books.forEach((book, index) => {
    if (book.title === title) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem("books", JSON.stringify(books))
}


// Event Listeners to display a book
document.addEventListener("DOMContentLoaded", displayBooks);

// Event add a Book
bookForm.addEventListener("submit", (e) => {

  // Prevent submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector(".read").checked;


  // Instantiate book
  const book = new Book(title, author, pages, read);

  // Add book to card
  addBookToLibrary(book);

  // Add book to store
  addBook(book);


  // Clear fields form
  clearFormFields();

});

// Event: Remove book
booksCard.addEventListener("click", (e) => {
  // Remove book from UI
  deleteBook(e.target)

  // Remove book from UI

  removeBook(e.target.textContent);

})



