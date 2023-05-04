import { useEffect, useState } from "react";
import "./App.scss";
import "./desktop.scss";
import { Route, Routes } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";
import BodyPartExercises from "./pages/BodyPartExercises";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Programs from "./pages/Programs";
import Subscription from "./pages/Subscription";
// import Loader from "./components/Loader";

function App() {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [filter, setFilter] = useState("");
  const [uniqueEx, setUniqueEx] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_APP_KEY,
      "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
    },
  };
  const controller = new AbortController();

  useEffect(() => {
    // setIsLoading(true);
    fetch("https://musclewiki.p.rapidapi.com/exercises", options)
      .then((response) => response.json())
      .then((response) => {
        setExercises(response);
        // setIsLoading(false);
      })
      .catch((err) => console.error(err));
    // .finally(() => setIsLoading(false));
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

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
    <div>
      {/* {isLoading ? (
        <div className="loadercontainer">
          <ClipLoader color="#36d7b7" loading size={150} />
        </div>
      ) : ( */}

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
        <Route
          path="/bootypump"
          element={<Programs exercises={exercises} day={3} prog={Pr1} />}
        />
        <Route
          path="/musclebuilding"
          element={<Programs exercises={exercises} day={3} prog={Pr2} />}
        />
        <Route
          path="/fullbody"
          element={<Programs exercises={exercises} day={3} prog={Pr3} />}
        />
        <Route
          path="/bodyweight"
          element={<Programs exercises={exercises} day={3} prog={Pr4} />}
        />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
