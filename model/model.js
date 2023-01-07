const mongoose = require("mongoose");

const shortenedUrlSchema = new mongoose.Schema({
    original_url: { type: String }
});

const shortenedUrl = mongoose.model("ShortenedUrl", shortenedUrlSchema);

module.exports = shortenedUrl;
