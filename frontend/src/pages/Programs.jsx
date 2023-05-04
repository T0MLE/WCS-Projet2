import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Start from "../components/Start";
import Day from "../components/Day";
import bp1 from "../assets/bp1.svg";
import mb1 from "../assets/mb1.png";
import fb1 from "../assets/fb1.svg";
import bw1 from "../assets/bw1.png";
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
      <div key={weekArr.indexOf(a)}>
        <p className="weekstyle">Week {i + 1}</p>
        {dayArr.map((e, index) => {
          return (
            <Day
              key={dayArr.indexOf(e)}
              prog={prog[index]}
              exercises={exercises}
              index={index}
            />
          );
        })}
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
    <div className="program">
      <div className="arrow-title">
        <Link to="/" onClick={handleNav}>
          <img className="backarrow" src={backarrow} alt="backarrow" />
        </Link>
        <h2>Our programs</h2>
      </div>

      <div className="programimage">
        <div>{svg()}</div>
        <Start content="Start this program" />
      </div>
      <div className="programcontainer">{monAutreTruc}</div>
    </div>
  );
}

export default Programs;

Programs.propTypes = {
  day: PropTypes.number.isRequired,
  prog: PropTypes.arrayOf(PropTypes.shape).isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
