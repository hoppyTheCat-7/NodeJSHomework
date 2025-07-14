const express = require("express");
const { getForm, postForm, getStudenti, getBrishi} = require("./controllers/formular.js");

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/studenti", getStudenti);
app.get("/brishi", getBrishi);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

// Testing:
// http://localhost:3000/form