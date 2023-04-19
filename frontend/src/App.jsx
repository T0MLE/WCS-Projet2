import React, { useEffect, useState } from "react";
import Programs from "./components/Programs";
import "./App.scss";
import ProgramsSec from "./components/ProgramsSec";

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("https://musclewiki.p.rapidapi.com/exercises", {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_KEY,
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
