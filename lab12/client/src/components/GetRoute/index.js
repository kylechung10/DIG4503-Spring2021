import React, { useState } from "react";
import Axios from "axios";

export default function GetRoute() {
  const [getInput, setGetInput] = useState("");
  const [activateSearch, setactivateSearch] = useState(false);
  const [findBook, setFindBook] = useState("");

  const getClient = () => {
    Axios.get("http://localhost:45030/books/" + getInput)
      .then((response) => {
        setFindBook(response.data);
        setactivateSearch(true);
      })
      .catch((error) => {
        console.log("Error" + error);
        alert("GET ROUTE: Enter a book ISBN!");
      });
  };

  const resetSearch = () => {
    setFindBook("");
    setGetInput("");
    setactivateSearch(false);
  };

  return (
    <div className="section">
      <h2>Get Route</h2>
      {activateSearch ? (
        !findBook ? (
          <>
            <p>Book: not found</p>
            <button onClick={() => resetSearch()}>Reset Get Route</button>
          </>
        ) : (
          <>
            <p>
              <strong>Search for a book in the database!</strong>
            </p>
            <div className="display-results">
              <p>
                <strong>ISBN:</strong> {findBook.ISBN}
              </p>
              <p>
                <strong>Title:</strong> {findBook.title}
              </p>
              <p>
                <strong>Author:</strong> {findBook.author}
              </p>
              <p>
                <strong>Description:</strong> {findBook.description}
              </p>
            </div>
            <button onClick={() => resetSearch()}>Reset Get Route</button>
          </>
        )
      ) : (
        <div>
          <input
            placeholder="Enter ISBN"
            type="text"
            value={getInput}
            onChange={(v) => setGetInput(v.target.value)}
          ></input>
          <button onClick={() => getClient()}>Search Book Database</button>
        </div>
      )}
    </div>
  );
}
