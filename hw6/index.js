const express = require("express");

const {
    getAllRecipes,
    addRecipe,
    deleteRecipe,
    editRecipe,
} = require("./handlers/recipes");

const app = express();

app.use(express.json());

app.get("/recipes", getAllRecipes);
app.post("/recipes", addRecipe);
app.delete("/recipes/:id", deleteRecipe);
app.put("/recipes/:id", editRecipe);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

// Testing:
// GET: http://localhost:3000/recipes
// POST: http://localhost:3000/recipes
// JSON:
// {
//         "recipeName": "Taratur Salad",
//         "preptime": "20'",
//         "ingredients": [
//             {
//                 "name": "cucumber",
//                 "quantity": "1"
//             },
//             {
//                 "name": "garlic",
//                 "quantity": "2 cloves"
//             },
//             {
//                 "name": "sour cream",
//                 "quantity": "400gr"
//             },
//             {
//                 "name": "walnuts",
//                 "quantity": "3"
//             },
//             {
//                 "name": "dill",
//                 "quantity": "1tsp"
//             },
//             {
//                 "name": "salt",
//                 "quantity": "a pinch"
//             },
//             {
//                 "name": "olive oil",
//                 "quantity": "5 Tbsp"
//             }
//         ]
//     }

// DELETE: http://localhost:3000/recipes/0
// PUT: http://localhost:3000/recipes/1
// JSON:
// {
//     "preptime": "25'",
//     "ingredients": [
//         {
//             "name": "oregano",
//             "quantity": "a pinch"
//         }
//     ]
// }