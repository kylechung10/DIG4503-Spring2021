import React from 'react';
import Axios from 'axios';
import { useState } from 'react';

function AddName() {

    const [inputName, setInputName] = useState("");

    const addName = () => {
        Axios.put("http://localhost:45030/people/" + inputName)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log("Error " + error);
          });
      };
    

    return (
        <div>
            <h2>Add Name to the Server</h2>
            <input type="text" onChange={(event) => setInputName(event.target.value)}/>
            <button onClick={() => addName()}>Click to Add Name</button>
        </div>
    )
}

export default AddName;
