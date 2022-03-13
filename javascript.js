const submit = document.querySelector(`.submit`)
const open = document.querySelector(`.open`)
const formContainer = document.querySelector(`.form-container`)
// const titleInput = document.querySelector(`#title`)
// const authorInput = document.querySelector(`#author`)
// const pagesInput = document.querySelector(`#pages`)
// const readInput = document.querySelector(`#read`)
const bookContainer = document.querySelector(`.book-container`)

document.addEventListener(`DOMContentLoaded`, () => {
    submit.addEventListener(`click`, addBookToLibrary)
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
    let newBook = new Book(document.querySelector(`#title`).value, document.querySelector(`#author`).value, document.querySelector(`#pages`).value, document.querySelector(`#read`).checked)
    myLibrary.push(newBook)
    console.log(newBook)
    console.log(myLibrary)
    display()
}

// function display() {
//     bookContainer.textContent = ``
//     myLibrary.forEach((e) => {
//         // let newDiv = document.createElement(`p`)
//         bookContainer.textContent += `${e.title}, ${e.author}, ${e.pages}, ${e.read} `
//         // bookContainer.appendChild(newDiv)
//     })
// }

function display() {
    let newDiv = document.createElement(`div`)
    let readCheck = ``
    myLibrary.forEach((e) => {
        if (e.read === true) {
            readCheck = `Yes`
        }
        if (e.read === false) {
            readCheck = `No`
        }
        newDiv.textContent = `Ttitle: ${e.title}, Author: ${e.author}, Pages: ${e.pages}, Read: ${readCheck} `
        bookContainer.appendChild(newDiv)
    })
}

open.addEventListener(`click`, () => {
    formContainer.classList.add(`show`)
})

submit.addEventListener(`click`, () => {
    formContainer.classList.remove(`show`)
})