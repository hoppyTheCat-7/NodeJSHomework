// Домашна 7

// Според моделот books.json треба да направите handlers, треба да направите инфраструктурен код за
// неговото извршување. 

// Направете еден middleware каде ќе се појавува некоја порака доколку книгата е постара од 2000 година
// и има повеќе од 300 страници.

const express = require("express");

const { getAllBooks } = require("./handlers/book-handler");

const app = express();

const bookMiddleware = (req, res, next) => {
    const pubdate = Number(req.query.pubdate);
    const pages = Number(req.query.pages);
    console.log(pubdate, pages);

    if (pubdate <= 2000 && pages >= 300) {
        next();
    } else {
        res.status(404).send("No such book found!");
    }
}

app.get("/search", bookMiddleware, getAllBooks);

const port = 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));

// http://localhost:3000/search?pubdate=2000&pages=300
// http://localhost:3000/search?pubdate=2003&pages=300
// http://localhost:3000/search?pubdate=1995&pages=200
