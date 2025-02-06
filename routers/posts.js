//Express IMPORT
const express = require("express");
const router = express.Router();
//posts.js Array of OBJECT IMPORT
const postsList = require("../data/posts");

//CRUD Routes of posts
//INDEX
router.get("/", (req, res) => {
  res.json(postsList);
});

//SHOW
router.get("/:id", (req, res) => {
  res.json(postsList[req.params.id]);
});

//STORE
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

//UPDATE
router.put("/:id", (req, res) => {
  res.send("Modifica completa del post con ID: " + req.params.id);
});

//MODIFY
router.patch("/:id", (req, res) => {
  res.send("Modifica parziale del post con ID: " + req.params.id);
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send("Cancellazione del post con ID: " + req.params.id);
});

//Router EXPORT
module.exports = router;
