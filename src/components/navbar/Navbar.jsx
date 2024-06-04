import React, { useState, useEffect } from "react";
import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./style.min.css";
import "./style.css";
import icon from "../../assets/icons/Prisa.png";

const NavbarS = () => {
  return (
    <>
      {/* <header id='header1'>
                <div className='header-img' >
                    <Link to={'/'}>
                        <img src={icon} style={{ width: '18rem' }} />
                    </Link>

                </div>
                <div className='header-title'>
                    <h1 style={{ fontFamily: 'serif', fontWeight: '100', fontSize: '3em' }}>Grupo PRISA
                    </h1>
                </div>
            </header>
            <nav className="nv">
                <ul className="menus">
                    {
                        archivo.map((menu, index) => {
                            const dephtlevel = 0;
                            return <MenuItems items={menu} key={index} dephtlevel={dephtlevel} />
                        })
                    }
                </ul>
            </nav> */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <a href="index.html" className="navbar-brand px-lg-4 m-0">
            <h1 className="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto p-4">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <a href="menu.html" className="nav-item nav-link">
                Menu
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu text-capitalize">
                  <a href="reservation.html" className="dropdown-item">
                    Reservation
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarS;
