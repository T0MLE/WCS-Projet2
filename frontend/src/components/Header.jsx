import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <h1>Wild Fitness Club</h1>
        <div>
          <h2>
            Get into the <br /> fitness journey
          </h2>
          <Link to="/subscription">
            <button type="button">Join the team</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
