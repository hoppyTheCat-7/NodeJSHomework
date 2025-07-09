const express = require("express");

const { getAnalysis, postAnalysis } = require("./controllers/text-controller");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/analiza", getAnalysis);
app.post("/analiza", postAnalysis);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}.`);
});

// Testing:
// http://localhost:3000/analiza

