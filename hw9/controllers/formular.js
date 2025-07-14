const studenti = require("../read-write.js")

const getForm = async (req, res) => {
    res.render("form");
};

const postForm = async (req, res) => {
    let data = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prosek,
    };
    // console.log("Req.Body:", req.body);
    await studenti.add(data);
    res.redirect("/studenti");
};

const getStudenti = async (req, res) => {
    const allStudents = await studenti.read("studenti.json");
    // console.log("Listed students:", allStudents);
    res.render("studenti", { allStudents });
};

const getBrishi = async (req, res) => {
    // console.log("Query parameter i:", req.query.i);

    const index = Number(req.query.i);
    // console.log("Index to remove:", index);

    await studenti.remove(index);
    res.redirect("/studenti");
};

module.exports = {
    getForm,
    postForm,
    getStudenti,
    getBrishi,
};