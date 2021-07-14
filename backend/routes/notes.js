const router = require("express").Router();
const noteController = require("../controllers/notes")


//create a note
router.post("/", noteController.createNote)

//update a note
router.put("/:id", noteController.updateNote);

//delete a note
router.delete("/:id", noteController.deleteNote);

//get a note
router.get("/:id", noteController.getNote)

router.get("/mynotes/:username", noteController.getUserNotes)


module.exports = router;