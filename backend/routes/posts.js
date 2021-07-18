const router = require("express").Router();
const postController = require("../controllers/posts")


//create a post
router.post("/", postController.createPost)

//update a post
router.put("/:id", postController.updatePost);

//delete a post
router.delete("/:id", postController.deletePost);

//like / dislike a post
router.put("/:id/like", postController.likeOrDislikePost)

//get a post
router.get("/:id", postController.getPost)

//get timeline posts
router.get("/timeline/:userId", postController.getTimelinePost);

//get user's posts
router.get("/profile/:username", postController.getUserPost)


module.exports = router;