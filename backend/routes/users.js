const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const userController = require("../controllers/users")


//update user
router.put("/:id", userController.updateUser);

//delete user
router.delete("/:id", userController.deleteUser);

//get a user
router.get("/:id", userController.getUser);

//follow a user
router.put("/:id/follow", userController.followUser);

//unfollow a user
router.put("/:id/unfollow", userController.unfollowUser);


module.exports = router;