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
