import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <p id="footer-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius amet corporis praesentium eos. Molestias dolor a, soluta exercitationem,
          impedit, dolores dolorum quod quae rerum natus suscipit. Earum corporis ipsum veniam!
        </p>
        <div className="footer-right">
          <nav id="footer-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/about-me">About&nbsp;me</Link>
              </li>{" "}
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contact-me">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="footer-copyright">
            <p>
              &copy; <b>DEMO</b>SITE All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
