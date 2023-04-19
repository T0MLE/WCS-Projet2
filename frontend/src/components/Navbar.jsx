import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
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
    </div>
  );
}

export default Navbar;
