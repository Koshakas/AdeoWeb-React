import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.scss";

function Footer(props) {
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
                <a onClick={() => props.onPageChange("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => props.onPageChange("service")}>Service</a>
              </li>
              <li className="dropdown">
                <a onClick={() => props.onPageChange("works")} className="dropbtn">
                  Works
                </a>
                <div className="dropdown-content arrow-top">
                  <a>All</a>
                  <a>Graphic</a>
                  <a>Design</a>
                  <a>Logo</a>
                  <a>Website</a>
                </div>
              </li>
              <li>
                <a onClick={() => props.onPageChange("about-me")}>About me</a>
              </li>
              <li>
                <a onClick={() => props.onPageChange("contact-me")}>Contact</a>
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
