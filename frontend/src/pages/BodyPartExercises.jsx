import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import Exercise from "../components/Exercise";
import backarrow from "../assets/back-arrow.svg";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const { exercise } = useParams();

  const [filter, setFilter] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  useEffect(() => {
    if (filter.length === 0) {
      setFilteredExercises(exercises);
      return;
    }
    if (filter && filter !== "false") {
      setFilteredExercises(
        exercises.filter((exo) => filter.some((str) => str === exo.Category))
      );
      return;
    }
    if (exercises.length) {
      setFilteredExercises(exercises);
    }

    console.info(filter);
  }, [filter, exercises.length]);

  handleExerciseChange(exercise);
  if (exercise === "Lowerback") handleExerciseChange("Lower back");
  if (exercise === "Midback") handleExerciseChange("Mid back");

  return (
    <div className="body-part-exercises">
      <p>Filters</p>
      <label htmlFor="Barbell">Barbell</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Barbell"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Barbell")) {
                return [...prevState, "Barbell"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const prevStateCopy = [...prevState];
              const indexOf = prevState.indexOf("Barbell");
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Dumbbells">Dumbbells</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Dumbbells"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Dumbbells")) {
                return [...prevState, "Dumbbells"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Dumbbells");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Bodyweight">Bodyweight</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Bodyweight"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Bodyweight")) {
                return [...prevState, "Bodyweight"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Bodyweight");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Kettlebells">Kettlebells</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Kettlebells"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Kettlebells")) {
                return [...prevState, "Kettlebells"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Kettlebells");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Stretches">Stretches</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Stretches"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Stretches")) {
                return [...prevState, "Stretches"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Stretches");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Cables">Cables</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Cables"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Cables")) {
                return [...prevState, "Cables"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Cables");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Band">Band</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Band"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Band")) {
                return [...prevState, "Band"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Band");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Plate">Plate</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Plate"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Plate")) {
                return [...prevState, "Plate"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Plate");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="TRX">TRX</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="TRX"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("TRX")) {
                return [...prevState, "TRX"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("TRX");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <br />
      <label htmlFor="Yoga">Yoga</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Yoga"
        onChange={(e) => {
          if (e.target.checked) {
            setFilter((prevState) => {
              if (!prevState.includes("Yoga")) {
                return [...prevState, "Yoga"];
              }
              return prevState;
            });
          } else {
            setFilter((prevState) => {
              const indexOf = prevState.indexOf("Yoga");
              const prevStateCopy = [...prevState];
              prevStateCopy.splice(indexOf, 1);
              return prevStateCopy;
            });
          }
        }}
      />
      <div className="arrow-title">
        <Link to="/">
          <img className="backarrow" src={backarrow} alt="backarrow" />
        </Link>

        <h2>{exercise} exercises</h2>
      </div>
      {filteredExercises?.map((e) => {
        return (
          <Exercise
            key={e.id}
            name={e.exercise_name}
            category={e.Category}
            difficulty={e.Difficulty}
            video={e.videoURL[0]}
            description={e.steps}
          />
        );
      })}
    </div>
  );
}

export default BodyPartExercises;

BodyPartExercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleExerciseChange: PropTypes.func.isRequired,
};
