import React from "react";
// import { Link } from "react-router-dom";
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
                <button onClick={() => props.onPageChange("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => props.onPageChange("service")}>Service</button>
              </li>
              <li>
                <button onClick={() => props.onPageChange("works")}>Works</button>
              </li>
              <li>
                <button onClick={() => props.onPageChange("about-me")}>About me</button>
              </li>
              <li>
                <button onClick={() => props.onPageChange("contact-me")}>Contact</button>
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
