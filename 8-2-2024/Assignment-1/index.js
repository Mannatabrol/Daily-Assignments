// Define the Book constructor function
function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
}

// Array to store the library books
let library = [
    new Book(8, "Mannat Ki Kahani", "Mannat Abrol"),
];

// Function to add a new book to the library
function addBook() {
    const id = parseInt(prompt("Enter the book id: "));
    const title = prompt("Enter the book title: ");
    const author = prompt("Enter the book author: ");

    // Check if a book with the same id or title already exists
    const isIdExists = library.some(book => book.id === id);
    const isTitleExists = library.some(book => book.title === title);

    if (isIdExists || isTitleExists) {
        alert("Book with the same id or title already exists.");
    } else {
        const newBook = new Book(id, title, author);
        library.push(newBook);
        
        // Create a string representation of all books in the library
        let allBooks = "All books in the library:\n";
        library.forEach(book => {
            allBooks += `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}\n`;
        });
        
        alert("New book added successfully.\n" + allBooks);
    }
}


// Function to borrow a book
function borrowBook() {
    const id = parseInt(prompt("Enter book ID to borrow:"));
    const book = library.find(book => book.id === id);
    if (book) {
        if (!book.isBorrowed) {
            book.isBorrowed = true;
            alert(`Book "${book.title}" by ${book.author} is successfully borrowed.`);
        } else {
            alert(`Book "${book.title}" by ${book.author} is already borrowed.`);
        }
    } else {
        alert("Book with the provided ID not found.");
    }
}

// Function to list available books
function listAvailableBooks() {
    let availableBooksMessage = "Available Books:\n";
    library.forEach(book => {
        if (!book.isBorrowed) {
            availableBooksMessage += `Book "${book.title}" by ${book.author}\n`;
        }
    });
    return availableBooksMessage;
}

// Function to search for a book
function searchBook() {
    const searchTerm = prompt("Enter book title or ID to search:");
    const book = library.find(book => book.title === searchTerm || book.id === parseInt(searchTerm));
    if (book) {
        alert(`Book found:\nTitle: ${book.title}\nAuthor: ${book.author}\nID: ${book.id}`);
    } else {
        alert("Book with the provided title or ID not found.");
    }
}


// Main menu function
function Menu() {
    const option = parseInt(prompt(`Choose any option among the following:
    1. Add a book
    2. Borrow a book
    3. List available books
    4. Search for a book
    5. Exit`));

    switch (option) {
        case 1:
            addBook();
            break;
        case 2:
            borrowBook();
            break;
        case 3:
            alert(listAvailableBooks());
            break;
        case 4:
            searchBook();
            break;
        case 5:
            alert("Exiting...");
            return;
        default:
            alert("Invalid option chosen");
    }

    // Show the menu again after executing the selected option
    Menu();
}

// Start the program by calling the Menu function
Menu();
