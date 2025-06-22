// Requiring unit functions from 'conversion.js' file:
const units = require("./conversion");

console.log("km:", units.convertMilesToKm(10));
console.log("deg. F:", units.convertCelsiusToFahrenheit(27));
console.log("kg:", units.convertPoundsToKilograms(5));
console.log("m:", units.convertFeetToMetres(7));

// ----------------------------------------------------------------------------------------
// Requiring currency functions from 'conversion.js' file (destructuring method):
// const {convertEurToMkDen, convertRsDinToMkDen, convertHufToEur} = require("./conversion");

// console.log("EUR --> MKD:", convertEurToMkDen(200));
// console.log("RSD --> MKD:", convertRsDinToMkDen(5000));
// console.log("HUF --> EUR:", convertHufToEur(10000));