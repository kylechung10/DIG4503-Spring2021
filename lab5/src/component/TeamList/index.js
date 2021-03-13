import React from 'react';

export default function TeamList(props) {
    return (
        <div>
            <h2>{props.pokemon.name}</h2>
            <p>Pokemon ID: <b>{props.pokemon.id}</b></p>
            <img src={props.pokemon.sprites.front_default} />
        </div>
    );
}
