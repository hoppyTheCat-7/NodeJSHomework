const fs = require("fs");
const { json } = require("stream/consumers");

const read = async (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) reject(err);
            data = JSON.parse(data);
            resolve(data);
        });
    });
};

const write = async (fileName, data) => {
    data = JSON.stringify(data);
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

const add = async (recipe) => {
    let recipes = await read("recipes.json");
    recipes.push(recipe);
    await write("recipes.json", recipes);
};

const remove = async (index) => {
    let recipes = await read("recipes.json");
    recipes = recipes.filter((_, idx) => Number(index) !== idx);

    await write("recipes.json", recipes);
}

const list = async () => {
    return await read("recipes.json");
};

module.exports = {
    read,
    write,
    add,
    remove,
    list
};