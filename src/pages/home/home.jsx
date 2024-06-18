import React, { useState, useEffect } from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import proyectosBanner from "../../assets/icons/proyectosBanner.png";
import potencialBanner from "../../assets/icons/potencialBanner.png";
import generalBanner from "../../assets/icons/generalBanner.png";
import Multimedia from "../../components/multimedia/multimedia";
import noticias3 from "../../assets/icons/noticias3.png";
import caribe1 from "../../assets/icons/caribe1.png";
import caribe2 from "../../assets/icons/caribe2.png";
import caribe3 from "../../assets/icons/caribe3.png";
import destacado from "../../assets/icons/destacado.png";
import destacado2 from "../../assets/icons/destacado2.png";
import dataOpinion from "../../components/opinion/data.json";
import dataNoticias from "../../components/noticias/data.json";
import atlantico from "../../assets/icons/Atlántico-100 1.jpg";
import cartagena from "../../assets/icons/Cartagena-100.jpg";
import cordoba from "../../assets/icons/Cordoba.png";
import guajira from "../../assets/icons/Guajira-100.jpg";
import sanAndres from "../../assets/icons/San Andrés.png";
import santaMarta from "../../assets/icons/Santa Marta-100.jpg";
import sincelejo from "../../assets/icons/Sincelejo.png";
import valledupar from "../../assets/icons/Vallledupar.png";

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
            <NavLink
              style={{ textDecoration: "none" }}
              to={
                "https://www.caf.com/es/actualidad/noticias/2024/06/caf-destaca-el-potencial-de-america-latina-y-el-caribe-para-la-produccion-de-energia-limpia-barata-y-estable/"
              }
              target="_blank"
            >
              <img
                src={
                  "https://www.caf.com/media/4669107/red-2024-portada.png?anchor=center&mode=crop&width=960&height=640&format=webp&quality=80&rnd=133627487370000000"
                }
              />
              <h4 style={{ fontWeight: "bold" }}>
                CAF destaca el potencial de América Latina y el Caribe para la
                producción de energía limpia, barata y estable
              </h4>
              <p>
                El nuevo Reporte de Economía y Desarrollo de CAF titulado
                Energías renovadas: Transición energética justa para el
                desarrollo sostenible aborda los desafíos simultáneos de hacer
                crecer el ingreso por habitante de manera considerable y
                sostenible, disminuir los niveles de emisiones y reducir la
                desigualdad en los próximos años.
              </p>
            </NavLink>
          </div>

          <div class="right-top">
            <NavLink
              style={{ textDecoration: "none" }}
              to={
                "https://investigaciones.corfi.com/documents/38211/0/11-06-2024+Informe+de+din%C3%A1mica+sectorial+-+Energ%C3%ADa.pdf/97a4be6a-9d1c-c6b7-bef4-e927c7774935?t=1718223531786"
              }
              target="_blank"
            >
              <img src={destacado2} />
              <h5 style={{ fontWeight: "bold" }}>
                La demanda y generación de energía han mostrado un
                comportamiento favorable en el inicio del año. Ante el
                recrudecimiento del fenómeno de El Niño, la generación térmica
                ha cobrado mayor relevancia. Esperamos un crecimiento de 2,8% en
                2024.
              </h5>
            </NavLink>
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
                        src={atlantico}
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Atlántico</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/13">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cartagena}
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Bolívar</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/20">
                    <div class="card">
                      <img
                        class="card-img"
                        src={valledupar}
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Cesar</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/23">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cordoba}
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Córdoba</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                        src={guajira}
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">La Guajira</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/47">
                    <div class="card">
                      <img
                        class="card-img"
                        src={santaMarta}
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Magdalena</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/70">
                    <div class="card">
                      <img
                        class="card-img"
                        src={sincelejo}
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Sucre</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/88">
                    <div class="card">
                      <img
                        class="card-img"
                        src={sanAndres}
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          Archipiélago de San Andrés y Providencia
                        </h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                        src={atlantico}
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Atlántico</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/13">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cartagena}
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Bolívar</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                        src={valledupar}
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Cesar</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/23">
                    <div class="card">
                      <img
                        class="card-img"
                        src={cordoba}
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Córdoba</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                        src={guajira}
                        alt="Atlántico"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">La Guajira</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="col-md-3">
                  <NavLink to="/filtros/47">
                    <div class="card">
                      <img
                        class="card-img"
                        src={santaMarta}
                        alt="Bolívar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Magdalena</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                        src={sincelejo}
                        alt="Cesar"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">Sucre</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="col-md-3">
                  <NavLink to="/filtros/88">
                    <div class="card">
                      <img
                        class="card-img"
                        src={sanAndres}
                        alt="Córdoba"
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">
                          Archipiélago de San Andrés y Providencia
                        </h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
            {dataNoticias.map((noticia) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={"/noticias/" + noticia.id}
                >
                  <div className="noticias-article" key={noticia.id}>
                    <img src={noticia.img} />
                    <p>{noticia.titulo}</p>
                  </div>
                </NavLink>
              );
            })}
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
          <h3>Opinión</h3>
          <div id="columnistas-section">
            {dataOpinion.map((item) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={"/opinion/" + item.id}
                >
                  <div className="columnistas-article" key={item.id}>
                    <img src={item.img} />
                    <br />
                    <h5>{item.titulo}</h5>
                    <p>{item.desc}</p>
                  </div>
                </NavLink>
              );
            })}
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
                style={{ width: "100%", height: "100%" }}
                src="https://www.youtube.com/embed/iqEQhM4kifk?list=PLU0OqN5T3HQhTrNc8fG01v4aBJhh9CQSe"
                allowfullscreen
              ></iframe>
            </div>
            <div class="right-top">
              <iframe
                src="https://www.youtube.com/embed/0MrTqCT6KKw"
                style={{ width: "100%", height: "100%" }}
              ></iframe>
            </div>
            <div class="right-bottom">
              <iframe
                src="https://www.youtube.com/embed/DGvjx7xuhYs"
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
