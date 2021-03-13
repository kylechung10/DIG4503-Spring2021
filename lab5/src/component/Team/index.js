import React, { useState } from 'react';
import Axios from 'axios';
//import Pokemon from '../Pokemon';
import TeamList from '../TeamList';
/*
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
*/

export default class Team extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
        inputValue: '',
        items: [],
        passPoke: '',
            completed: false
        }
    }
  
    inputButton(p) {
      this.setState({
        inputValue: p.target.value,
      });
    }

    /*
    validPokemon() {

        Axios('https://pokeapi.co/api/v2/pokemon/' + this.state.inputValue)

            .then(function (response) {
                this.setState({passPoke: response.data});
            })
    
            .catch(function () {
                alert("Invalid");
            });
        
    }
    */
  
    addItem() {

        const self = this;

        Axios(`https://pokeapi.co/api/v2/pokemon/` + this.state.inputValue)

            .then(response => {
                //const newPokemon = response.data;
                self.setState({ passPoke: response.data });
                //this.runBuilder();
                //alert("YELLOW");
                //return newPokemon;
            })

            .catch(function (error) {
                console.log(error);
            alert("Invalid");
        });
    }

    /*runbuilder () {
        let items = this.state.items;
        items.push(TeamList);
        this.setState({items});
    }*/
  
    listItems() {
      let items = this.state.items;
      return (
        <>
          {
            items.map((pokemon, index) => {
              return (
                  <TeamList key={index}>{pokemon}</TeamList>
              );
            })
          }
        </>
      );
    }
  
    render() {
      return (
        <div>
          <input type="text" onChange={ (p) => this.inputButton(p) } />
              <button onClick={() => this.addItem()}>Add item</button>
              { this.listItems()}
              { this.state.passPoke }
        </div>
      );
    }
  } 