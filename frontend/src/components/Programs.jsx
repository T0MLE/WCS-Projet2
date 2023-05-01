import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Start from "./Start";
import Day from "./Day";
import bp1 from "../assets/bp1.svg";
import mb1 from "../assets/mb1.svg";
import fb1 from "../assets/fb1.svg";
import bw1 from "../assets/bw1.svg";
import backarrow from "../assets/back-arrow.svg";

function Programs({ day, exercises, prog }) {
  const dayArr = Array.from({ length: day }, (v, k) => k + 1);
  const weekArr = Array.from({ length: 12 }, (v, k) => k + 1);

  // const monTruc = ;
  const svg = () => {
    if (window.location.pathname.slice(1) === "bootypump") {
      return <img src={bp1} alt="bootypump" />;
    }
    if (window.location.pathname.slice(1) === "bodyweight") {
      return <img src={bw1} alt="bodyweight" />;
    }
    if (window.location.pathname.slice(1) === "fullbody") {
      return <img src={fb1} alt="fullbody" />;
    }
    if (window.location.pathname.slice(1) === "musclebuilding") {
      return <img src={mb1} alt="musclebuilding" />;
    }
    return null;
  };

  const monAutreTruc = weekArr.map((a, i) => {
    return (
      <div className="accordionweek">
        <Accordion
          sx={{
            backgroundColor: "white !important",
            borderRadius: "16px !important",
            border: "none",
            color: "black",
            margin: "4px auto 0px auto !important",
            width: "95%",
            fontFamily: "Arial !important",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Week {i + 1}</p>
          </AccordionSummary>
          <AccordionDetails>
            {dayArr.map((e, index) => {
              return (
                <Day prog={prog[index]} exercises={exercises} index={index} />
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    );
  });

  // {arr.map((e, index) => {
  //   return <Day prog={prog[index]} exercises={exercises} index={index} />;
  // })}

  return (
    <div className="program">
      <div className="arrow-title">
        <Link to="/">
          <img className="backarrow" src={backarrow} alt="backarrow" />
        </Link>
        <h2>Our programs</h2>
      </div>

      <div className="programimage">
        {/* {<Route path="/bootypump" /> || <Route path="/musclebuilding" /> || (
          <Route path="/bodyweight" />
        ) || <Route path="/fullbody" /> ? (
          <Start content="Start this program" />
        ) : (<Link className="linkcard" to="/subscription">
          <Start content="Start this program" />
        </Link>)} */}
        <div className="progpic">{svg()}</div>
        <Start content="Start this program" />
      </div>
      <div className="programcontainer">{monAutreTruc}</div>
    </div>
  );
}

export default Programs;

Programs.propTypes = {
  day: PropTypes.number.isRequired,
  prog: PropTypes.arrayOf(PropTypes.number).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
