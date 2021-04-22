import React, { useState } from "react";
import Axios from "axios";

export default function PostRoute() {
  const [postTitle, setPostTitle] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [bookData, setBookData] = useState("");
  const [activateSearch, setactivateSearch] = useState(false);

  const postClient = () => {
    Axios.post("http://localhost:45030/books/search", null, {
      params: {
        title: postTitle,
        author: postAuthor,
      },
    })
      .then((response) => {
        setBookData(response.data);
        setactivateSearch(true);
      })
      .catch((error) => {
        console.log(error);
        alert("POST ROUTE: Enter a title or author!");
      });
  };

  const resetSearch = () => {
    setPostTitle("");
    setPostAuthor("");
    setactivateSearch(false);
    setBookData("");
  };

  return (
    <div className="section">
      <h2>Post Route</h2>

      {!activateSearch ? (
        <>
          <div>
            <p>
              <strong>Search book database by title and/or author</strong>
            </p>
            <div className="individual-input">
              <label htmlFor="titleInput">Enter Title: </label>
              <input
                className="titleInput"
                placeholder="Title"
                type="text"
                value={postTitle}
                onChange={(v) => setPostTitle(v.target.value)}
              ></input>
            </div>
            <div className="individual-input">
              <label htmlFor="authorInput">Enter Author: </label>
              <input
                className="authorInput"
                placeholder="Author"
                type="text"
                value={postAuthor}
                onChange={(v) => setPostAuthor(v.target.value)}
              ></input>
            </div>
          </div>
          <button onClick={() => postClient()}>Search</button>
        </>
      ) : (
        <>
          <h3>Results for</h3>

          {postTitle ? (
            <p>
              <strong>Title: </strong>
              {postTitle}
            </p>
          ) : undefined}
          {postAuthor ? (
            <p>
              <strong>Author: </strong>
              {postAuthor}
            </p>
          ) : undefined}

          {bookData.books.map((book, key) => {
            return (
              <div key={key} className="post-results">
                <p>
                  <strong>Document ID:</strong> {book._id}
                </p>
                <p>
                  <strong>ISBN:</strong> {book.ISBN}
                </p>
                <p>
                  <strong>Title:</strong> {book.title}
                </p>
                <p>
                  <strong>Author:</strong> {book.author}
                </p>
                <p>
                  <strong>Description:</strong> {book.description}
                </p>
              </div>
            );
          })}
          <button onClick={() => resetSearch()}>Reset Search</button>
        </>
      )}
    </div>
  );
}
