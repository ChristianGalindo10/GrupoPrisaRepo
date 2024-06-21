import { NavLink } from "react-router-dom";
import "./style.min.css";
import "./style.css";
import logoCaribe from "../../assets/icons/logo-Caribe 1.png";
import esri from "../../assets/icons/esri.png";
import celsia from "../../assets/icons/celsia.png";
import ecopetrol from "../../assets/icons/ecopetrol.png";
import enel from "../../assets/icons/enel.png";
import epm from "../../assets/icons/epm.png";
import isagen from "../../assets/icons/isagen.png";
import facebook from "../../assets/icons/icon_facebook.png";
import instagram from "../../assets/icons/icon_instagram.png";
import linkedin from "../../assets/icons/icon_linkedin.png";
import youtube from "../../assets/icons/icon_youtube.png";
import IconSlider from "../iconSlider/iconSlider";

const NavbarPrincipal = () => {
  const icons = [
    { src: esri, alt: "Icon 3" },
    { src: celsia, alt: "Icon 1" },
    { src: ecopetrol, alt: "Icon 2" },
    { src: enel, alt: "Icon 3" },
    { src: epm, alt: "Icon 1" },
    { src: isagen, alt: "Icon 2" },
  ];
  return (
    <>
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg" id="logos-nav">
          <NavLink
            to="/"
            className="navbar-brand px-lg-4 m-0"
            activeClassName="active"
            id="header-img"
          >
            <img src={logoCaribe} style={{height: '100px'}}/>
          </NavLink>
          {/* <NavLink
            to="/"
            className="navbar-brand px-lg-4 m-0"
            activeClassName="active"
          >
            <h1 id="header-title" className="font-weight-bold">
              Caribe Potencia Energética{" "}
            </h1>
          </NavLink> */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="nav-images"
          >
            <div className="navbar-nav ml-auto p-4">
              <IconSlider icons={icons} />
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
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={() => {
                  setTimeout(() => {
                    const anchor = document.querySelector("#caribe-section");
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }, 100);
                }}
              >
                CARIBE
              </NavLink>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  DEPARTAMENTOS
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink
                    to="/filtros/8"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    Atlántico
                  </NavLink>
                  <NavLink
                    to="/filtros/13"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    Bolívar
                  </NavLink>
                  <NavLink
                    to="/filtros/20"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    Cesar
                  </NavLink>
                  <NavLink
                    to="/filtros/23"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    Córdoba
                  </NavLink>
                  <NavLink
                    to="/filtros/44"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    La Guajira
                  </NavLink>
                  <NavLink
                    to="/filtros/47"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    Magdalena
                  </NavLink>
                  <NavLink
                    to="/filtros/70"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    Sucre
                  </NavLink>
                  <NavLink
                    to="/filtros/88"
                    class="dropdown-item"
                    activeClassName="active"
                  >
                    San Andrés y Providencia
                  </NavLink>
                </div>
              </li>
              <NavLink
                to="/renovables"
                className="nav-item nav-link"
              >
                RENOVABLES
              </NavLink>
              <NavLink
                to="/norenovables"
                className="nav-item nav-link"
              >
                NO RENOVABLES
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
              >
                INFRAESTRUCTURA
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
              >
                QUIÉNES SOMOS
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
              >
                POTENCIAL
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
              >
                MAPAS
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarPrincipal;
