import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="">
        <ul>
          <li className="text-2xl">
            <Link className="m-10" to="/">
              Home
            </Link>
            <Link className="m-10" to="/Review">
              Review
            </Link>
            <Link className="m-10" to="/DashBoard">
              DashBoard
            </Link>
            <Link className="m-10" to="/Questions">
              Questions
            </Link>
            <Link className="m-10" to="/About">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
