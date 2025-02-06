//Express IMPORT
const express = require("express");
const router = express.Router();
//posts.js Array of OBJECT IMPORT
const postsList = require("../data/posts");
//CONTROLLERS IMPORT
const postController = require("../controllers/postController");

//CRUD Routes of posts
//INDEX
router.get("/", postController.index);

//SHOW
router.get("/:id", postController.show);

//STORE
router.post("/", postController.store);

//UPDATE
router.put("/:id", postController.update);

//MODIFY
router.patch("/:id", postController.modify);

//DELETE
router.delete("/:id", postController.destroy);

//Router EXPORT
module.exports = router;
