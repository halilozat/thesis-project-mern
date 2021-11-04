const Book = require("../../models/Book");
const User = require("../../models/User");


//create a Book
const createBook = async (req, res) => {
    const newBook = new Book(req.body);
    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err);
    }
}

//update a Book
const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book.userId === req.body.userId) {
            await book.updateOne({ $set: req.body });
            res.status(200).json("the book has been updated");
        } else {
            res.status(403).json("you can update only your book");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

//delete a Book
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book.userId === req.body.userId) {
            await book.deleteOne();
            res.status(200).json("the book has been deleted");
        } else {
            res.status(403).json("you can delete only your book");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


//get a Book
const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
}

//get user's all Books

const getUserBooks = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const books = await Book.find({ userId: user._id });
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json(err);
    }
};

//get all Books
const getAll = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)

    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getBook,
    getUserBooks,
    getAll
}