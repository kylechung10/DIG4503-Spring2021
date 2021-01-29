//Import the Fetch.js and use the Fetch class
import Fetch from './Fetch.js';

//Creating a new object and pass a valid Pokemon/ID and color
const valid = new Fetch("mudkip","#00FFFF");
valid.fetch(); //Call function fetch with valid properties

//Creating a second object with an invalid Pokemon/ID
const invalid = new Fetch("cat");
invalid.fetch(); //Call function fetch with a new invalid property