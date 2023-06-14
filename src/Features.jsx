import React from "react";
import { Link } from "react-router-dom";
export default function Features() {
  return (
    <div className="warr">
      <div className="nav">
        <h2 className="logo">Cover</h2>
        <ul className="nav_list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link className="link_features" to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="header">
        <h1 className="text-center">Development site.</h1>
        <p>
          We are making a new website that will have
          everything-everything-everything you are looking for. Follow our
          activities, learn about new streams or contact manager to write
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
