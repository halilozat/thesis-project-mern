/** Dependencies */
const router = require("express").Router();

/** Routes */
const userRoute = require("./v1/users");
const authRoute = require("./v1/auth");
const postRoute = require("./v1/posts");
const noteRoute = require("./v1/notes");
const bookRoute = require("./v1/books")
const movieRoute = require("./v1/movies")
const serieRoute = require("./v1/series")
const conversationRoute = require("./v1/conversations");
const messageRoute = require("./v1/messages");


router.use("/v1/auth", authRoute);
router.use("/v1/users", userRoute);
router.use("/v1/posts", postRoute);
router.use("/v1/notes", noteRoute);
router.use("/v1/books", bookRoute);
router.use("/v1/movies", movieRoute);
router.use("/v1/series", serieRoute);
router.use("/v1/conversations", conversationRoute);
router.use("/v1/messages", messageRoute);


module.exports = router;
