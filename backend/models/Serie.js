const mongoose = require("mongoose");

const SerieSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        name:
        {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        point: {
            type: Number,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Serie", SerieSchema);