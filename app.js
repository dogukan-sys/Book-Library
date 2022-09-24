// Variables
const addBookButton = document.querySelector('#addBook')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('#cancel')
const 


addBookButton.addEventListener('click', () => {
    modal.style.display = "block"
})

closeBtn.onclick = function() {
    modal.style.display = "none";
}
  


let myLibrary = []


// functions

function Book() {
    this.title = undefined
    this.author = undefined
    this.genre = undefined
    this.pages = 0
    this.readStatus = false
}

function addBookToLibrary() {
    const newBook = new Book()
    args = [...arguments]

    newBook.title = args[0]
    newBook.author = args[1]
    newBook.genre = args[2]
    newBook.pages = args[3]
    newBook.readStatus = args[4]
    
    myLibrary.push( newBook )
}

function createCard(title, author, genre, pages, readStatus, index) {
    // Getting the elements
    const card_container = document.querySelector('.card_container')
    const card = document.createElement('div')
    const card_title = document.createElement('p')
    const card_author = document.createElement('p')
    const card_genre = document.createElement('p')
    const card_pages = document.createElement('p')
    const card_status = document.createElement('button')
    const card_delete = document.createElement('button')
    // Setting Class names for css

    card.className = 'card'
    card.dataset.index = index
    card_title.className = 'card_element card_title'
    card_author.className = 'card_element card_author'
    card_genre.className = 'card_element card_genre'
    card_pages.className = 'card_element card_pages'
    card_status.className = 'card_element card_status'
    card_delete.className = 'card_element card_delete'

    // Setting corret innerText for each element

    card_title.innerHTML = `Title:<span>${title}</span>`
    card_author.innerHTML = `Author: <span>${author}</span>`
    card_genre.innerHTML = `Genre: <span>${genre}</span>`
    card_pages.innerHTML = `Pages: <span>${pages}</span>`
    card_status.innerHTML = readStatus ? "read" : "not read"
    card_delete.innerHTML = 'remove'



    // Appending everything correctly
    card.appendChild(card_title)
    card.appendChild(card_author)
    card.appendChild(card_genre)
    card.appendChild(card_pages)
    card.appendChild(card_status)
    card.appendChild(card_delete)
    card_container.appendChild(card)
}

function removeCards() {
    const bookcards = document.querySelectorAll('[data-index]')
    bookcards.forEach((bookcard) => {
        bookcard.remove()
    })

}

function libToCard() {
    // cycle library and create Card
    for (i=0; i< myLibrary.length; i++) {
        var tempBook = myLibrary[i]
        createCard(tempBook.title, tempBook.author, tempBook.genre, tempBook.pages, tempBook.readStatus,i)
    }
    EventHandlers()
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    updateScreen()
}

function updateScreen() {
    removeCards()
    libToCard()
}

function getFormData() {
}

addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', ['High fantasy','Juvenile fantasy'], '310', false)

addBookToLibrary('Harry Potter und der Stein der Weisen', 'J.K. Rowling', ['Fantasy'], '223', true)

libToCard()


function EventHandlers() {
    const readButtons = document.querySelectorAll('.card_status')
    const removeButtons = document.querySelectorAll('.card_delete')

    // Toggle read status
    readButtons.forEach((readButton) => {
        readButton.addEventListener('click', (event) => {
            const bookId = event.target.parentNode.dataset.index
            if (myLibrary[bookId]['readStatus']) {
                myLibrary[bookId]['readStatus'] = false 
            } else {
                myLibrary[bookId]['readStatus'] = true 
            }
            updateScreen()
        })
    })


    // remove book from library and Screen
    removeButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', (event) => {
            removeBook(event.target.parentNode.dataset.index)
            updateScreen()
        })
    })

}