import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../../assets/icons/Prisa.png";
import region from "../../assets/icons/region-caribe.jpg";
import Lanzadores from "../../components/lanzadores/lanzadores";
import proyectosBanner from "../../assets/icons/proyectosBanner.png";
import potencialBanner from "../../assets/icons/potencialBanner.png";
import News from "../../components/news/news";
import Multimedia from "../../components/multimedia/multimedia";

const Home = () => {
  const gif = [
    {
      link_url: "/potencialDepartamentos",
      img_url: potencialBanner,
    },
    {
      link_url: "/filtros",
      img_url: proyectosBanner,
    },
  ];
  const [gifI, setGifI] = useState(0);

  const [mapa, setMapa] = useState("potencial solar");

  useEffect(() => {
    let i = 0;
    const gifInterval = setInterval(() => {
      // let i = gifI

      if (i <= 1) {
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
              Caribe potencia energética
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
        <div className="home-content-text">
          <p className="text-principal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ullamcorper sapien lacus, quis rhoncus neque tempus ac. Quisque nec
            pretium quam. Maecenas in neque porta, vulputate nisl in, mollis
            enim. Maecenas fringilla, turpis sit amet eleifend vulputate, nulla
            augue venenatis mauris, et egestas sapien risus vitae ipsum. Vivamus
            lacinia quis tortor ac auctor. Vestibulum commodo placerat placerat.
            Quisque et massa at lorem cursus volutpat ut nec nunc. Donec
            consectetur, arcu quis efficitur volutpat, nunc tortor porttitor
            purus, vel elementum massa velit non odio.
            <br />
            <br />
            Integer sem ex, tincidunt molestie libero sit amet, pharetra mattis
            neque. Nunc in magna euismod, placerat velit sit amet, sagittis
            tellus. Ut sem purus, mattis nec mauris eget, pulvinar pharetra
            turpis. Vivamus ac laoreet nibh, non mollis massa. Duis vulputate,
            magna a convallis lobortis, diam massa gravida odio, eu dignissim
            nisi diam id massa. Donec in nisl eu arcu fermentum suscipit. Nulla
            id quam vulputate, finibus lacus vitae, scelerisque neque. Ut nisi
            magna, aliquet et varius non, semper et leo. Nam luctus sagittis
            auctor. Nullam ornare neque neque, non laoreet diam auctor vel.
            Etiam ullamcorper pretium viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sit
            amet nisl ante. Mauris posuere non massa vel tempor. Aliquam
            suscipit sollicitudin laoreet.
            <br />
            <br />
            Nulla sit amet tortor est. Nulla non purus interdum leo pretium
            viverra et a leo. Sed euismod lectus eget lorem tempus, at posuere
            lectus fermentum. Aliquam hendrerit erat nulla, sit amet varius
            ligula finibus at. Proin eu eros vulputate, porttitor mauris sit
            amet, venenatis tortor. Quisque sed lorem ac leo sodales placerat.
            Sed volutpat nulla nibh, ac rutrum orci sodales vel.
          </p>
        </div>
        <div className="home-content-video">
          <iframe
            width="914"
            height="514"
            src="https://www.youtube.com/embed/XHAouERmdSg"
            title="La sostenibilidad para PRISA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/*Noticias*/}

      {/* <News></News> */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Noticias
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="https://marketplace.canva.com/EAF8MQRs9gc/1/0/1131w/canva-documento-a4-noticias-diario-peri%C3%B3dico-editorial-cl%C3%A1sico-blanco-y-negro-AjLAx13My3g.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-truck service-icon"></i>Fastest Door
                    Delivery
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="https://marketplace.canva.com/EAF8MQRs9gc/1/0/1131w/canva-documento-a4-noticias-diario-peri%C3%B3dico-editorial-cl%C3%A1sico-blanco-y-negro-AjLAx13My3g.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-coffee service-icon"></i>Fresh Coffee
                    Beans
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="https://marketplace.canva.com/EAF8MQRs9gc/1/0/1131w/canva-documento-a4-noticias-diario-peri%C3%B3dico-editorial-cl%C3%A1sico-blanco-y-negro-AjLAx13My3g.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-award service-icon"></i>Best Quality
                    Coffee
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="https://marketplace.canva.com/EAF8MQRs9gc/1/0/1131w/canva-documento-a4-noticias-diario-peri%C3%B3dico-editorial-cl%C3%A1sico-blanco-y-negro-AjLAx13My3g.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-table service-icon"></i>Online Table
                    Booking
                  </h4>
                  <p className="m-0">
                    Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea
                    et et lorem dolor sed est sit invidunt, dolore tempor diam
                    ipsum takima erat tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Fin noticias*/}

      <div className="containerGeneral">
        <h1 className="sectionTitle">Tipos de Energía</h1>
        <div className="home-content2">
          <div className="home-content-text">
            <h2>Renovable</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sed error. Accusantium facere voluptatem pariatur
              totam blanditiis. Placeat praesentium est ea quam ut delectus
              quasi quisquam fuga aliquid, iusto iste. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Architecto inventore voluptates
              sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
              eatae voluptate commodi, corrupti tempora sit iusto minus.
              Ducimus, magnam corrupti!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sed error. Accusantium facere voluptatem pariatur
              totam blanditiis. Placeat praesentium est ea quam ut delectus
              quasi quisquam fuga aliquid, iusto iste. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Architecto inventore voluptates
              sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
              eatae voluptate commodi, corrupti tempora sit iusto minus.
              Ducimus, magnam corrupti!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sed error. Accusantium facere voluptatem pariatur
              totam blanditiis. Placeat praesentium est ea quam ut delectus
              quasi quisquam fuga aliquid, iusto iste. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Architecto inventore voluptates
              sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
              eatae voluptate commodi, corrupti tempora sit iusto minus.
              Ducimus, magnam corrupti!
            </p>
          </div>
          <div className="home-content-text">
            <h2>No renovable</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sed error. Accusantium facere voluptatem pariatur
              totam blanditiis. Placeat praesentium est ea quam ut delectus
              quasi quisquam fuga aliquid, iusto iste. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Architecto inventore voluptates
              sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
              eatae voluptate commodi, corrupti tempora sit iusto minus.
              Ducimus, magnam corrupti!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sed error. Accusantium facere voluptatem pariatur
              totam blanditiis. Placeat praesentium est ea quam ut delectus
              quasi quisquam fuga aliquid, iusto iste. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Architecto inventore voluptates
              sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
              eatae voluptate commodi, corrupti tempora sit iusto minus.
              Ducimus, magnam corrupti!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sed error. Accusantium facere voluptatem pariatur
              totam blanditiis. Placeat praesentium est ea quam ut delectus
              quasi quisquam fuga aliquid, iusto iste. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Architecto inventore voluptates
              sint quasi ipsa, omnis nemo consequatur impedit repudiandae b
              eatae voluptate commodi, corrupti tempora sit iusto minus.
              Ducimus, magnam corrupti!
            </p>
          </div>
        </div>
        <br />
        <Multimedia />
        <br />
        <div>
          <h2>¿Quiénes somos?</h2>
          <br />
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <iframe
              width="914"
              height="514"
              src="https://www.youtube.com/embed/DMAgQRAYGjA"
              title="PRISA Vídeo Corporativo 2021"
              frameborder="0"
              allow="accelerometer; autoplay;
             clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                margin: "0 auto",
                width: "100%",
                maxWidth: "914px",
                height: "50vw",
                maxHeight: "514px",
              }}
            ></iframe>
          </div>
          <br />
          <p>
            PRISA es el grupo empresarial líder en la creación y distribución de
            contenidos educativos, de información y entretenimiento en el
            mercado de habla hispana. Presente en 23 países, PRISA llega a
            millones de personas a través de sus marcas globales: Santillana, EL
            PAÍS, LOS40, W Radio o AS. PRISA es uno de los principales grupos de
            educación y medios de comunicación del mundo hispano por la gran
            calidad de sus contenidos y por su voluntad de participar en la
            economía digital a través de la conectividad y la innovación en
            productos y servicios. Su presencia en Brasil y Portugal, y en el
            creciente mercado hispano de EEUU, le abre un mercado global de más
            de 700 millones de personas.
          </p>

          <p>
            PRISA es uno de los principales grupos de educación y medios de
            comunicación gracias a la calidad de sus contenidos y a su espíritu
            innovador.
          </p>

          <p>
            Con 240 millones de usuarios únicos mensuales* en todo el mundo,
            PRISA se sitúa a la vanguardia de las empresas de comunicación y
            educación con una sólida estrategia de distribución de contenidos, y
            ofrece innovadoras propuestas a través de distintos formatos,
            canales y plataformas.
          </p>

          <p>* (Fuente: Adobe Omniture enero-diciembre 2020)</p>
        </div>
        <br />
        <br />
        <br />
        <Link to="/mapas" id="galeriaBtn">
          ¡Visita nuestra galería de mapas!
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
};
export default Home;
