import Express from 'express';
//Install express
import CORS from 'cors';
//Add CORS support

const App = Express();
const port = 45030;
//Create a index.js file that uses Express and listens on port 45030

App.use(CORS());
//Add CORS support

//Add the following array to the index.js file
let names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

//Create a GET route called people/:person where person is a route parameter
App.get("/people/:person", (req, res) => {

    //If the name is not found, the route should respond with a JSON object, {name: "not found"}
    let result = {name: "not found"};

    names.forEach((value) => {
        if (req.params.person == value) {
            //Should return a JSON object with the property, {name: "name"}, for exact matches of a name found in the array names.
            result = {name: value};
        }
    });

    res.json(result);
})

//Create a GET route called search/:name where name is a route parameter
App.get("/search/:name", (req, res) => {

    //If search cannot be found, the route should respond with a JSON object, {search: ["not found"]}
    let result = { search: "not found" };
    
    let arrayRes = [];

    names.forEach((value) => {
        if (value.includes(req.params.name)) {
            //If the route parameter is included, push it to the new array
            arrayRes.push(value);
        }
    });

    if (arrayRes.length > 0) {
            //Should return a JSON object, {search: [names]}, based on if the route parameter can be found in the string of the name
        result = { search: arrayRes };
    }

    res.json(result);
})

//Add a new PUT route with the path "people/:person"
App.put("/people/:person", (req, res) => {
    const newName = req.params.person;
    names.push(newName);
    //Add a new name to the names array based on the request parameter.
    res.json({ name: newName });
    //Respond with JSON object with a name property set to the name added to the array.
});

//Listen on port 45030
App.listen(port, () => {
    console.log("Server running");
});