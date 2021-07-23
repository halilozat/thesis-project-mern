const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        name:
        {
            type: String,
            require: true,
        },
        writer:
        {
            type: String,
            require: true,
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

module.exports = mongoose.model("Book", BookSchema);