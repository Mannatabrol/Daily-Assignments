document.addEventListener('DOMContentLoaded', function () {

    fetchBooks();

    document.getElementById('add-book-form').addEventListener('submit', function (event) {
        event.preventDefault();
        addBook(this);
    });
});

function fetchBooks() {
    axios.get('/api/books')
        .then(response => displayBooks(response.data))
        .catch(error => console.error('Error fetching books:', error));
}
function addBook(form) {
    const formData = new FormData(form);
    axios.post('/api/books', formData)
        .then(response => {
            fetchBooks();
            form.reset(); 
        })
        .catch(error => console.error('Error adding book:', error));
}

// Function to display books
function displayBooks(books) {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = ''; 
    books.forEach(function (book) {
        let status = book.available ? 'Available' : 'Borrowed';
        let action = book.available ? 'Borrow' : 'Return';
        let actionBtn = `<button onclick="updateStatus(${book.id}, ${book.available})">${action}</button>`;
        let updateBtn = `<button onclick="updateBook(${book.id})">Update</button>`;
        let deleteBtn = `<button onclick="deleteBook(${book.id})">Delete</button>`;
        let listItem = document.createElement('li');
        listItem.innerHTML = `${book.title} - ${status} ${actionBtn} ${updateBtn} ${deleteBtn}`;
        booksList.appendChild(listItem);
    });
}
function updateStatus(bookId, available) {
    axios.put(`/api/books/${bookId}`, { available: !available })
        .then(() => fetchBooks())
        .catch(error => console.error('Error updating book status:', error));
}

function updateBook(bookId) {

    console.log('Update book with ID:', bookId);
}

function deleteBook(bookId) {
    axios.delete(`/api/books/${bookId}`)
        .then(() => fetchBooks())
        .catch(error => console.error('Error deleting book:', error));
}
