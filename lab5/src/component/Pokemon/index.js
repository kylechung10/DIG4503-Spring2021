import React from 'react';

//Fixed component issues

export default function Pokemon({pokemon}) {
    return (
        <div>
            <h2>{pokemon.name}</h2>
                <p>Pokemon ID: <b>{pokemon.id}</b></p>
                <img src={pokemon.sprites.front_default} />
        </div>    
    )
}
