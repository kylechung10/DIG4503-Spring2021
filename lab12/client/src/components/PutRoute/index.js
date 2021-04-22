import React, { useState } from "react";
import Axios from "axios";

export default function PutRoute() {
  const [putInput, setPutInput] = useState("");
  const [putAuthor, setPutAuthor] = useState("");
  const [putTitle, setPutTitle] = useState("");
  const [putDesciption, setPutDesciption] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [bookAdded, setBookAdded] = useState("");

  // Check to see if the fields are empty before enabling the button
  // To prevent empty inputs
  if (buttonDisable && putAuthor && putTitle && putDesciption && putInput) {
    setButtonDisable(false);
  }

  // Add book to the database using params and JSON body
  const putClient = () => {
    Axios.put("http://localhost:45030/books/" + putInput, {
      title: putTitle,
      author: putAuthor,
      description: putDesciption,
    })
      .then((response) => {
        setBookAdded(response.data);
      })
      .catch((error) => {
        console.log("Error" + error);
        alert("PUT ROUTE: Enter a book ISBN and information!");
      });
  };

  // Reset inputs
  const resetInput = () => {
    setBookAdded("");
    setPutInput("");
    setPutAuthor("");
    setPutTitle("");
    setPutDesciption("");
    setButtonDisable(true);
  };

  return (
    <div className="section">
      <h2>Put Route</h2>
      {!bookAdded ? (
        <>
          <p>
            <strong>Add a book to the database!</strong>
          </p>
          <div className="bookInput">
            <div className="individual-input">
              <label htmlFor="isbnInput">Enter ISBN: </label>
              <input
                className="isbnInput"
                placeholder="ISBN"
                type="text"
                value={putInput}
                onChange={(v) => setPutInput(v.target.value)}
              ></input>
            </div>
            <div className="individual-input">
              <label htmlFor="titleInput">Enter Title: </label>
              <input
                className="titleInput"
                placeholder="Title"
                type="text"
                value={putTitle}
                onChange={(v) => setPutTitle(v.target.value)}
              ></input>
            </div>
            <div className="individual-input">
              <label htmlFor="authorInput">Enter Author: </label>
              <input
                className="authorInput"
                placeholder="Author"
                type="text"
                value={putAuthor}
                onChange={(v) => setPutAuthor(v.target.value)}
              ></input>
            </div>
            <label htmlFor="descInput">Enter Description: </label>
            <textarea
              className="descInput"
              rows={5}
              value={putDesciption}
              onChange={(v) => setPutDesciption(v.target.value)}
            ></textarea>
          </div>
          <button onClick={() => putClient()} disabled={buttonDisable}>
            Add Book to Database
          </button>
        </>
      ) : (
        <>
          <div className="display-results">
            <h3>You successfully added a book!</h3>
            <p>Details</p>
            <p>
              <strong>Document ID:</strong> {bookAdded._id}
            </p>
            <p>
              <strong>ISBN:</strong> {bookAdded.ISBN}
            </p>
            <p>
              <strong>Title:</strong> {bookAdded.title}
            </p>
            <p>
              <strong>Author:</strong> {bookAdded.author}
            </p>
            <p>
              <strong>Description:</strong> {bookAdded.description}
            </p>
          </div>
          <button onClick={() => resetInput()}>Reset Put Route</button>
        </>
      )}
    </div>
  );
}
