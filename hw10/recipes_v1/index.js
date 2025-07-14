const express = require("express");

const { getForm, postForm, getRecipes, deleteRecipes } = require("./controllers/recipe-handler");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/recipes", getRecipes);
app.get("/delete", deleteRecipes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

// http://localhost:3000/form