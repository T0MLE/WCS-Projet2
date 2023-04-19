import { useEffect, useState } from "react";
import "./App.scss";
import "./desktop.scss";
import { Route, Routes } from "react-router-dom";
import BodyPartExercises from "./components/BodyPartExercises";

import MannequinWrapper from "./components/MannequinWrapper";

function App() {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [filter, setFilter] = useState("");
  const [uniqueEx, setUniqueEx] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_APP_KEY,
      "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
    },
  };
  const controller = new AbortController();

  useEffect(() => {
    fetch("https://musclewiki.p.rapidapi.com/exercises", options)
      .then((response) => response.json())
      .then((response) => setExercises(response))
      .catch((err) => console.error(err));
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    setFilteredExercises(
      exercises.filter((exercise) => exercise.target.Primary?.includes(filter))
    );
  }, [exercises, filter]);

  useEffect(() => {
    setUniqueEx([
      ...new Map(filteredExercises.map((v) => [v.exercise_name, v])).values(),
    ]);
  }, [filteredExercises]);

  return (
    <Routes>
      <Route path="/" element={<MannequinWrapper />} />
      <Route
        path="/:exercise"
        element={
          <BodyPartExercises
            exercises={uniqueEx}
            handleExerciseChange={setFilter}
          />
        }
      />
    </Routes>
  );

  // return (
  //   <div className="App">
  //     {exercise.map((e, index) => {
  //       console.info(e);
  //       return (
  //         <div>
  //           {index} {e.exercise_name}
  //         </div>
  //       );
  //     })}
  //     <video controls>
  //       <source
  //         src="https://media.musclewiki.com/media/uploads/videos/branded/male-band-high-hammer-curl-front.mp4#t=0.1"
  //         type="video/mp4"
  //       />
  //     </video>
  //   </div>
  // );
}

export default App;
