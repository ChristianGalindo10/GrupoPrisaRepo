import React, { useState, useEffect } from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import proyectosBanner from "../../assets/icons/proyectosBanner.png";
import potencialBanner from "../../assets/icons/potencialBanner.png";
import generalBanner from "../../assets/icons/generalBanner.png";
import Multimedia from "../../components/multimedia/multimedia";
import noticias1 from "../../assets/icons/noticias1.png";
import noticias2 from "../../assets/icons/noticias2.png";
import noticias3 from "../../assets/icons/noticias3.png";
import caribe1 from "../../assets/icons/caribe1.png";
import caribe2 from "../../assets/icons/caribe2.png";
import caribe3 from "../../assets/icons/caribe3.png";
import noticias4 from "../../assets/icons/noticias4.png";
import noticias5 from "../../assets/icons/noticias5.png";
import noticias6 from "../../assets/icons/noticias6.png";
import noticias7 from "../../assets/icons/noticias7.png";
import noticias8 from "../../assets/icons/noticias8.png";
import noticias9 from "../../assets/icons/noticias9.png";
import destacado from "../../assets/icons/destacado.png";

const Home = () => {
  const gif = [
    {
      link_url: "/mapas/potencial",
      img_url: potencialBanner,
    },
    {
      link_url: "/mapas/proyectos",
      img_url: proyectosBanner,
    },
    {
      link_url: "/mapas/general",
      img_url: generalBanner,
    },
  ];
  const [gifI, setGifI] = useState(0);

  const [mapa, setMapa] = useState("potencial solar");

  useEffect(() => {
    let i = 0;
    const gifInterval = setInterval(() => {
      // let i = gifI

      if (i <= 2) {
        setGifI(i);
        i = i + 1;
      } else {
        i = 0;
        setGifI(i);
      }
    }, 2000);

    return () => {
      clearInterval(gifInterval);
      i = 0;
      setGifI(i);
    };
  }, [mapa]);

  return (
    <div className="Home" id="Home">
      <div className="home-main-background">
        <Link to={gif[gifI]?.link_url}>
          <div className="home-main-title-overlay">
            <h2 className="display-2 text-white m-0">
              Caribe Potencia Energética
            </h2>
            <br />
            <h2 class="text-white m-0">* Colombia 2024 *</h2>
            {/* <Link style={{textDecoration: 'none'}} to={gif[gifI]?.link_url}><p className="bienvenido"><span style={{ fontWeight: 'bold' }}>Caribe Potencia Energética</span></p></Link> */}
          </div>
        </Link>
        <Link style={{ width: "100%" }} to={gif[gifI]?.link_url}>
          <img src={gif[gifI]?.img_url} alt="plano escaneado" />
        </Link>
        {/* <img src={region} alt="marca de agua Construyendo Civilidad"></img> */}
      </div>
      <div className="home-content">
        <div id="container-noticias1">
          <div class="left">
            <img src={noticias1} />
            <h4 style={{ fontWeight: "bold" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate pulvinar porta. Pellentesque vel iaculis nisi. Sed
              pellentesque sem vitae neque commodo, at imperdiet ex ullamcorper.
            </p>
          </div>
          <div class="right-top">
            <img src={noticias2} />
            <h5 style={{ fontWeight: "bold" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h5>
          </div>
          <div class="right-bottom">
            <img src={noticias3} />
            <h5 style={{ fontWeight: "bold" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h5>
          </div>
        </div>
      </div>
      <br />
      <iframe
        src="https://geoapps.esri.co/portal/apps/experiencebuilder/experience/?id=25c1dd00a01e4e859ec719d044b3f183"
        style={{ width: "100%", height: "70vh" }}
      ></iframe>
      <br />
      <br />
      <br />
      <div className="home-content">
        <div>
          <h3>Caribe</h3>
          <div id="caribe-section">
            <div className="caribe-article">
              <img src={caribe1} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="caribe-article">
              <img src={caribe2} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="caribe-article">
              <img src={caribe3} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
        <br />
        <div id="departamentos-section">
          <h3>Departamentos</h3>
          <div id="carouselExample" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="col-md-3">
                  <NavLink to="/filtros/8">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Atlántico</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/13">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Bolívar</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/20">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Cesar</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/23">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Córdoba</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/44">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">La Guajira</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/47">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Magdalena</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/70">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Sucre</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/88">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          Archipiélago de San Andrés y Providencia
                        </h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExample"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExample"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
          <div
            id="carouselExample2"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="col-md-3">
                  <NavLink to="/filtros/8">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Atlántico</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/13">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Bolívar</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/20">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Cesar</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/23">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Córdoba</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/44">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">La Guajira</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="col-md-3">
                  <NavLink to="/filtros/47">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Magdalena</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-md-3">
                  <NavLink to="/filtros/70">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Sucre</h5>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/88">
                    <div class="card">
                      <img
                        class="card-img"
                        src="https://via.placeholder.com/900"
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          Archipiélago de San Andrés y Providencia
                        </h5>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExample2"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExample2"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
        </div>
        <br />
        <br />
      </div>
      <iframe
        src="https://www.arcgis.com/apps/dashboards/f412e9a68608423dbba5bb00da64b420"
        style={{ width: "100%", height: "80vh" }}
      ></iframe>
      <br />
      <br />
      <div className="home-content">
        <div>
          <h3>Noticias</h3>
          <div id="noticias-section">
            <div className="noticias-article">
              <img src={noticias4} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="noticias-article">
              <img src={noticias5} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="noticias-article">
              <img src={noticias6} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="noticias-article">
              <img src={noticias7} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="noticias-article">
              <img src={noticias8} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="noticias-article">
              <img src={noticias9} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <iframe
        src="https://arcg.is/1qbTD50"
        style={{ width: "100%", height: "80vh" }}
      ></iframe>
      <br />
      <br />
      <div className="home-content">
        <div id="destacado-section">
          <div id="destacado-img">
            <img src={destacado} />
          </div>
          <div id="destacado-txt">
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate pulvinar porta. Pellentesque vel iaculis nisi. Sed
              pellentesque sem vitae neque commodo, at imperdiet ex ullamcorper.
            </p>
          </div>
        </div>
        <br />
        <br />
        <Multimedia></Multimedia>
        <br />
        <br />
        <div>
          <h3>Columnistas</h3>
          <div id="columnistas-section">
            <div className="columnistas-article">
              <img src="https://via.placeholder.com/900x600" />
              <br />
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate pulvinar porta.
              </p>
            </div>
            <div className="columnistas-article">
              <img src="https://via.placeholder.com/900x600" />
              <br />
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate pulvinar porta.
              </p>
            </div>
            <div className="columnistas-article">
              <img src="https://via.placeholder.com/900x600" />
              <br />
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate pulvinar porta.
              </p>
            </div>
            <div className="columnistas-article">
              <img src="https://via.placeholder.com/900x600" />
              <br />
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vulputate pulvinar porta.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div id="videos-container">
        <div className="home-content">
          <h3>Videos</h3>
          <div id="videos-section">
            <div class="left">
              <iframe
                src="https://www.youtube.com/embed/DMAgQRAYGjA"
                style={{ width: "100%", height: "100%" }}
              ></iframe>
            </div>
            <div class="right-top">
              <iframe
                src="https://www.youtube.com/embed/DMAgQRAYGjA"
                style={{ width: "100%", height: "100%" }}
              ></iframe>
            </div>
            <div class="right-bottom">
              <iframe
                src="https://www.youtube.com/embed/DMAgQRAYGjA"
                style={{ width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
