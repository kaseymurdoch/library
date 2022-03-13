const button = document.querySelector(`button`)
// const titleInput = document.querySelector(`#title`)
// const authorInput = document.querySelector(`#author`)
// const pagesInput = document.querySelector(`#pages`)
// const readInput = document.querySelector(`#read`)
const container = document.querySelector(`.container`)

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
    display()
    // document.querySelector(`div`).textContent = myLibrary
}

// function display() {
//     container.textContent = ``
//     myLibrary.forEach((e) => {
//         // let newDiv = document.createElement(`p`)
//         container.textContent += `${e.title}, ${e.author}, ${e.pages}, ${e.read} `
//         // container.appendChild(newDiv)
//     })
// }

function display() {
    let newDiv = document.createElement(`div`)
    myLibrary.forEach((e) => {
        // newDiv = document.createElement(`p`)
        newDiv.textContent = `${e.title}, ${e.author}, ${e.pages}, ${e.read} `
        container.appendChild(newDiv)
    })
}