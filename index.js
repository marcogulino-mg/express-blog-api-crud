const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");

//Abilito funzioni extra di express (Middleware che permette la gestione di assets statici)
app.use(express.static("./public"));
//Registro il body-parser per "application/json"
app.use(express.json());
//Use new routers from routers/posts.js
app.use("/posts", postsRouter);

//Base route
app.get("/", (req, res) => {
  res.type("html").send("<h1>Server del mio blog</h1>");
});

//Server start (port: 3000)
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
