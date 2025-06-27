// 1. Prosirete go kalkulatorot so operacii
// 2. Dodadete uslov dokolku delite so 0
// (Bonus: pronajdete i drugi presmetki koi moze da gi vmetnete)

// GET method
const http = require("http");

const calculator = (req, res) => {
    const [_, op, num1, num2] = req.url.split("/");
    const myUrl = req.url.split("/");
    console.log("My URL:", myUrl);

    let result;

    switch (op) {
        case "sobiranje":
            result = Number(num1) + Number(num2);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozhenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            if (Number(num2) === 0) {
                res.end("Ne mozhete da delite so 0!");
            } else {
                result = Number(num1) / Number(num2);
                res.end(`${result}`);
            }
            break;
        case "modulo":
            result = Number(num1) % Number(num2);
            res.end(`${result}`);
            break;
        case "kvadrat":
            if (Number(num1) === Number(num2)) {
                result = Number(num1) * Number(num2);
                res.end(`${result}`);
            } else {
                res.end("Dvata operanda mora da se ist broj!");
            }
            break;
        default:
            res.end("Nepoznata operacija!");
            break;
    }
};

// const server = http.createServer(calculator);
// server.listen(8080, () => console.log("Server started at port 8080"));

// http://localhost:8080/sobiranje/4/6
// http://localhost:8080/odzemanje/10/7
// http://localhost:8080/mnozhenje/5/5
// http://localhost:8080/delenje/9/3
// http://localhost:8080/delenje/9/0
// http://localhost:8080/modulo/10/4
// http://localhost:8080/kvadrat/7/7
// http://localhost:8080/kvadrat/7/2

// --------------------------------------------------------------------
// 2. Definirajte gi rutite za konverzija i istite treba da gi istestirate da go dadat rezultatot vo vasiot prebaruvac 
// (Bonus: dodadete plus ruta za nova konverzija)
// GET method & POST method

const conversion = (req, res) => {
    const [_, convert, num] = req.url.split("/");
    const myUrl = req.url.split("/");
    console.log("My URL:", myUrl);

    let unit = Number(num);
    let convertedVal;

    switch (convert) {
        case "mi-to-km":
            convertedVal = unit * 1.6;
            res.end(`${unit} miles to kilometers: ${convertedVal}`);
            break;
        case "f-to-c":
            convertedVal = (unit -32) * 5 / 9;
            res.end(`${unit} fahrenheit to celsius: ${convertedVal}`);
            break;
        case "lbs-to-kg":
            convertedVal = unit * 0.453;
            res.end(`${unit} pounds to kilograms: ${convertedVal}`);
            break;
        case "ft-to-m":
            convertedVal = unit * 0.3048;
            res.end(`${unit} feet to meters: ${convertedVal}`);
            break;
        default:
            res.end("Invalid unit!");
            break;
    }

    // if (req.method === "POST" && req.url === "/eur-to-mkd") {
    //     let data = "";

    //     req.on("data", (chunk) => {
    //         console.log("Chunks:", chunk);
    //         data += chunk;
    //     });

    //     req.on("end", ()=> {
    //         const unit = JSON.parse(data);
    //         let convertedVal;

    //         switch (unit.currency) {
    //             case "eur-to-mkd":
    //                 convertedVal = Number(unit.value) * 61.5;
    //                 res.writeHead(200, {"content-type:": "text/plain"});
    //                 res.end(`${unit} eur to mkd: ${convertedVal}`);
    //                 break;
    //             default:
    //                 res.end("Page Not Found");
    //                 break;
    //         }
    //     });
    // }
};

const serverTwo = http.createServer(conversion);
serverTwo.listen(3000, () => console.log("ServerTwo started at port 3000"));

// http://localhost:3000/mi-to-km/5
// http://localhost:3000/f-to-c/75
// http://localhost:3000/lbs-to-kg/3
// http://localhost:3000/ft-to-m/10

// JSON
// {
//     "currency": "eur",
//     "value": "100"
// }

// http://localhost:3000/eur-to-mkd