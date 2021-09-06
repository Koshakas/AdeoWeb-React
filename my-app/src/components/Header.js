import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/DEMOSITE.svg";
import mobile from "./MobileButton";

function Header() {
  return (
    <header>
      <div className="container">
        <div id="menu-list">Menu | Some text | Another item | One more | And last one</div>
        <div id="header-centered">
          <div id="hamburger-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {document.querySelector("#hamburger-button") &&
            document.querySelector("#hamburger-button").addEventListener("click", e => {
              e.stopPropagation();
              e.target.classList.toggle("open");
              console.log(e.target);
            })}
          <img src={logo} alt="DemoSite Logo"></img>
          <nav id="header-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li class="dropdown">
                <Link to="/works" className="dropbtn">
                  Works
                </Link>
                <div class="dropdown-content arrow-top">
                  <Link to="/">All</Link>
                  <Link to="/">Graphic</Link>
                  <Link to="/">Design</Link>
                  <Link to="/">Logo</Link>
                  <Link to="/">Website</Link>
                </div>
              </li>
              <li>
                <Link to="/about-me">About me</Link>
              </li>
              <li>
                <Link to="/contact-me">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
