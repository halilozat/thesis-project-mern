const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", (req,res) => {
    res.send("aaa")
})

module.exports = router