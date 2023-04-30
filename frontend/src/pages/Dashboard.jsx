import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Day from "../components/Day";
import mb1 from "../assets/mb1.svg";
import backarrow from "../assets/back-arrow.svg";

export default function Dashboard({ day, exercises, prog }) {
  const dayArr = Array.from({ length: day }, (v, k) => k + 1);
  const weekArr = Array.from({ length: 12 }, (v, k) => k + 1);
  const handleCheck = (e) => {
    e.stopPropagation();
  };
  const monAutreTruc = weekArr.map((a, i) => {
    return (
      <div className="dashboard">
        <Accordion
          sx={{
            backgroundColor: "white !important",
            borderRadius: "16px !important",
            border: "none",
            color: "black",
            margin: "4px auto 4px auto",
            width: "100%",
            fontFamily: "Arial !important",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <input type="checkbox" className="validate" onClick={handleCheck} />
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nav = useNavigate();

  const handleNav = () => {
    nav(-1);
  };

  return (
    <div className="dashboard-container">
      <div className="arrow-title">
        <Link to="/" onClick={handleNav}>
          <img className="backarrow" src={backarrow} alt="backarrow" />
        </Link>
        <h2>Dashboard</h2>
      </div>
      <p>YAYYYYYYY 2 WEEK IN A ROW YOU ROCK</p>
      <p>Your programs</p>
      <img className="imgprog" src={mb1} alt="musclebuilding" />
      <div>{monAutreTruc}</div>
    </div>
  );
}

Dashboard.propTypes = {
  day: PropTypes.number.isRequired,
  prog: PropTypes.arrayOf(PropTypes.number).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
