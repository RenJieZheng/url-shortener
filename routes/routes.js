const router = require("express").Router();
const path = require("path");

const homepage = path.join(__dirname, "..", "views", "index.html");

router.get("/", (req, res) => {
    res.sendFile(homepage);
});

router.get("/shorturl", (req, res) => {
    console.log(req.query);
    res.send("/shorturl get endpoint");
});

router.post("/shorturl", (req, res) => {
    console.log(req.body);
    res.send("/shorturl post endpoint");
});


module.exports = router;
