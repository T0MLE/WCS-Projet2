import React from "react";
import PropTypes from "prop-types";
import Start from "./Start";

function Programs({ week }) {

  return (
    <>
      <h2>Here are our programs</h2>
      <p>Start here</p>
      <Start />
    </>
  );
}

export default Programs;

Programs.propTypes = {
  week: PropTypes.number.isRequired,
};
