const router = require("express").Router();
const userController = require("../../controllers/v1/users")
const verify = require("./verifyToken");


//update user
router.put("/:id", verify, userController.updateUser);

//delete user
router.delete("/:id", verify, userController.deleteUser);

//get a user
router.get("/", userController.getUser);

//get all user
router.get("/getall", verify, userController.getall);

//get friends
router.get("/friends/:userId", userController.getFriends);

//follow a user
router.put("/:id/follow", userController.followUser);

//unfollow a user
router.put("/:id/unfollow", userController.unfollowUser);

//get user stats
router.get("/stats", userController.getUserStats);

module.exports = router;