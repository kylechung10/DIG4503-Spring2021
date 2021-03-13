import React, { useState } from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon/index';

function Search() {

        const [searchpoke, setSearch] = useState("");

        const [pokemon, setPokemon] = useState("");

        const [loading, setLoading] = useState(true);
     
        const [errorInput, setFail] = useState(false);

        function searchPokemon() {

            setLoading(true);
            setFail(false);

            Axios('https://pokeapi.co/api/v2/pokemon/' + searchpoke)

                .then(function (response) {
                    setPokemon(response.data);
                    setLoading(false);
                })
        
                .catch(function () {
                    setFail(true);
                    setLoading(false);
                });
        }
     
        return (
            <div>
                <input type="text" onChange={(event) => setSearch(event.target.value)} />
                <button onClick={() => searchPokemon()}>Search Pokemon</button>

                {
                    (loading == true) ? (
                        <h1>Input a Pokemon name!</h1>
                    ) : (
                            (errorInput == false) ? (
                                <Pokemon pokemon={pokemon}/>
                            ) : (
                                    <div>
                                        <h1>Not Found!</h1>
                                    </div>    
                                )
                        )
                }

            </div>
        );
}

export default Search;