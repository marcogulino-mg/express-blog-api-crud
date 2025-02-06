//posts.js Array of OBJECT IMPORT
const postsList = require("../data/posts");

//INDEX
function index(req, res) {
  res.json(postsList);
}

//SHOW
function show(req, res) {
  //Find posts with a certain tag
  const posts = postsList.filter((posts) => posts.tags.includes(req.params.tags));
  res.json(posts);
}

//STORE
function store(req, res) {
  res.send("Aggiungo un post");
}

//UPDATE
function update(req, res) {
  res.send("Modifico interamente il post con id: " + req.params.id);
}

//MODIFY
function modify(req, res) {
  res.send("Modifico parzialmente il post con id: " + req.params.id);
}

//DESTROY
function destroy(req, res) {
  //ID from URL
  const id = parseInt(req.params.id);

  //Find post using ID
  const post = postsList.find((post) => post.id === id);

  //Removing the post with the corresponding id
  postsList.splice(postsList.indexOf(post), 1);
  console.log(postsList);

  //RETURN STATUS
  res.sendStatus(204);
}

//MODULE EXPORT
module.exports = { index, show, store, update, modify, destroy };
