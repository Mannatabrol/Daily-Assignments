const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Routes for books
router.get('/', booksController.getAllBooks);
router.post('/', booksController.addBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
