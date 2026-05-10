import React from "react";
import "./App.css"
import MoviesData from "./components/MoviesData";

const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
    <MoviesData/>
    </section>
  );
};

export default App;


