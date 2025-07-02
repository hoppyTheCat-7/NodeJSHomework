const { read, write } = require("../read-write.js");

// The first route handler (GET):
const getAllRecipes = async (req, res) => {
    const data = await read();
    res.status(200).send(data);
};

// The second route handler (POST):
const addRecipe = async (req, res) => {
    const recipes = await read();
    recipes.push(req.body);
    await write(recipes);
    res.status(200).send("New recipe added!");
};

// The third route handler (DELETE):
const deleteRecipe = async (req, res) => {
    let recipes = await read();
    recipes = recipes.filter((recipe, index) => Number(req.params.id) !== index);
    await write(recipes);
    res.status(200).send(`Recipe with id:${req.params.id} deleted!`);
};

// The fourth route handler (PUT):
const editRecipe = async (req, res) => {
    let recipes = await read();
    recipes = recipes.map((recipe, index) => {
        if (Number(req.params.id) === index) {
            if (req.body.ingredients) {
                req.body.ingredients = [
                    ...recipe.ingredients,
                    ...req.body.ingredients,
                ];
            }
            return {
                ...recipe,
                ...req.body,
            };
        };
        return recipe;
    });
    await write(recipes);
    res.status(200).send(`Recipe with id:${req.params.id} edited!`);
};

module.exports = {
    getAllRecipes,
    addRecipe,
    deleteRecipe,
    editRecipe,
};