import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Loader() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (loaded) {
      const loader = document.querySelector(".loader");
      loader.classList.add("loader-hidden");
      loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
      });
    }
  }, [loaded, location]);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", () => {
        setLoaded(true);
      });
    }
  }, []);

  return (
    <div className="loader">
      <div className="dot-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  );
}

export default Loader;

// CSS LOADER ALTERNATIVE .loader {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #f7f9fb;
//   transition: opacity 0.75s, visibility 0.75s ;
// }

// .loader-hidden {
//   opacity: 0;
//   visibility: hidden;
// }

// .loader::after {
//   content: "";
//   width: 75px;
//   height: 75px;
//   border: 15px solid #dddddd;
//   border-top-color: lightskyblue;
//   border-radius: 50%;
//   animation: loading 0.75s ease infinite;
// }

// @keyframes loading {
//   from {
//     transform: rotate(0turn);
//   }
//   to {
//     transform: rotate(1turn);
//   }
// }
// .loader {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(10px);
//   transition: opacity 0.75s, visibility 0.75s;
// }

// .loader-hidden {
//   opacity: 0;
//   visibility: hidden;
// }

// .loader::after {
//   content: "";
//   width: 80px;
//   height: 3px;
//   border-radius: 10px;
//   background: linear-gradient(to right, #66c2ff, #4d79ff);
//   box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.8),
//               inset 0 3px 6px rgba(0, 0, 0, 0.4),
//               inset 0 -3px 6px rgba(0, 0, 0, 0.4),
//               0 0 5px rgba(255, 255, 255, 0.5);
//   animation: spin 1s linear infinite;
// }

// @keyframes spin {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
