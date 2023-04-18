import { useEffect, useState } from "react";
import "./App.scss";
import "./desktop.scss";
import { Route, Routes } from "react-router-dom";
import BodyPartExercises from "./components/BodyPartExercises";

import MannequinWrapper from "./components/MannequinWrapper";

function App() {
  const [exercise, setExercise] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f12aac5679msh18713fa11a2b634p163927jsn7679b4ef289b",
      "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch("https://musclewiki.p.rapidapi.com/exercises", options)
      .then((response) => response.json())
      .then((response) => setExercise(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MannequinWrapper />} />
      <Route
        path="/Abdominals"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Chest"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Biceps"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Triceps"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Shoulders"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Obliques"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Forearms"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Traps"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Quads"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Calves"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Hamstrings"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Lowerback"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Glutes"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route path="/Lats" element={<BodyPartExercises exercise={exercise} />} />
      <Route
        path="/Midback"
        element={<BodyPartExercises exercise={exercise} />}
      />
      <Route
        path="/Traps"
        element={<BodyPartExercises exercise={exercise} />}
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
