import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const { exercise } = useParams();
  handleExerciseChange(exercise);

  return (
    <div>
      <button type="button">
        <Link to="/">RETOUR</Link>
      </button>
      {exercises?.map((e) => {
        return <p key={e.id}>{e.exercise_name}</p>;
      })}
    </div>
  );
}

export default BodyPartExercises;

BodyPartExercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleExerciseChange: PropTypes.func.isRequired,
};
