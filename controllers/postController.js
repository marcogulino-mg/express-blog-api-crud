//posts.js Array of OBJECT IMPORT
const postsList = require("../data/posts");

//INDEX
function index(req, res) {
  //postFiltered equals to postsList
  let postFiltered = postsList;

  //Find posts with a certain tag
  if(req.query.tags) {
    postFiltered = postsList.filter((post) => post.tags.includes(req.query.tags));
  }

  res.json(postFiltered);
}

//SHOW
function show(req, res) {
  //ID from URL
  const id = parseInt(req.params.id);
  
  //Find post with a certain id
  const postFiltered = postsList.find((post) => post.id === id);
  //Check if posts is undefined
  if (!postFiltered) {
    //404 Status
    res.status(404);

    //Error message JSON
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json(postFiltered);
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

  //Check if post is undefined
  if (!post) {
    //404 Status
    res.status(404);

    //Error message JSON
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  //Removing the post with the corresponding id
  postsList.splice(postsList.indexOf(post), 1);
  console.log(postsList);

  //RETURN STATUS
  res.sendStatus(204);
}

//MODULE EXPORT
module.exports = { index, show, store, update, modify, destroy };
