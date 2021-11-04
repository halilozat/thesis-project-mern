const Movie = require("../../models/Movie");
const User = require("../../models/User");


//create a Movie
const createMovie = async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(200).json(savedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
}

//update a Movie
const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie.userId === req.body.userId) {
            await movie.updateOne({ $set: req.body });
            res.status(200).json("the movie has been updated");
        } else {
            res.status(403).json("you can update only your movie");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

//delete a movie
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie.userId === req.body.userId) {
            await movie.deleteOne();
            res.status(200).json("the movie has been deleted");
        } else {
            res.status(403).json("you can delete only your movie");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


//get a movie
const getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
}

//get user's all movie

const getUserMovies = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const movies = await Movie.find({ userId: user._id });
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
};

//get all movies
const getAll = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json(movies)

    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovie,
    getUserMovies,
    getAll
}