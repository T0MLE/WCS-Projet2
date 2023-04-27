import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isTransparent }) {
  const [navBackground, setNavBackground] = useState("navbar-desktop-scrolled");
  const handleScroll = () => {
    const currentScrollY = window.scrollY || 0;
    if (window.location.pathname === "/" && currentScrollY < 100) {
      setNavBackground("navbar-desktop");
    } else {
      setNavBackground("navbar-desktop navbar-desktop-scrolled");
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

    setNavBackground("navbar-desktop navbar-desktop-scrolled");
  }, [isTransparent]);

  const navigate = useNavigate();

  const handleScrollToSectionProg = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("prog").offsetTop,
        behavior: "smooth",
      });
    }, 100);
  };
  const handleScrollToSectionEx = (e) => {
    e.preventDefault();
    navigate("/");
    console.warn(window.innerWidth);
    setTimeout(() => {
      if (window.innerWidth > 800) {
        window.scrollTo({
          top: document.getElementById("ex").offsetTop - 80,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: document.getElementById("ex").offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };
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
            <a href="/" onClick={handleScrollToSectionProg}>
              <img src="./src/assets/ecrire.png" alt="" width="30px" />
              Programs
            </a>
          </li>
          <li>
            <a href="/" onClick={handleScrollToSectionEx}>
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
        <Link to="/">
          <p>WILD FITNESS CLUB</p>
        </Link>
        <ul>
          <li>Dashboard</li>
          <li>
            <a href="/" onClick={handleScrollToSectionProg}>
              Programs
            </a>
          </li>
          <li>
            <a href="/" onClick={handleScrollToSectionEx}>
              Exercises
            </a>
          </li>
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
