import { NavLink } from "react-router-dom";
import "./style.min.css";
import "./style.css";
import logoCaribe from "../../assets/icons/logo-Caribe 1.png";
import logoCaribe2 from "../../assets/icons/LOGO-POTENCIA-ENERGETICA-OK 1.png";
import logoCaribe3 from "../../assets/icons/CARIBE POTENCIA ENERGÉTICA.png";
import esri from "../../assets/icons/esri.png";
import celsia from "../../assets/icons/celsia.png";
import ecopetrol from "../../assets/icons/ecopetrol.png";
import enel from "../../assets/icons/enel.png";
import epm from "../../assets/icons/epm.png";
import isagen from "../../assets/icons/isagen.png";
import naturgas from "../../assets/icons/logo-naturgas.jpg";
import SERColombia from "../../assets/icons/SERColombia.png";
import facebook from "../../assets/icons/icon_facebook.png";
import instagram from "../../assets/icons/icon_instagram.png";
import linkedin from "../../assets/icons/icon_linkedin.png";
import youtube from "../../assets/icons/icon_youtube.png";
import IconSlider from "../iconSlider/iconSlider";

const NavbarPrincipal = () => {
  const icons = [
    { src: esri, alt: "Esri" },
    { src: celsia, alt: "Celsia" },
    { src: ecopetrol, alt: "Ecopetrol" },
    { src: enel, alt: "Enel" },
    { src: epm, alt: "EPM" },
    { src: isagen, alt: "Isagen" },
    { src: naturgas, alt: "Naturgas" },
    { src: SERColombia, alt: "SERColombia" },
  ];
  return (
    <>
      <div className="container-fluid p-0 nav-bar">
        <div id="nav-redes" style={{height: '40px', backgroundColor: '#2B4022'}}>
          <div style={{width: '90%', paddingTop: '7px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <img src={facebook} style={{width: '25px', height: '25px', margin: '0 10px'}}/>
            <img src={instagram} style={{width: '25px', height: '25px', margin: '0 10px'}}/>
            <img src={linkedin} style={{width: '25px', height: '25px', margin: '0 10px'}}/>
            <img src={youtube} style={{width: '25px', height: '25px', margin: '0 10px'}}/>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg" id="logos-nav">
          <NavLink
            to="/"
            className="navbar-brand px-lg-4 m-0"
            activeClassName="active"
            id="header-img"
          >
            <img src={logoCaribe2} style={{height: '100px', marginRight: '20px'}}/>
            <img src={logoCaribe3} style={{height: '75px'}}/>
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
                POTENCIAL
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
              >
                MAPAS
              </NavLink>
              <NavLink
                to="/mapas/general"
                className="nav-item nav-link"
              >
                QUIÉNES SOMOS
              </NavLink>
             
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarPrincipal;
