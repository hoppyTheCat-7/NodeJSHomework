const fs = require("fs");

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) reject(err);

            data = JSON.parse(data);
            resolve(data);
        });
    });
};

const write = (fileName, data) => {
    data = JSON.stringify(data);

    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

const add = async (student) => {
    let students = await read("studenti.json");
    students.push(student);
    await write("studenti.json", students);
};

const remove = async (index) => {
    let students = await read("studenti.json");
    students = students.filter((student, i) => index !== i);
    await write("studenti.json", students);
};

module.exports = {
    read,
    write,
    add,
    remove,
};