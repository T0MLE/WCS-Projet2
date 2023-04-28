import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Exercise from "./Exercise";
import imgFilter from "../assets/settings-sliders.png";

function BodyPartExercises({ exercises, handleExerciseChange }) {
  const categories = [
    "Barbell",
    "Dumbbells",
    "Bodyweight",
    "Kettlebells",
    "Stretches",
    "Yoga",
    "Plate",
    "TRX",
    "Band",
    "Cables",
  ];

  const nav = useNavigate();
  const { exercise } = useParams();
  handleExerciseChange(exercise);
  if (exercise === "Lowerback") handleExerciseChange("Lower back");
  if (exercise === "Midback") handleExerciseChange("Mid back");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const [filterOpen, setFilterOpen] = useState(false);
  const openFilter = () => {
    setFilterOpen(!filterOpen);
  };

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
  }, [filter, exercises.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="body-part-exercises">
      <div className="arrow-title">
        <Link to="/" onClick={() => nav(-1)}>
          <svg
            className="backarrow"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <title>ionicons-v5-a</title>
              <polyline
                points="244 400 100 256 244 112"
                style={{
                  fill: "none",
                  stroke: "black",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 48,
                }}
              />
              <line
                x1="120"
                y1="256"
                x2="412"
                y2="256"
                style={{
                  fill: "none",
                  stroke: "black",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 48,
                }}
              />
            </g>
          </svg>
        </Link>

        <h2>{exercise} exercises</h2>
      </div>
      <div className="filter-search">
        <button type="button" className="btn-filter" onClick={openFilter}>
          <img src={imgFilter} alt="" /> <span>Filters</span>
        </button>
        <input
          className="searchbar"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search your exercise"
        />
      </div>
      <div className={filterOpen ? "fi fiopen" : "fi"}>
        {categories.map((c) => {
          return (
            <>
              <input
                type="checkbox"
                name=""
                id=""
                value={c}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilter((prevState) => {
                      if (!prevState.includes(c)) {
                        return [...prevState, c];
                      }
                      return prevState;
                    });
                  } else {
                    setFilter((prevState) => {
                      const prevStateCopy = [...prevState];
                      const indexOf = prevState.indexOf(c);
                      prevStateCopy.splice(indexOf, 1);
                      return prevStateCopy;
                    });
                  }
                }}
              />
              <label htmlFor={c}>{c}</label>
            </>
          );
        })}
      </div>

      {filteredExercises
        ?.filter((item) =>
          item.exercise_name.toLowerCase().includes(search.toLowerCase())
        )
        .map((e) => {
          return (
            <Exercise
              key={e.id}
              name={e.exercise_name}
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
