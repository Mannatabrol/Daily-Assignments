let books = [];

// Controller functions for books
exports.getAllBooks = (req, res) => {
    res.json(books);
};

exports.addBook = (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author, available: true };
    books.push(newBook);
    res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
    const { id } = req.params;
    const { available } = req.body;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
        books[index].available = available;
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

exports.deleteBook = (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
        books.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};
