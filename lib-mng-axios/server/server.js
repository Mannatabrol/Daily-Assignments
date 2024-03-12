const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/books', booksRouter);
app.use('/api/users', usersRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
