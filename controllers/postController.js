//INDEX
function index(req, res) {
  res.send("Stampo tutti i post");
}

//SHOW
function show(req, res) {
  res.send("Stampo i post con id: " + req.params.id);
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
  res.send("Cancello il post con id: " + req.params.id);
}

//MODULE EXPORT
module.exports = { index, show, store, update, modify, destroy };
