import React from "react";
import PropTypes from "prop-types";
import Start from "./Start";
import Day from "./Day";

function Programs({ day, exercises, prog }) {
  // console.warn(Array.from({ length: week }, (v, k) => k + 1));

  const arr = Array.from({ length: day }, (v, k) => k + 1);

  return (
    <>
      <h2>Here are our programs</h2>
      <p>Start here</p>
      <Start />

      {arr.map((e, index) => {
        return <Day prog={prog[index]} exercises={exercises} />;
      })}
      {/* {selectedExercises.map((e) => (
        <Exercise
          key={e.id}
          name={e.exercise_name}
          video={e.videoURL}
          description={e.steps.join(" ")}
        />
      ))} */}
    </>
  );
}

export default Programs;

Programs.propTypes = {
  day: PropTypes.number.isRequired,
  prog: PropTypes.arrayOf(PropTypes.number).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
