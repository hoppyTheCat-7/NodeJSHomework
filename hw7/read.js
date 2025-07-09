const fs = require("fs");

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) reject(err);
            data = JSON.parse(data);
            console.log(data);
            resolve(data);
        });
    });
};

module.exports = {
    read,
};