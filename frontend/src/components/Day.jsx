import React from "react";
import PropTypes from "prop-types";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Exercise from "./Exercise";

function Day({ prog, exercises, index }) {
  const selectedExercises = exercises
    .filter((e) => prog.includes(e.id))
    .sort((a, b) => prog.indexOf(a.id) - prog.indexOf(b.id));
  return (
    <div className="accordion">
      <Accordion
        sx={{
          backgroundColor: "white !important",
          borderRadius: "16px !important",
          border: "none",
          color: "black",
          margin: "4px auto",
          width: "90%",
          fontFamily: "Arial !important",
          "& .MuiAccordionItem:last-of-type .MuiAccordionSummary-root": {
            marginBottom: "100px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="exercise-title">Day {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Day;

Day.propTypes = {
  prog: PropTypes.arrayOf(PropTypes.number).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
  index: PropTypes.number.isRequired,
};
