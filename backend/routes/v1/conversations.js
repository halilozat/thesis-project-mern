const router = require("express").Router();
const conversationController = require("../../controllers/v1/conversations");


//new conv
router.post("/",  conversationController.newConversation);


//get conv of a user
router.get("/:userId", conversationController.getConversation);


// get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", conversationController.getIncludesTwoUserId);

module.exports = router;