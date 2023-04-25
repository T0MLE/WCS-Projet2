import React from "react";
import PropTypes from "prop-types";

function Start({ content }) {
  return (
    <button type="button" className="black-button">
      {content}
    </button>
  );
}

export default Start;

Start.propTypes = {
  content: PropTypes.string.isRequired,
};
