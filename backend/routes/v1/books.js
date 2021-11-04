const router = require("express").Router();
const bookController = require("../../controllers/v1/books")


//create a book
router.post("/", bookController.createBook)

//update a book
router.put("/:id", bookController.updateBook);

//delete a book
router.delete("/:id", bookController.deleteBook);

//get a book
router.get("/:id", bookController.getBook)

router.get("/mybooks/:username", bookController.getUserBooks)

router.get("/allbooks/getall", bookController.getAll)


module.exports = router;