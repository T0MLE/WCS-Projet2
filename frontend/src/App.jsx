import { useEffect, useState } from "react";
import "./App.scss";
import NutritionSlide from "./components/NutritionSlide";
import "./desktop.scss";
import { Route, Routes } from "react-router-dom";
import BodyPartExercises from "./components/BodyPartExercises";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

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
  
  const [nutrition, setNutrition] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/data")
      .then((response) => response.json())
      .then((result) => {
        setNutrition(result.slice(0, 10));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
      <div>
        {console.warn("data", nutrition)}
        <NutritionSlide data={nutrition} />
      </div>
      <Navbar />
    </>
  );
}

export default App;
