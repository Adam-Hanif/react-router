import React from "react";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div className="warr">
      <div className="nav">
        <h2 className="logo">Cover</h2>
        <ul className="nav_list">
          <li>
            <Link className="link_home" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="header">
        <h1 className="text-center">Cover your page.</h1>
        <p>
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <button className="btn">Learn more</button>
      </div>
      <footer className="footer">
        <p>
          Cover template for
          <span>
            <a href="#">Bootstrap</a>
          </span>
          by
          <span>
            <a href="#">@mdo.</a>
          </span>
        </p>
      </footer>
    </div>
  );
}
