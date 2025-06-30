const handleWelcomeGet = (req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to our Node.js server!");
};

const handleUserPost = (req, res, username) => {
    const usernamePattern = /^[a-zA-Z\d_]{3,}$/;

    if (usernamePattern.test(username)) {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`Hello, ${username}`);
} else {
    res.writeHead(400, { "content-type": "text/plain" });
    res.end("Invalid username format!");
}
};

const handleNotFound = (req, res) => {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Page Not Found");
};

module.exports = {
    handleWelcomeGet,
    handleUserPost,
    handleNotFound,
};