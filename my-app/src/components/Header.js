import React from "react";
// import { Link } from "react-router-dom";
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
                <button className="nav-btn" onClick={() => props.onPageChange("home")}>
                  Home
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={() => props.onPageChange("service")}>
                  Service
                </button>
              </li>
              <li className="dropdown">
                <button className="nav-btn dropbtn" onClick={() => props.onPageChange("works")}>
                  Works
                </button>
                <div className="dropdown-content arrow-top">
                  <button className="subnav-btn">All</button>
                  <button className="subnav-btn">Graphic</button>
                  <button className="subnav-btn">Design</button>
                  <button className="subnav-btn">Logo</button>
                  <button className="subnav-btn">Website</button>
                </div>
              </li>
              <li>
                <button className="nav-btn" onClick={() => props.onPageChange("about-me")}>
                  About me
                </button>
              </li>
              <li>
                <button className="nav-btn" onClick={() => props.onPageChange("contact-me")}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
