const router = require("express").Router();
const messageController = require("../../controllers/v1/messages")

//add

router.post("/", messageController.addMessage);

//get

router.get("/:conversationId", messageController.getMessage);

module.exports = router;