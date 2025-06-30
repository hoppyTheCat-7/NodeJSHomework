// - Да се напишат 10 различни регуларни изрази (по ваша желба)

// I Phone number patterns:
// 070573162            -->     /\d{9}/g
// 070 573 162          -->     /(\d{3})[\s]?(\d{3})[\s]?(\d{3})/g    
// 070-573-162          -->     /(\d{3})[\s-]?(\d{3})[\s-]?(\d{3})/g
//                              /(\d{3})[\s-]?[\s]?(\d{3})[\s-]?[\s]?(\d{3})/g
// 070 - 573 - 162      -->     /(\d{3})[\s]?[-]?[\s]?(\d{3})[\s]?[-]?[\s]?(\d{3})/g
// (070) 573 162        -->     /\(?(\d{3})\)?[\s]?[-]?[\s]?(\d{3})[\s]?[-]?[\s]?(\d{3})/g

// +389 70 573 162      -->     /(\+)(\d{3})[\s]?(\d{2})[\s]?(\d{3})[\s]?(\d{3})/g
// +389-70-573-162      -->     /(\+)(\d{3})[\s-]?(\d{2})[\s-]?(\d{3})[\s-]?(\d{3})/g
// +389 - 70 - 573 - 162  -->   /(\+)(\d{3})[\s]?[-]?[\s]?(\d{2})[\s]?[-]?[\s]?(\d{3})[\s]?[-]?[\s]?(\d{3})/g

// II Email Patterns:
// hoPPy#5@yahoo.com    --> /^[a-zA-Z#$%!_+@*?&\-\d\.]+[@][a-z]+\.[a-z]{2,3}$/gm
// hOppy5%@yahoo.com


// - Искористете регуларен израз во POST барање
const http = require("http");
const url = require("url");

const handlerFuncs = require("./handlers/handler");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // GET request: /welcome
    if (req.method === "GET" && parsedUrl.pathname === "/welcome") {
        handlerFuncs.handleWelcomeGet(req, res);
    }
    // POST request: /user
    else if (req.method === "POST" && parsedUrl.pathname === "/user") {
        let inputData = "";

        req.on("data", chunk => {
            inputData += chunk;     // inputData += chunk.toString();
        });

        req.on("end", () => {
            const parsedData = JSON.parse(inputData);
            handlerFuncs.handleUserPost(req, res, parsedData.username);
        });
    }
    // 404 Not Found
    else {
        handlerFuncs.handleNotFound(req, res);
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

// http://localhost:3000/welcome


// POSTMAN:
// http://localhost:3000/user
// JSON 
// {
//     "username": "hoPPy_5"
// }

// {
//     "username": "hOppy$%5"
// }
