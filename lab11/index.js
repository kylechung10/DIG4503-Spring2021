import Database from "./Database.js";

import Express from "express";
import CORS from "cors";

const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS());

const dataB = new Database();

dataB.connect();

// PUT /books/:ISBN. The route should accept additional data via request.body of the following properties:
// title,
// author,
// description.
App.put("/books/:ISBN", (req, res) => {
  let newISBN = req.params.ISBN;
  let newTitle = req.body.title;
  let newAuthor = req.body.author;
  let newDesc = req.body.description;

  dataB
    .createOne(newISBN, newTitle, newAuthor, newDesc)
    .then((response) => res.json(response));
});

// GET /books/:ISBN. Should return a document matching its ISBN or {book: "not found"}
App.get("/books/:ISBN", (req, res) => {
  let bookSearch = req.params.ISBN;
  dataB.readOne(bookSearch).then((response) => res.json(response));
});

// POST /books/search. Should return an array of documents matching any URL parameters used for searching. URL parameter(s) can include:
// title
// author
App.post("/books/search", (req, res) => {
  // Grab URL parameters
  let urlTitle = req.query.title;
  let urlAuthor = req.query.author;
  dataB.readMany(urlTitle, urlAuthor).then((response) => res.json(response));
});

// PATCH /books/:ISBN. Should accept additional data via request.body of the following optional properties:
// title,
// author,
// description.
App.patch("/books/:ISBN", (req, res) => {
  let updateURL = req.params.ISBN;
  // Grab JSON body parameters
  let updateTitle = req.body.title;
  let updateAuthor = req.body.author;
  let updateDesc = req.body.description;

  dataB
    .updateOne(updateURL, updateTitle, updateAuthor, updateDesc)
    .then((response) => res.json(response));
});

// DELETE /books/:ISBN  Should return number of documents deleted, if any, in the form of {books: <number>}
App.delete("/books/:ISBN", (req, res) => {
  let bookDelete = req.params.ISBN;
  dataB.deleteOne(bookDelete).then((response) => res.json(response));
});

//Listen port
App.listen(port, () => {
  console.log("Server is active");
});
