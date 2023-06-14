import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="warr">
      <div className="nav">
        <h2 className="logo">Cover</h2>
        <ul className="nav_list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link className="link_contact" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=45.692614%2C43.324616&mode=search&oid=50266658498&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ29M9qq2EZAEaX2ItqOqUVAEhIJ%2BWcG8YEdtz8ReHsQAvIlpD8iBgABAgMEBSgKOABAqZ8NSAFqAnJ1nQHNzEw9oAEAqAEAvQEEnFDawgEGwq2BobsB6gEA8gEA%2BAEAggIO0JjQvdGC0YPQutC%2B0LSKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=45.692614%2C43.324616&sspn=0.005016%2C0.002186&text=%D0%98%D0%BD%D1%82%D1%83%D0%BA%D0%BE%D0%B4&z=18.17"
          width="100%"
          height="500px"
        ></iframe>
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
