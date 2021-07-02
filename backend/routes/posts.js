const router = require("express").Router();


router.get("/", (req,res) => {
    res.send("aaa")
})

module.exports = router