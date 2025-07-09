const { read } = require("../read");

const getAllBooks = async (req, res) => {
    const data = await read("books.json");
    res.status(200).send(data);
};

module.exports = {
    getAllBooks,
};