const router = require("express").Router();
const postController = require("../../controllers/v1/posts")
const verify = require("./verifyToken");


//create a post
router.post("/", postController.createPost)

//update a post
router.put("/:id", postController.updatePost);

//delete a post
router.delete("/:id", verify, postController.deletePost);

//like / dislike a post
router.put("/:id/like", postController.likeOrDislikePost)

//get a post
router.get("/:id", postController.getPost)

//get timeline posts
router.get("/timeline/:userId", postController.getTimelinePost);

//get user's posts
router.get("/profile/:username", postController.getUserPost)

//get all
router.get("/allposts/getall", verify, postController.getAll);
  
  module.exports = router;


module.exports = router;