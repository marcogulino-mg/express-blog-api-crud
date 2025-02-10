//posts.js Array of OBJECT IMPORT
const postsList = require("../data/posts");

//INDEX
function index(req, res) {
  //postFiltered equals to postsList
  let postFiltered = postsList;
  //Debug error
  // throw new Error("Errore di Test");
  //Find posts with a certain tag
  if (req.query.tags) {
    postFiltered = postsList.filter((post) =>
      post.tags.includes(req.query.tags)
    );
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
  //Creiamo nuovo ID da assegnare al nuovo post
  const newId = postsList[postsList.length - 1].id + 1;

  //Creazione di un nuovo oggetto post
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  //Aggiungo il nuovo post all'array di oggetti posts
  postsList.push(newPost);

  //Check
  console.log(postsList);

  //Return status e il post creato
  res.status(201);
  res.json(newPost);
}

//UPDATE
function update(req, res) {
  //Converto parametro dinamico da string a number
  const id = parseInt(req.params.id);

  //Cerchiamo il post tramite l'id
  const post = postsList.find((post) => post.id === id);

  //Controlliamo se post è undefined
  if (!post) {
    //Imposto lo status 404 (perchè in EXPRESS lo status di default è 200)
    res.status(404);

    //JSON con l'errore
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  //Modifichiamo i valori del post trovato col find
  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  //Return post modificato
  res.send(post);

  console.log(post);
}

//MODIFY
function modify(req, res) {
  //Converto parametro dinamico da string a number
  const id = parseInt(req.params.id);

  //Cerchiamo il post tramite l'id
  const post = postsList.find((post) => post.id === id);

  //Controlliamo se post è undefined
  if (!post) {
    //Imposto lo status 404 (perchè in EXPRESS lo status di default è 200)
    res.status(404);

    //JSON con l'errore
    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  //Modifichiamo i valori del post richiesto (Se i valori sono presenti nella body request)
  if (req.body.title) {
    post.title = req.body.title;
  } else {
    post.title = post.title;
  }

  //VERSIONE CON OPERATORE TERNARIO
  req.body.content ? post.content = req.body.content : post.content = post.content;
  req.body.image ? post.image = req.body.image : post.image = post.image;
  req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;

  //Return post modificato
  res.send(post);

  console.log(post);
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
