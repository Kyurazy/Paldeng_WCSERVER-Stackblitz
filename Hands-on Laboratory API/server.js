const express = require('express');
const bodyParser = require('body-parser');
const app = express();


let books = [
    {
        'id': '1',
        'title': 'To Kill a Mockingbird',
        'author': 'Harper Lee'
    },
    {
        'id': '2',
        'title': '1984',
        'author': 'George Orwell'
    },
    {
        'id': '3',
        'title': 'The Great Gatsby',
        'author': 'F. Scott Fitzgerald'
    }
];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json(books);
});

app.get('/book', (req, res) => {
    const bookId = req.query.id;
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send('<html><body><h1>Book not found</h1></body></html>');
    }
});

app.get('/bookadd', (req, res) => {
    res.sendFile(__dirname + "/form.html");
});


app.post('/bookcreate', (req, res) => {
    const newBook = {
        'id': req.body.id,
        'title': req.body.title,
        'author': req.body.author
    };

    books.push(newBook);

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Book Added</title>
        </head>
        <body>
            <h1>Book Added Successfully!</h1>
            <p><strong>ID:</strong> ${newBook.id}</p>
            <p><strong>Title:</strong> ${newBook.title}</p>
            <p><strong>Author:</strong> ${newBook.author}</p>
            <a href="/">View All Books</a>
            <br>
            <a href="/bookadd">Add Another Book</a>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
