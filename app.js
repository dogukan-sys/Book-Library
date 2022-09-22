let myLibrary = [

]

function Book() {
    this.title = undefined
    this.author = undefined
    this.genre = undefined
    this.pages = undefined
    this.readStatus = undefined
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


function createCard(title, author, genre, pages, readStatus) {
    // Getting the elements
    const card_container = document.querySelector('.card_container')
    const card = document.createElement('div')
    const card_title = document.createElement('p')
    const card_author = document.createElement('p')
    const card_genre = document.createElement('p')
    const card_pages = document.createElement('p')
    const card_status = document.createElement('p')

    // Setting Class names for css

    card.className = 'card'
    card_title.className = 'card_title'
    card_author.className = 'card_author'
    card_genre.className = 'card_genre'
    card_pages.className = 'card_pages'
    card_status.className = 'card_status' 

    // Setting corret innerText for each element

    card_title.innerText = title
    card_author.innerText = author
    card_genre.innerText = genre
    card_pages.innerText = pages
    card_status.innerText = readStatus


    // Appending everything correctly
    card.appendChild(card_title)
    card.appendChild(card_author)
    card.appendChild(card_genre)
    card.appendChild(card_pages)
    card.appendChild(card_status)
    card_container.appendChild(card)
}

function libToCard() {
    for (i=0; i< myLibrary.length; i++) {
        var tempBook = myLibrary[i]
        createCard(tempBook.title, tempBook.author, tempBook.genre, tempBook.pages, tempBook.readStatus)
    }
}

libToCard()