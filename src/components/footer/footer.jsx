import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import esri from "../../assets/icons/f_esri.png";
import aecom from "../../assets/icons/f_aecom.png";
import ecopetrol from "../../assets/icons/f_ecopetrol.png";
import enel from "../../assets/icons/f_enel.png";
import aes from "../../assets/icons/f_aes.png";
import isagen from "../../assets/icons/f_isagen.png";
import prisa from "../../assets/icons/f_prisa.png";
import footer_complemento from "../../assets/icons/footer_complemento.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer text-white mt-5 px-0 position-relative overlay-top" style={{paddingBottom: 0}}>
      <div
        className="container-fluid text-center text-white py-4"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <div className="justify-content-between">
          <p style={{fontSize: '23px', fontWeight: 600, marginBottom: 0, color: 'white'}}>Una Iniciativa de:</p>
          <div className="ml-auto p-4" id="footer-images">
          <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={prisa}/>
            </NavLink>
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={esri}/>
            </NavLink>
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={isagen} />
            </NavLink>
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              <img src={aecom} />
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
              <img src={aes} />
            </NavLink>
          </div>
          
        </div>
      </div>
      <div>
            <img src={footer_complemento} style={{width: '100%'}}/>
          </div>
    </div>
  );
};
export default Footer;
