import React from "react";
import PropTypes from "prop-types";

function Exercise({ name, video, description }) {
  return (
    <div>
      <p>{name}</p>
      <video controls>
        <source src={video} type="video/mp4" />{" "}
        <track default kind="captions" />
      </video>
      <p>{description}</p>
    </div>
  );
}

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Exercise;
