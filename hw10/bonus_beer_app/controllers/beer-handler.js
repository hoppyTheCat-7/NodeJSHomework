const beer = require("../models/beer-crud");

const getForm = (req, res) => {
    res.render("beer-form");
};

const postForm = async (req, res) => {
    console.log("Incoming req.body:", req.body);

    const { name, style, abv, ibu, brewery, country, rating } = req.body;

    const convertedIbu = Number(req.body.ibu);
    const convertedRating = Number(req.body.rating);

    const data = {
        name,
        style,
        abv,
        ibu: convertedIbu,
        brewery,
        country,
        rating: convertedRating,
    };

    await beer.add(data);
    res.redirect("/beer");
};

const getBeer = async (req, res) => {
    const allItems = await beer.list();
    res.render("beer-list", { allItems });
};

const deleteBeer = async (req, res) => {
    await beer.remove(req.query.index);
    res.redirect("/beer");
};

module.exports = {
    getForm,
    postForm,
    getBeer,
    deleteBeer,
};