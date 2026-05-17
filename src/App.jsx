import React from "react";
import "./App.css"
import MoviesData from "./components/MoviesData";
import State from "./components/hooks/State";
import TodoApp from "./components/TodoApp/TodoApp";

const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1>
      <MoviesData/> */}
      {/* <State/> */}
      <TodoApp />
    </section>
  );
};

export default App;
