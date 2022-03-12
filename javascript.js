const button = document.querySelector(`button`)
// const titleInput = document.querySelector(`#title`)
// const authorInput = document.querySelector(`#author`)
// const pagesInput = document.querySelector(`#pages`)
// const readInput = document.querySelector(`#read`)

document.addEventListener(`DOMContentLoaded`, () => {
    button.addEventListener(`click`, addBookToLibrary)
})

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function() {
    //     return title, author, pages, read
    // }
}

function addBookToLibrary() {
    let newBook = new Book(document.querySelector(`#title`).value, document.querySelector(`#author`).value, document.querySelector(`#pages`).value, document.querySelector(`#read`).value)
    myLibrary.push(newBook)
    console.log(newBook)
    console.log(myLibrary)
    // document.querySelector(`div`).textContent = myLibrary
}