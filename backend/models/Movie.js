const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        name:
        {
            type: String,
            required: true, 
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
        fav: {
            type: Boolean, 
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);