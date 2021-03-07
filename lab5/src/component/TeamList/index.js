import React from 'react'

export default function TeamList({pokemon}) {
    return (
        <div>
            <p>Pokemon {pokemon.id}</p>
            <img src={pokemon.sprites.front_default} />
        </div>
    )
}