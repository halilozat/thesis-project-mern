const router = require("express").Router();
const messageController = require("../controllers/messages")

//add

router.post("/", messageController.addMessage);

//get

router.get("/:conversationId", messageController.getMessage);

module.exports = router;