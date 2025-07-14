const express = require("express");

const { getForm, postForm, getBeer, deleteBeer, } = require("./controllers/beer-handler");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Testing home route:
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/beer", getBeer);
app.get("/delete", deleteBeer);

const port = 3000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

// http://localhost:3000/form