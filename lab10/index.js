import Database from "./Database.js";

import Express from "express";

const App = Express();
const port = 45030;

const db = new Database();

db.connect();

App.use(Express.json());

App.put("/people/create", (req, res) => {
  let fName = req.body.firstName;
  let lName = req.body.lastName;
  let fColor = req.body.favoriteColor;

  //Run the createOne function using parameters of the req.body and respond with the document created
  db.createOne(fName, lName, fColor).then((response) => res.json(response));
});

App.get("/people/:person", (req, res) => {
  let search = req.params.person;
  //Use Database method of readOne and respond with the document or {person: "not found"}
  db.readOne(search).then((response) => res.json(response));
});

//Listen on port 45030
App.listen(port, () => {
  console.log("Server is running.");
});
