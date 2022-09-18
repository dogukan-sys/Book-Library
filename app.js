let myLibrary = []

function Book() {
    this.tile = undefined
    this.author = undefined
    this.pages = undefined
    this.readStatus = undefined
    this.coverImage = undefined
}


function addBookToLibrary(title, author, genre, pages, readStatus, coverImage ) {
    const newBook = new Book()
    args = [...arguments]

    newBook.tile = args[0]
    newBook.author = args[1]
    newBook.genre = args[2]
    newBook.pages = args[3]
    newBook.readStatus = args[4]
    newBook.coverImage = args[5]
    
    myLibrary.push( newBook )
}
