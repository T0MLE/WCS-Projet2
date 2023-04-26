import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Navbar({ isTransparent }) {
  const [navBackground, setNavBackground] = useState("navbar-desktop-scrolled");
  const handleScroll = () => {
    const currentScrollY = window.scrollY || 0;
    if (window.location.pathname === "/" && currentScrollY < 100) {
      setNavBackground("navbar-desktop");
    } else {
      setNavBackground("navbar-desktop-scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isTransparent) {
      setNavBackground("navbar-desktop");
      return;
    }

    setNavBackground("navbar-desktop-scrolled");
  }, [isTransparent]);

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

Navbar.propTypes = {
  isTransparent: PropTypes.bool.isRequired,
};
