const router = require("express").Router();
const movieController = require("../../controllers/v1/movies")


//create a movie
router.post("/", movieController.createMovie)

//update a movie
router.put("/:id", movieController.updateMovie);

//delete a movie
router.delete("/:id", movieController.deleteMovie);

//get a movie
router.get("/:id", movieController.getMovie)

router.get("/mymovies/:username", movieController.getUserMovies)

router.get("/allmovies/getall", movieController.getAll)


module.exports = router;