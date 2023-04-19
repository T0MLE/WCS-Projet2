import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Exercise from "./Exercise";
import Navbar from "./Navbar";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const { exercise } = useParams();
  handleExerciseChange(exercise);
  if (exercise === "Lowerback") handleExerciseChange("Lower back");
  if (exercise === "Midback") handleExerciseChange("Mid back");

  return (
    <div className="body-part-exercises">
      <button type="button">
        <Link to="/">RETOUR</Link>
      </button>
      <h2>{exercise} exercises</h2>
      {exercises?.map((e) => {
        return (
          <Exercise
            key={e.id}
            name={e.exercise_name}
            video={e.videoURL}
            description={e.steps.join(" ")}
          />
        );
      })}
      <Navbar />
    </div>
  );
}

/* <p key={e.id}>{e.exercise_name}</p> */

export default BodyPartExercises;

BodyPartExercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleExerciseChange: PropTypes.func.isRequired,
};
