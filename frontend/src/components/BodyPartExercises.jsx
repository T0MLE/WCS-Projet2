import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Exercise from "./Exercise";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const { exercise } = useParams();

  const [filter, setFilter] = useState(false);
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [difficultyFilter, setDifficultyFilter] = useState(false);

  useEffect(() => {
    if (
      filter &&
      filter !== "false" &&
      difficultyFilter &&
      difficultyFilter !== "false"
    ) {
      setFilteredExercises(
        exercises.filter(
          (exo) =>
            exo.Category === filter && exo.Difficulty === difficultyFilter
        )
      );
      return;
    }
    if (filter && filter !== "false") {
      setFilteredExercises(exercises.filter((exo) => exo.Category === filter));
      return;
    }
    if (difficultyFilter && difficultyFilter !== "false") {
      setFilteredExercises(
        exercises.filter((exo) => exo.Difficulty === difficultyFilter)
      );
      return;
    }
    if (exercises.length) {
      setFilteredExercises(exercises);
    }
  }, [filter, difficultyFilter, exercises.length]);

  handleExerciseChange(exercise);
  if (exercise === "Lowerback") handleExerciseChange("Lower back");
  if (exercise === "Midback") handleExerciseChange("Mid back");

  return (
    <div className="body-part-exercises">
      <select
        name=""
        id=""
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value={false}>-- choose equipment--</option>
        <option value="Barbell">Barbell</option>
        <option value="Dumbbells">Dumbbells</option>
      </select>
      <select
        name=""
        id=""
        value={difficultyFilter}
        onChange={(e) => setDifficultyFilter(e.target.value)}
      >
        <option value={false}>-- choose difficulty --</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

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
