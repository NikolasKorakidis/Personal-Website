import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function NavBar() {
  return (
    <div className="container">
      <nav className="NavBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/services">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
