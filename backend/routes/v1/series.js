const router = require("express").Router();
const serieController = require("../../controllers/v1/series")


//create a serie
router.post("/", serieController.createSerie)

//update a serie
router.put("/:id", serieController.updateSerie);

//delete a serie
router.delete("/:id", serieController.deleteSerie);

//get a serie
router.get("/:id", serieController.getSerie)

router.get("/myseries/:username", serieController.getUserSerie)

router.get("/allseries/getall", serieController.getAll)


module.exports = router;