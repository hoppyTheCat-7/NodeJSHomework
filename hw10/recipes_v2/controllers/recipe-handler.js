const recipes = require("../models/recipe-crud");

const getForm = (req, res) => {
    res.render("recipe-form");
};

const postForm = async (req, res) => {
    const { recipeName, preptime, ingredientKeys, ingredientValues, method } = req.body;

    const ingredients = {};
    ingredientKeys.forEach((key, index) => {
        ingredients[key] = ingredientValues[index];
    });

    const data = {
        recipeName,
        preptime,
        ingredients,
        method,
    };

    await recipes.add(data);
    res.redirect("/recipes");
}

const getRecipes = async (req, res) => {
    const allRecipes = await recipes.list();
    res.render("recipes", { allRecipes });
};

const deleteRecipes = async (req, res) => {
    await recipes.remove(req.query.index);
    res.redirect("/recipes");
};

module.exports = {
    getForm,
    postForm,
    getRecipes,
    deleteRecipes,
};