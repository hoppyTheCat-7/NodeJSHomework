// - Креирање на модул за конверзија на вредности од еден во друг систем 
// (mi -> km, c -> f, lbs -> kg, ft -> m)

const convertMilesToKm = (mi) => {
    let km = mi * 1.6;
    return km;
};

console.log("Kilometre(s):", convertMilesToKm(2));

const convertCelsiusToFahrenheit = (c) => {
    let degF = (c * 9 / 5) + 32;
    return degF;
};

console.log("Degree(s) Fahrenheit:", convertCelsiusToFahrenheit(35));

const convertPoundsToKilograms = (lbs) => {
    let kg = lbs * 0.453;
    return kg;
};

console.log("Kilogram(s):", convertPoundsToKilograms(3));

const convertFeetToMetres = (ft) => {
    let m = ft * 0.3048;
    return m;
};

console.log("Metre(s):", convertFeetToMetres(5));

// - index.js --> ovde treba da se koristat
module.exports = {
    convertMilesToKm,
    convertCelsiusToFahrenheit,
    convertPoundsToKilograms,
    convertFeetToMetres
};

// ------------------------------------------------------------------------------------------
// Currency Converters:
const convertEurToMkDen = (eur) => {
    let mkd = eur * 61.5;
    return mkd;
};

console.log("EUR to MKD:", convertEurToMkDen(100));

const convertRsDinToMkDen = (rsd) => {
    let mkd = rsd * 0.52;
    return mkd;
};

console.log("RSD to MKD:", convertRsDinToMkDen(1200));

const convertHufToEur = (ft) => {
    let eur = ft * 0.0025;
    return eur;
};

console.log("HUF to EUR:", convertHufToEur(400));

// module.exports = {
//     convertEurToMkDen,
//     convertRsDinToMkDen,
//     convertHufToEur
// };