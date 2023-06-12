import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Exercise({ name, video, description }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <div className="accordion">
      <Accordion
        sx={{
          borderRadius: "16px !important",
          border: "none",
          color: "black",
          margin: "4px auto",
          width: "100%",
          fontFamily: "Arial !important",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="exercise-title">{name}</Typography>
        </AccordionSummary>
        <AccordionDetails id="exercise-content">
          <video controls ref={videoRef} autoPlay>
            <track default kind="captions" />
            {isVisible && <source src={video} type="video/mp4" />}
          </video>
          <div id="exercise-description">
            {description.map((e, i) => {
              return (
                <div id="steps" key={description.indexOf(e)}>
                  <span>{i + 1} :</span> <p>{e}</p>
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Exercise;
