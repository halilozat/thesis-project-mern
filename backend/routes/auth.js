const router = require("express").Router();
const authController = require("../controllers/auth")


//REGISTER
router.post("/register", authController.register);
  

  //LOGIN
  router.post("/login", authController.login);
  
  module.exports = router;