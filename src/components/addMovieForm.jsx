import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const AddMovieForm = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the movie goes here
    console.log("Movie added:", {
      title,
      director,
      genre,
      releaseYear,
      synopsis,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "black",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Add a New Movie
      </h2>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="title"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="director"
        >
          Director:
        </label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="genre"
        >
          Genre:
        </label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="releaseYear"
        >
          Release Year:
        </label>
        <input
          type="number"
          id="releaseYear"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="synopsis"
        >
          Synopsis:
        </label>
        <textarea
          id="synopsis"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            height: "100px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "18px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      <button
        type="submit"
        onClick={() => {
          Navigate("/");
        }}
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "18px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default AddMovieForm;
