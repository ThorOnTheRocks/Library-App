let library = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    if (read === "not")
      return `${title} by ${author}, ${pages} pages, not read yet`
    else
      return `${title} by ${author}, ${pages} pages, read`
  }
}

function addBookToLibrary() {
  Book.library.push
}