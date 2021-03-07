import React, { useState } from 'react';
import Axios from 'axios';
import TeamList from '../TeamList';

function Team() {

    const [inputPoke, setInput] = useState("");

    const [pokemon, setPokemon] = useState("");

    const items = useState([]);

    const [pass, setPass] = useState(false);

    function validPokemon() {

        setPass(false);

        Axios('https://pokeapi.co/api/v2/pokemon/' + inputPoke)

            .then(function (response) {
                setPokemon(response.data);
                setPass(true);
                items.push(TeamList);
            })
    
            .catch(function () {
                alert("Invalid");
            });
        
    }

    if (pass == true) {
        items.push(pokemon);
        setPass(false);
    }
    
    return (
        <div>
            <h1>Welcome to the Pokemon Team Builder</h1>
            <h3>Start by entering a valid Pokemon name to add to your team!</h3>
            <input type="text" onChange={(event) => setInput(event.target.value)} />
            <button onClick={() => validPokemon()}>Add Pokemon</button>
            <div>{items}</div>
        </div>
    )
}
export default Team;