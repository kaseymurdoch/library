let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title, author, pages, read
    }
    console.log(Book.info())
}

function addBookToLibrary() {
    
}

addBookToLibrary()