const submit = document.querySelector(`.submit`)
const open = document.querySelector(`.open`)
const cancel = document.querySelector(`.cancel`)
const formContainer = document.querySelector(`.form-container`)
const bookContainer = document.querySelector(`.book-container`)
const titleInput = document.querySelector(`#title`)
const authorInput = document.querySelector(`#author`)
const pagesInput = document.querySelector(`#pages`)
const readInput = document.querySelector(`#read`)

// document.addEventListener(`DOMContentLoaded`, () => {
//     submit.addEventListener(`click`, addBookToLibrary)
// })

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)
    myLibrary.push(newBook)
    display()
}

function display() {
    bookContainer.innerHTML = "";

    myLibrary.forEach((e, index) => {
        let bookTitle = document.createElement(`div`)
        bookTitle.setAttribute(`data-index`, index)

        let bookAuthor = document.createElement(`div`)
        bookAuthor.setAttribute(`data-index`, index)

        let bookPages = document.createElement(`div`)
        bookPages.setAttribute(`data-index`, index)

        let bookRead = document.createElement(`button`)
        bookRead.setAttribute(`data-index`, index)
        bookRead.classList.add(`toggle`)

        let bookCard = document.createElement(`div`)
        bookCard.setAttribute(`data-index`, index)

        let removeButton = document.createElement(`button`)
        removeButton.setAttribute(`data-index`, index)
        removeButton.textContent = `REMOVE`
        removeButton.classList.add(`remove`)

        let readCheck = ``
        if (e.read === true) {
            readCheck = `Has Been Read`
            bookRead.classList.add(`trueRead`)
            bookRead.classList.remove(`falseRead`)
        }
        if (e.read === false) {
            readCheck = `Has Not Been Read`
            bookRead.classList.add(`falseRead`)
            bookRead.classList.remove(`trueRead`)
        }

        bookTitle.textContent = `Title: ${e.title}`
        bookAuthor.textContent = `Author: ${e.author}`
        bookPages.textContent = `Pages: ${e.pages}`
        bookRead.textContent = `${readCheck}`

        bookContainer.appendChild(bookCard)
        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookRead)
        bookCard.appendChild(removeButton)
    })
}

function removeBook(event) {
    if (event.target.className === `remove`) {
        const index = event.target.getAttribute(`data-index`)
        myLibrary.splice(index, 1)
        display()
    }
}

function toggleRead(event) {
    if (event.target.classList.contains(`toggle`)) {
        const index = event.target.getAttribute(`data-index`)
        if (myLibrary[index].read === true) {
            myLibrary[index].read = false
        }
        else {
            myLibrary[index].read = true
        }
        display()
    }
}

document.addEventListener(`click`, (event) => {
    removeBook(event)
    toggleRead(event)
})

open.addEventListener(`click`, () => {
    formContainer.classList.add(`show`)
})

submit.addEventListener(`click`, (e) => {
    if (titleInput.validity.valid && authorInput.validity.valid && pagesInput.validity.valid) {
        formContainer.classList.remove(`show`)
        addBookToLibrary()
    }
    if (!titleInput.validity.valid) {
        console.log(titleInput.validity.valid)
        titleInput.setCustomValidity(`Enter a valid title`)
        titleInput.reportValidity()
    }
    if (!authorInput.validity.valid) {
        console.log(authorInput.validity.valid)
        authorInput.setCustomValidity(`Enter a valid author`)
        authorInput.reportValidity()
    }
    if (!pagesInput.validity.valid) {
        console.log(pagesInput.validity.valid)
        pagesInput.setCustomValidity(`Enter a valid number`)
        pagesInput.reportValidity()
    }
})

cancel.addEventListener(`click`, () => {
    formContainer.classList.remove(`show`)
})

document.addEventListener(`input`, () => {
    titleInput.setCustomValidity(``)
    authorInput.setCustomValidity(``)
    pagesInput.setCustomValidity(``)
    readInput.setCustomValidity(``)
})