const Serie = require("../../models/Serie");
const User = require("../../models/User");


//create a serie
const createSerie = async (req, res) => {
    const newSerie = new Serie(req.body);
    try {
        const savedSerie = await newSerie.save();
        res.status(200).json(savedSerie);
    } catch (err) {
        res.status(500).json(err);
    }
}

//update a serie
const updateSerie = async (req, res) => {
    try {
        const serie = await Serie.findById(req.params.id);
        if (serie.userId === req.body.userId) {
            await serie.updateOne({ $set: req.body });
            res.status(200).json("the serie has been updated");
        } else {
            res.status(403).json("you can update only your serie");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

//delete a serie
const deleteSerie = async (req, res) => {
    try {
        const serie = await Serie.findById(req.params.id);
        if (serie.userId === req.body.userId) {
            await serie.deleteOne();
            res.status(200).json("the serie has been deleted");
        } else {
            res.status(403).json("you can delete only your serie");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


//get a serie
const getSerie = async (req, res) => {
    try {
        const serie = await Serie.findById(req.params.id);
        res.status(200).json(serie);
    } catch (err) {
        res.status(500).json(err);
    }
}

//get user's all serie

const getUserSerie = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const series = await Serie.find({ userId: user._id });
        res.status(200).json(series);
    } catch (err) {
        res.status(500).json(err);
    }
};

//get all series
const getAll = async (req, res) => {
    try {
        const series = await Serie.find()
        res.status(200).json(series)

    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = {
    createSerie,
    updateSerie,
    deleteSerie,
    getSerie,
    getUserSerie,
    getAll
}