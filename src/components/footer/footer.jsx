import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import celsia from "../../assets/icons/celsia.png";
import ecopetrol from "../../assets/icons/ecopetrol.png";
import enel from "../../assets/icons/enel.png";
import epm from "../../assets/icons/epm.png";
import isagen from "../../assets/icons/isagen.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer text-white mt-5 px-0 position-relative overlay-top">
      <div
        className="container-fluid text-center text-white border-top py-4"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <div
          className="justify-content-between"
        >
          <div className="ml-auto p-4" id="footer-images">
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={celsia} />
            </NavLink>
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={ecopetrol} />
            </NavLink>
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={enel} />
            </NavLink>
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={epm} />
            </NavLink>
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={isagen} />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="row mx-0 px-sm-3 px-lg-5">
        
      </div>
    </div>
  );
};
export default Footer;
