import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Start from "../components/Start";
import Day from "../components/Day";
import bp1 from "../assets/bp1.png";
import bw1 from "../assets/bw1.png";
import mb1 from "../assets/mb1.png";
import fb1 from "../assets/fb1.png";
import bbp1 from "../assets/bbp1.svg";
import bmb1 from "../assets/bmb1.png";
import bfb1 from "../assets/bfb1.png";
import bbw1 from "../assets/bbw1.png";
import backarrow from "../assets/back-arrow.svg";

function Programs({ day, exercises, prog }) {
  const dayArr = Array.from({ length: day }, (v, k) => k + 1);
  const weekArr = Array.from({ length: 12 }, (v, k) => k + 1);

  const progdesc = () => {
    if (window.location.pathname.slice(1) === "bodyweight") {
      return (
        <div className="programdesc">
          <h2>Bodyweight Program: Get Fit Anywhere Without Equipment</h2>
          <p>
            Looking for a simple and effective way to get fit without the need
            for any equipment? Consider a bodyweight program. Bodyweight
            exercises require no equipment and can be done anywhere, making them
            perfect for home workouts or when traveling. They're also great for
            people of all fitness levels, from beginners to experienced
            athletes.
          </p>
          <p>
            Popular exercises in a bodyweight program include push-ups, squats,
            lunges, planks, and burpees. These exercises can be varied in
            intensity and combination to target different muscle groups and
            prevent boredom. With a little creativity and consistency, you can
            improve your strength, flexibility, and overall fitness with a
            bodyweight program.
          </p>
        </div>
      );
    }
    if (window.location.pathname.slice(1) === "bootypump") {
      return (
        <div className="programdesc">
          <h2>Booty Pump: Build Your Best Butt</h2>
          <p>
            Booty Pump is a 12-week program designed to strengthen and tone your
            glutes. The program includes a variety of exercises targeting the
            different muscles in your butt, suitable for all fitness levels.
          </p>
          <p>
            The program combines muscle-building exercises with advanced
            training techniques for maximum results. It also includes exercises
            to strengthen your lower back, legs, and core. A customized
            nutrition plan is provided to support muscle growth and fat loss.
          </p>
          <p>
            Try Booty Pump for firmer, toned, and sculpted glutes in just 12
            weeks.
          </p>
        </div>
      );
    }
    if (window.location.pathname.slice(1) === "fullbody") {
      return (
        <div className="programdesc">
          <h2>Full Body: Achieve Fullbody Fitness</h2>
          <p>
            Full Body is a 12-week program designed to improve overall strength
            and conditioning. The program includes a variety of free weight
            exercises, such as dumbbell and barbell movements, to target all
            major muscle groups.
          </p>
          <p>
            The program is suitable for all fitness levels and is designed to
            progressively increase in difficulty to ensure maximum results. The
            exercises are combined with traditional training techniques for
            optimal muscle growth and strength gains.
          </p>
          <p>
            Full Body also includes exercises to improve endurance and overall
            fitness. A customized nutrition plan is provided to support muscle
            growth and fat loss.
          </p>
          <p>
            Try Full Body for improved strength, conditioning, and overall
            fitness in just 12 weeks.
          </p>
        </div>
      );
    }
    if (window.location.pathname.slice(1) === "musclebuilding") {
      return (
        <div className="programdesc">
          <h2>Muscle Building: Sculpt Your Ideal Physique</h2>
          <p>
            Muscle Building is a 12-week program designed to increase muscle
            mass and definition. The program includes a variety of exercises
            targeting all major muscle groups, suitable for all fitness levels.
          </p>
          <p>
            The program combines muscle-building exercises with traditional
            training techniques for maximum results. It also includes exercises
            to strengthen your lower back, legs, and core. A customized
            nutrition plan is provided to support muscle growth and fat loss.
          </p>
          <p>
            Each week of the program is designed to progressively increase in
            difficulty to ensure maximum results. The program also includes a
            variety of rep ranges and sets for optimal muscle growth and
            definition.
          </p>
          <p>
            Try Muscle Building for increased muscle mass and definition in just
            12 weeks.
          </p>
        </div>
      );
    }
    return null;
  };

  const svg = () => {
    if (window.location.pathname.slice(1) === "bootypump") {
      return window.innerWidth < 800 ? (
        <>
          <img src={bp1} alt="bootypump" /> {progdesc()}{" "}
        </>
      ) : (
        <>
          <img src={bbp1} alt="bootypump" />
          {progdesc()}{" "}
        </>
      );
    }
    if (window.location.pathname.slice(1) === "bodyweight") {
      return window.innerWidth < 800 ? (
        <>
          <img src={bw1} alt="bodyweight" /> {progdesc()}
        </>
      ) : (
        <>
          <img src={bbw1} alt="bodyweight" /> {progdesc()}
        </>
      );
    }
    if (window.location.pathname.slice(1) === "fullbody") {
      return window.innerWidth < 800 ? (
        <>
          <img src={fb1} alt="fullbody" />
          {progdesc()}
        </>
      ) : (
        <>
          <img src={bfb1} alt="fullbody" />
          {progdesc()}
        </>
      );
    }
    if (window.location.pathname.slice(1) === "musclebuilding") {
      return window.innerWidth < 800 ? (
        <>
          <img src={mb1} alt="musclebuilding" />
          {progdesc()}
        </>
      ) : (
        <>
          <img src={bmb1} alt="musclebuilding" />
          {progdesc()}
        </>
      );
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
      <div className="headerprog">
        {" "}
        <div className="arrow-title">
          <Link to="/">
            <img className="backarrow" src={backarrow} alt="backarrow" />
          </Link>
          <h2>Our programs</h2>
        </div>
        <div className="startprog">
          <Start content="Start this program" />
        </div>
      </div>

      <div className="programimage">
        <div className="progpic">{svg()}</div>
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
