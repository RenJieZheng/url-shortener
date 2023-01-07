const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/routes");

const main = async () => {
    // Middleware
    const app = express();
    const port = process.env.PORT || 3000;
    dotenv.config("./.env");
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Add router
    app.use("/", router);

    // Setup database connection
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on("error", (error) => { console.log(error); });
    db.once("open", () => { console.log("Connected to database"); })
    
    // Start server
    app.listen(port, () => {
        console.log(`Listening on Port: ${port}`);
    })
}

main();
