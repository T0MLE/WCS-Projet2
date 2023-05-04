import { useEffect, useState } from "react";
import "./App.scss";
import "./desktop.scss";
import { Route, Routes } from "react-router-dom";
import BodyPartExercises from "./pages/BodyPartExercises";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Programs from "./pages/Programs";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";

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
    return () => {
      controller.abort();
    };
  }, []);

  const Pr1 = [
    [206, 234, 131, 513, 135],
    [130, 559, 165, 145, 534],
    [230, 134, 132, 139, 503],
  ];

  const Pr2 = [
    [67, 360, 292, 357],
    [47, 447, 1, 376],
    [130, 529, 131, 752],
  ];

  const Pr3 = [
    [67, 47, 68, 2, 131],
    [601, 206, 72, 775, 752],
    [130, 131, 71, 357, 361],
  ];

  const Pr4 = [
    [42, 68, 81, 277, 145, 147, 558],
    [181, 231, 560, 783, 42, 447, 457],
    [82, 252, 262, 280, 187, 564, 514],
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home /> <Navbar isTransparent />
          </>
        }
      />
      <Route
        path="/:exercise"
        element={
          <>
            <BodyPartExercises
              exercises={uniqueEx}
              handleExerciseChange={setFilter}
            />
            <Navbar />
          </>
        }
      />

      <Route
        path="/subscription"
        element={
          <>
            <Subscription /> <Navbar />
          </>
        }
      />
      <Route path="/" element={<Home data={nutrition} />} />
      <Route
        path="/bootypump"
        element={
          <>
            <Programs exercises={exercises} day={3} prog={Pr1} />
            <Navbar />
          </>
        }
      />
      <Route
        path="/musclebuilding"
        element={
          <>
            <Programs exercises={exercises} day={3} prog={Pr2} />
            <Navbar />
          </>
        }
      />
      <Route
        path="/fullbody"
        element={
          <>
            <Programs exercises={exercises} day={3} prog={Pr3} />
            <Navbar />
          </>
        }
      />
      <Route
        path="/bodyweight"
        element={
          <>
            <Programs exercises={exercises} day={3} prog={Pr4} />
            <Navbar />
          </>
        }
      />
      <Route
        path="/dashboard"
        element={
          <>
            <Dashboard exercises={exercises} day={3} mb={Pr2} bw={Pr4} />
            <Navbar />
          </>
        }
      />
    </Routes>
  );
}

export default App;
