import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Exercise from "./Exercise";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const { exercise } = useParams();
  handleExerciseChange(exercise);

  return (
    <div>
      <button type="button">
        <Link to="/">RETOUR</Link>
      </button>
      {exercises?.map((e) => {
        return (
          <Exercise
            key={e.id}
            name={e.exercise_name}
            video={e.videoURL}
            description={e.steps}
          />
        );
      })}
    </div>
  );
}

/* <p key={e.id}>{e.exercise_name}</p> */

export default BodyPartExercises;

BodyPartExercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleExerciseChange: PropTypes.func.isRequired,
};
