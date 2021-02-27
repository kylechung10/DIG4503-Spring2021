import Express from 'express';

//Create a express server()
const App = Express();
const port = 45030;

//Properties for "/person" route
//name (string): your first name
//color (string): your favorite color
const person = {
    name: "kyle",
    color: "blue"
};

//Create a route ("/") that sends the string "Hello World!"
App.get("/", (req, res) => {
    res.send("Hello World!")
});

//Create a route ("/person") that sends back a JSON object with the following properties
App.get("/person", (req, res) => {
    res.json(person);
});

//Have the Express server listen on port 45030
App.listen(port, function () {
    console.log("Server running");
});