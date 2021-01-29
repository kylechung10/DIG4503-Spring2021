import axios from 'axios';
import chalk from 'chalk';

//Create a class named Fetch in a file named Fetch.js
class Fetch {
    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;
    }

    //Create a method named fetch() inside the Fetch class
    fetch() {
        const myColor = this.color;
        //This should use axios to request data from the PokeAPI
        axios('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)

        //If a valid Pokemon (or ID number) is passed, it should use the color property using chalk.hex() to display the name and id of the Pokemon requested
        .then(function (response) {
            const pokemon = response.data;

            console.log(chalk.hex(myColor)("Pokemon Name: " + pokemon.name + " and ID: " + pokemon.id));
        })

        //If an invalid Pokemon/ID is used, the code should report an error using chalk.red()
        .catch(function (error) {
            console.log(chalk.red("This is an invalid Pokemon name or ID " + error));
        });
    }
}

export default Fetch;