const Post = require("../../models/Post");
const User = require("../../models/User");


//create a post
const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}

//update a post
const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (req.user.isAdmin || post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
        } else {
            res.status(403).json("you can update only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

//delete a post
const deletePost = async (req, res) => {
    if (req.user.isAdmin || post.userId === req.body.userId) {
        try {
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("The post has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

//like / dislike a post
const likeOrDislikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

//get a post
const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}



//get timeline posts
const getTimelinePost = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
        res.status(500).json(err);
    }
}

//get user's all posts
const getUserPost = async (req, res) => {
    try {

        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);

    } catch (err) {
        res.status(500).json(err);
    }
}

//get all
const getAll = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    likeOrDislikePost,
    getPost,
    getTimelinePost,
    getUserPost,
    getAll
}