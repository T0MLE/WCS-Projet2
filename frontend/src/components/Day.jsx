import React from "react";
import PropTypes from "prop-types";
import Exercise from "./Exercise";

function Day({ prog, exercises }) {
  const selectedExercises = exercises.filter((e) => prog.includes(e.id));
  return (
    <>
      {selectedExercises.map((e) => {
        return (
          <Exercise
            key={e.id}
            name={e.exercise_name}
            video={e.videoURL}
            description={e.steps.join(" ")}
          />
        );
      })}
    </>
  );
}

export default Day;

Day.propTypes = {
  prog: PropTypes.arrayOf(PropTypes.number).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
