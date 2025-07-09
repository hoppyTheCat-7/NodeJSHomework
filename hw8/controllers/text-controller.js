const fs = require("fs");

const getAnalysis = async (req, res) => {
    try {
        const form = await parseTemplate("text-form");
        res.status(200).send(form);
    } catch (err) {
        return res.status(500).send("Internal Server Error!");
    }
};

const postAnalysis = async (req, res) => {
    try {
        const { text } = req.body;

        if (text === "") {
            res.status(400).send("Bad request!");
        }

        const characterCount = text.length;

        const words = text.split(/\s+/);
        const shortWords = words.filter((word) => word.length < 5).length;
        const longWords = words.filter((word) => word.length > 5).length;
        const fiveCharWords = words.filter((word) => word.length === 5).length;

        const sentences = text.split(/[.?!]\s*/);
        const sentenceCount = sentences.filter((sentence) => sentence.trim().length > 0).length;

        const wordCount = words.filter((word) => word.trim().length > 0).length;

        const startWithVowelWords = words.filter((word) => {
            return  (word.startsWith("a") || word.startsWith("A")) || 
                    (word.startsWith("e") || word.startsWith("E")) || 
                    (word.startsWith("i") || word.startsWith("I")) || 
                    (word.startsWith("o") || word.startsWith("O")) || 
                    (word.startsWith("u") || word.startsWith("U"));
        }).length;

        const analysis = await parseTemplate("text-analysis", {
            characterCount,
            shortWords,
            longWords,
            fiveCharWords,
            sentenceCount,
            wordCount,
            startWithVowelWords,
        });

        res.status(200).send(analysis);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error!");
    }
};

const parseTemplate = (template, data = null) => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            `${__dirname}/../views/${template}.html`,
            "utf-8",
            (err, content) => {
                if (err) reject(err);

                if (data) {
                    for (const datum in data) {
                        content = content.replace(`{{${datum}}}`, data[datum]);
                    }
                }
                resolve(content);
            }
        );
    });
};

module.exports = {
    getAnalysis,
    postAnalysis,
};