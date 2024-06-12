import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./style.min.css";
import "./style.css";
import "./tempusdominus-bootstrap-4.min.css";
import logoCaribe from "../../assets/icons/logo-Caribe 1.png";
import celsia from "../../assets/icons/celsia.png";
import ecopetrol from "../../assets/icons/ecopetrol.png";
import enel from "../../assets/icons/enel.png";
import epm from "../../assets/icons/epm.png";
import isagen from "../../assets/icons/isagen.png";
import facebook from "../../assets/icons/icon_facebook.png";
import instagram from "../../assets/icons/icon_instagram.png";
import linkedin from "../../assets/icons/icon_linkedin.png";
import youtube from "../../assets/icons/icon_youtube.png";

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
        <nav className="navbar navbar-expand-lg bg" id="logos-nav">
          <a href="index.html" className="navbar-brand px-lg-4 m-0">
            {/* <h1 className="m-0 display-4 text-uppercase text-white">PRISA</h1> */}
            <img src={logoCaribe} />
          </a>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="nav-images"
          >
            <div className="navbar-nav ml-auto p-4">
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={celsia} />
              </NavLink>
              <NavLink
                to="/departamentos"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={ecopetrol} />
              </NavLink>
              <NavLink
                to="/tiposEnergia"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={enel} />
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={epm} />
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={isagen} />
              </NavLink>
            </div>
          </div>
        </nav>
        <nav
          className="navbar navbar-expand-lg bg-none navbar-dark py-3"
          id="nav-menu"
        >
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
            <div className="navbar-nav p-4" id="ul-menu">
              <NavLink
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
              >
                INICIO
              </NavLink>
              <NavLink
                to="/departamentos"
                className="nav-item nav-link"
                activeClassName="active"
              >
                CARIBE
              </NavLink>
              <NavLink
                to="/tiposEnergia"
                className="nav-item nav-link"
                activeClassName="active"
              >
                DEPARTAMENTOS
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                RENOVABLES
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                NO RENOVABLES
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                INFRAESTRUCTURA
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                QUIÉNES SOMOS
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={facebook} />
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={instagram} />
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={linkedin} />
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <img src={youtube} />
              </NavLink>
              <div id="redes-mobile">
                <NavLink
                  to="/mapas/general"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  <img src={facebook} />
                </NavLink>
                <NavLink
                  to="/mapas/general"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  <img src={instagram} />
                </NavLink>
                <NavLink
                  to="/mapas/general"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  <img src={linkedin} />
                </NavLink>
                <NavLink
                  to="/mapas/general"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  <img src={youtube} />
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarPrincipal;
