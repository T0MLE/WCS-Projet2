import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Exercise({ name, video, description }) {
  return (
    <div className="accordion">
      <Accordion
        sx={{
          borderRadius: "16px !important",
          border: "none",
          color: "black",
          margin: "4px auto",
          width: "90%",
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
          <video controls>
            <source src={video} type="video/mp4" />{" "}
            <track default kind="captions" />
          </video>
          <Typography id="exercise-description">
            {description.map((e, i) => {
              return (
                <div id="steps">
                  <span>{i + 1} :</span> <p>{e}</p>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Exercise;
