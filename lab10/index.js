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

  db.createOne(fName, lName, fColor);

  //Respond with the document created
  res.json(req.body);
  console.log(req.body);
});

App.get("/people/:person", (req, res) => {
  db.readOne(req.params.person);

  res.json(document);
  console.log(document);
});

//Listen on port 45030
App.listen(port, () => {
  console.log("Server is running.");
});
