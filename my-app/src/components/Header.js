import React from "react";
import { Link } from "react-router-dom";
import "../css/header.scss";
import logo from "../assets/DEMOSITE.svg";
// import mobile from "./MobileButton";

function Header(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <header>
      <div className="container">
        <div id="menu-list">Menu | Some text | Another item | One more | And last one</div>
        <div id="header-centered">
          <div onClick={() => setOpen(!open)} className={open ? "open" : ""} id="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {}
          <img src={logo} alt="DemoSite Logo"></img>
          <nav id="header-nav">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
