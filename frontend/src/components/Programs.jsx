import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Start from "./Start";
import Day from "./Day";

function Programs({ day, exercises, prog }) {
  // console.warn(Array.from({ length: week }, (v, k) => k + 1));

  const arr = Array.from({ length: day }, (v, k) => k + 1);
  console.info(prog);
  return (
    <div>
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
        <h2>Here are our programs</h2>
      </div>
      <p>Start here</p>
      <Start />
      <div className="test">
        {arr.map((e, index) => {
          return <Day prog={prog[index]} exercises={exercises} index={index} />;
        })}
      </div>

      {/* {selectedExercises.map((e) => (
        <Exercise
          key={e.id}
          name={e.exercise_name}
          video={e.videoURL}
          description={e.steps.join(" ")}
        />
      ))} */}
      {/* <div className="stick" /> */}
    </div>
  );
}

export default Programs;

Programs.propTypes = {
  day: PropTypes.number.isRequired,
  prog: PropTypes.arrayOf(PropTypes.number).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
