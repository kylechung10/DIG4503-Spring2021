import React from 'react';

class Pokemon {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }

    render() {
        return (
    <div>
        <h1>Pokemon:</h1>    
        <h2>{this.pokemon.name}</h2>
                <p>Pokemon ID: <b>{this.pokemon.id}</b></p>
                <img src={this.pokemon.sprites.front_default} />
    </div>    
        )
    }

}

export default Pokemon;