const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        requried: true,
        trim: true
    },
    name: {
        type: String,
        requried: true,
        trim: true
    },
    event: {
        type: Date,
        requried: true

    },
    DOB: {
        type: Date,
        requried: true

    },
    score: {
        type: Number,
        requried: true,
        trim: true

    }
})



const MensRanking = new mongoose.model("Mensranking", menSchema);

module.exports = MensRanking;