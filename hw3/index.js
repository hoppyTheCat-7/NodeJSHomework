const {writeFile, readFile, appendFile} = require("./write-read");

const mainFunction = async () => {
    try {
        await writeFile("data.txt", "Ema Ilic, ");

        const readOne = await readFile("data.txt", "utf-8");
        console.log("1.", readOne);

        await appendFile("data.txt", "51 years old, ");

        const readTwo = await readFile("data.txt", "utf-8");
        console.log("2.", readTwo);

        await appendFile("data.txt", "a linguist and philologist, ");

        const readThree = await readFile("data.txt", "utf-8");
        console.log("3.", readThree);

        await appendFile("data.txt", "currently a student at the Semos JS Academy, ");

        const readFour = await readFile("data.txt", "utf-8");
        console.log("4.", readFour);

        await appendFile("data.txt", "a firm believer in lifelong learning");

        const readFive = await readFile("data.txt", "utf-8");
        console.log("5.", readFive);
    }
    catch(err) {
        console.log("Error", err);
    }
};

mainFunction();