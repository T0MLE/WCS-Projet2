import React, { useState, useEffect } from "react";

function Navbar() {
  const [navBackground, setNavBackground] = useState("navbar-desktop-scrolled");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (window.location.pathname === "/" && currentScrollY < 100) {
      setNavBackground("navbar-desktop");
    } else {
      setNavBackground("navbar-desktop-scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.warn(navBackground);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navBackground]);

  return (
    <div>
      <nav className="navbar-mobile">
        <ul>
          <li>
            <a href="/">
              <img src="./src/assets/dashboard.png" alt="" width="30px" />{" "}
              Dashboard
            </a>
          </li>
          <li>
            <a href="/">
              <img src="./src/assets/ecrire.png" alt="" width="30px" />
              Programs
            </a>
          </li>
          <li>
            <a href="/">
              <img src="./src/assets/haltere.png" alt="" width="30px" />
              Exercices
            </a>
          </li>
          <li>
            <a href="/">
              <img src="./src/assets/plaque.png" alt="" width="30px" />
              Nutrition
            </a>
          </li>
        </ul>
      </nav>
      <nav className={navBackground}>
        <ul>
          <li>WILD FITNESS CLUB</li>
          <li>Dashboard</li>
          <li>Programs</li>
          <li>Exercises</li>
          <li>Nutrition</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
