import React from 'react';
import Axios from 'axios';
import { useState } from 'react';

function Search() {

    const [inputName, setInputName] = useState("");

    const searchName = () => {
        Axios.get("http://localhost:45030/people/" + inputName)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
      };
    

    return (
        <div>
            <h2>Search Name within Server</h2>
            <input type="text" onChange={(event) => setInputName(event.target.value)}/>
            <button onClick={() => searchName()}>Click to Search</button>
        </div>
    )
}

export default Search;
