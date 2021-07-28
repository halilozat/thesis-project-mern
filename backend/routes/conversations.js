const router = require("express").Router();
const conversationController = require("../controllers/conversations");

//new conv

router.post("/",  conversationController.newConversation);

//get conv of a user

router.get("/:userId", conversationController.getConversation);



module.exports = router;