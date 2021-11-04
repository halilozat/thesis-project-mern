const router = require("express").Router();
const noteController = require("../../controllers/v1/notes")


//create a note
router.post("/", noteController.createNote)

//update a note
router.put("/:id", noteController.updateNote);

//delete a note
router.delete("/:id", noteController.deleteNote);

//get a note
router.get("/:id", noteController.getNote)

router.get("/mynotes/:username", noteController.getUserNotes)

router.get("/allnotes/getall", noteController.getAll)


module.exports = router;