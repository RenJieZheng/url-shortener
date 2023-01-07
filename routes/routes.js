const router = require("express").Router();
const path = require("path");

const homepage = path.join(__dirname, "..", "views", "index.html");
const shortenedUrl = require("../model/model");

router.get("/", (req, res) => {
    res.sendFile(homepage);
});

router.get("/shorturl", async (req, res) => {
    const originalUrl = req.query.input_url;
    try {
        shortUrl = await shortenedUrl.find({ original_url: originalUrl });
        if (shortUrl[0] == null) {
            res.send("no existing shorturl");
        } else {
            res.json({ shortUrl: shortUrl[0].id} );
        }
    } catch (error) {
        res.send("no existing shorturl");
    }
});

router.post("/shorturl", async (req, res) => {
    const originalUrl = req.body.input_url;
    const shortUrl = new shortenedUrl({
        original_url: originalUrl
    });
    try {
        const newShortUrl = await shortUrl.save();
        res.json({ shortUrl: newShortUrl.id });
    } catch (error) {
        res.send(error.message);
    }
});

router.get("/shorturl/:shorturl", async (req, res) => {
    try {
        const id = req.params.shorturl;
        const shortUrl = await shortenedUrl.findById(id);
        if (shortUrl == null) {
            res.send("no such shorturl");
        } else {
            res.redirect(shortUrl.original_url);
        }
    } catch (error) {
        res.send("no such shorturl");
    }
});

module.exports = router;
