const Note = require("../../models/Note");
const User = require("../../models/User");


//create a note
const createNote = async (req, res) => {
    const newNote = new Note(req.body);
    try {
        const savedNote = await newNote.save();
        res.status(200).json(savedNote);
    } catch (err) {
        res.status(500).json(err);
    }
}

//update a note
const updateNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (note.userId === req.body.userId) {
            await note.updateOne({ $set: req.body });
            res.status(200).json("the note has been updated");
        } else {
            res.status(403).json("you can update only your note");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

//delete a note
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (note.userId === req.body.userId) {
            await note.deleteOne();
            res.status(200).json("the note has been deleted");
        } else {
            res.status(403).json("you can delete only your note");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


//get a note
const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}

//get user's all notes

const getUserNotes = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const notes = await Note.find({ userId: user._id });
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json(err);
    }
};

//gett all notes
const getAll = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)

    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getNote,
    getUserNotes,
    getAll
}