import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Exercise from "../components/Exercise";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const categories = [
    "Barbell",
    "Dumbbells",
    "Bodyweight",
    "Kettlebells",
    "Stretches",
    "Yoga",
    "Plate",
    "TRX",
    "Band",
    "Cables",
  ];
  const { exercise } = useParams();

  const [filter, setFilter] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  useEffect(() => {
    if (filter.length === 0) {
      setFilteredExercises(exercises);
      return;
    }
    if (filter && filter !== "false") {
      setFilteredExercises(
        exercises.filter((exo) => filter.some((str) => str === exo.Category))
      );
      return;
    }
    if (exercises.length) {
      setFilteredExercises(exercises);
    }

    console.info(filter);
  }, [filter, exercises.length]);

  handleExerciseChange(exercise);
  if (exercise === "Lowerback") handleExerciseChange("Lower back");
  if (exercise === "Midback") handleExerciseChange("Mid back");

  return (
    <div className="body-part-exercises">
      <p>Filters</p>
      {categories.map((c) => {
        return (
          <>
            <input
              type="checkbox"
              name=""
              id=""
              value={c}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter((prevState) => {
                    if (!prevState.includes(c)) {
                      return [...prevState, c];
                    }
                    return prevState;
                  });
                } else {
                  setFilter((prevState) => {
                    const prevStateCopy = [...prevState];
                    const indexOf = prevState.indexOf(c);
                    prevStateCopy.splice(indexOf, 1);
                    return prevStateCopy;
                  });
                }
              }}
            />
            <label htmlFor={c}>{c}</label>
          </>
        );
      })}
      <div className="arrow-title">
        <Link to="/">
          <svg
            className="backarrow"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <title>ionicons-v5-a</title>
              <polyline
                points="244 400 100 256 244 112"
                style={{
                  fill: "none",
                  stroke: "black",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 48,
                }}
              />
              <line
                x1="120"
                y1="256"
                x2="412"
                y2="256"
                style={{
                  fill: "none",
                  stroke: "black",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 48,
                }}
              />
            </g>
          </svg>
        </Link>

        <h2>{exercise} exercises</h2>
      </div>
      {filteredExercises?.map((e) => {
        return (
          <Exercise
            key={e.id}
            name={e.exercise_name}
            category={e.Category}
            difficulty={e.Difficulty}
            video={e.videoURL[0]}
            description={e.steps}
          />
        );
      })}
    </div>
  );
}

export default BodyPartExercises;

BodyPartExercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleExerciseChange: PropTypes.func.isRequired,
};
