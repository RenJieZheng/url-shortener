const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("/ endpoint");
    res.send("/ endpoint")
});

module.exports = router;
