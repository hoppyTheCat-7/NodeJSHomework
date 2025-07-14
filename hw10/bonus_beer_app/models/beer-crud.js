const fs = require("fs");

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

const add = async (item) => {
    let beer = await read("beer.json");
    beer.push(item);
    await write("beer.json", beer);
};

const remove = async (index) => {
    let beer = await read("beer.json");
    beer = beer.filter((_, idx) => Number(index) !== idx);
    await write("beer.json", beer);
};

const list = async () => {
    return await read("beer.json");
};

module.exports = {
    read,
    write,
    add,
    remove,
    list,
};