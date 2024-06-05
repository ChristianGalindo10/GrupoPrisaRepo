import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./style.min.css";
import "./style.css";
import "./tempusdominus-bootstrap-4.min.css";

const NavbarPrincipal = () => {
  return (
    <>
      {/* <nav className="nv">
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
            <h1 className="m-0 display-4 text-uppercase text-white">PRISA</h1>
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
              <NavLink to="/" className="nav-item nav-link" activeClassName="active">Inicio</NavLink>
              <NavLink to="/departamentos" className="nav-item nav-link" activeClassName="active">Departamentos</NavLink>
              <NavLink to="/tiposEnergia" className="nav-item nav-link" activeClassName="active">Tipos de energía</NavLink>
              <NavLink to="/mapas/general" className="nav-item nav-link" activeClassName="active">Mapas</NavLink>
              {/* <a href="index.html" className="nav-item nav-link active">
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
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarPrincipal;
