const dotenv = require("dotenv");
const express = require("express");
// const cors = require("cors");
const router = require("./routes/routes");

const main = () => {
    const app = express();
    const port = process.env.PORT || 3000;
    dotenv.config("./.env");
    // app.use(cors());
    app.use("/", router);
    
    app.listen(port, () => {
        console.log(`Listening on Port: ${port}`);
    })
}

main();
