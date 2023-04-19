import React, { useEffect, useState } from "react";
import Programs from "./components/Programs";
import "./App.scss";
import ProgramsSec from "./components/ProgramsSec";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("https://musclewiki.p.rapidapi.com/exercises", {
      headers: {
        "X-RapidAPI-Key": "3aba8f4363msh2ebf17ce6dfbe7ap1a3dd3jsnc97ed0d3ca7b",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExercises(data.results);
        console.warn(data);
        console.info(exercises);
      });
  }, []);

  return (
    <div className="App">
      <ProgramsSec />
      <Programs week={8} />
    </div>
  );
}

export default App;
