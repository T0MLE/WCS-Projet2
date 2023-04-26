import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Exercise from "./Exercise";
import backarrow from "../assets/back-arrow.svg";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const { exercise } = useParams();
  handleExerciseChange(exercise);
  if (exercise === "Lowerback") handleExerciseChange("Lower back");
  if (exercise === "Midback") handleExerciseChange("Mid back");

  return (
    <div className="body-part-exercises">
      <div className="arrow-title">
        <Link to="/">
          <img className="backarrow" src={backarrow} alt="backarrow" />
        </Link>

        <h2>{exercise} exercises</h2>
      </div>
      {exercises?.map((e) => {
        return (
          <Exercise
            key={e.id}
            name={e.exercise_name}
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
