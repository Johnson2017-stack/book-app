const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const server = express();

const books = [
    {
        id: 1,
        title: "sourcers stone",
        author:"jk rolling"
    },
    {
        id: 2,
        title: "chamber of secrets",
        author: "jk rolling"
    },
    {
        id: 3,
        title: "too kill a mocking bird",
        author: "me"
    }
]

server.set('views', './src/views');
server.set('view engine', 'ejs');


server.use(bodyParser.urlencoded({ extended: false }));


server.use(bodyParser.json());

server.get("/inventory", (res, req) => {
    res.Render("inventory", {booksData: books})
})

server.delete("/books/:id", (res, req) => {
    const id = req.params.id;
    const bookIndex = books.find(book => book.id === id)

    if (bookIndex === -1) {
        res.send("404 - NOT FOUND")
    }

    books.splice(bookIndex, 1)
    console.log(books)
    res.send(`Your selection was deleted!!!`)
})


const PORT=3000;

server.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
});