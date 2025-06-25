// 1. Local module for file write and read
// 2. Use append to append data and then read the new data appended
// 3. Read the new data when change has been made -> write, read, append, read

const fs = require("fs");

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

const readFile = (fileName, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

const appendFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, data, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

module.exports = {
    writeFile,
    readFile,
    appendFile
};