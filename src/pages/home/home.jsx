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
import Destacados from "../../components/destacados/destacados";
import CintaArticulos from "../../components/cintaArticulos/cintaArticulos";
import Departamentos from "../../components/departamentos/departamentos";
import Noticias from "../../components/noticias/noticias";

const dataDestacados = [
  {
    to: "https://www.caf.com/es/actualidad/noticias/2024/06/caf-destaca-el-potencial-de-america-latina-y-el-caribe-para-la-produccion-de-energia-limpia-barata-y-estable/",
    img: "https://www.caf.com/media/4669107/red-2024-portada.png?anchor=center&mode=crop&width=960&height=640&format=webp&quality=80&rnd=133627487370000000",
    titulo: "CAF destaca el potencial de América Latina y el Caribe para la producción de energía limpia, barata y estable",
    desc: "El nuevo Reporte de Economía y Desarrollo de CAF titulado Energías renovadas: Transición energética justa para el desarrollo sostenible aborda los desafíos simultáneos de hacer crecer el ingreso por habitante de manera considerable y sostenible, disminuir los niveles de emisiones y reducir la desigualdad en los próximos años."
  },
  {
    to: "https://investigaciones.corfi.com/documents/38211/0/11-06-2024+Informe+de+din%C3%A1mica+sectorial+-+Energ%C3%ADa.pdf/97a4be6a-9d1c-c6b7-bef4-e927c7774935?t=1718223531786",
    img: destacado2,
    titulo: "La demanda y generación de energía han mostrado un comportamiento favorable en el inicio del año. Ante el recrudecimiento del fenómeno de El Niño, la generación térmica ha cobrado mayor relevancia. Esperamos un crecimiento de 2,8% en 2024."
  },
  {
    to: "/",
    img: noticias3,
    titulo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
]

const dataCintaArticulos = [
  {
    to: "/",
    img: caribe1,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    to: "/",
    img: caribe2,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    to: "/",
    img: caribe3,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
]

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
        <Destacados data={dataDestacados}></Destacados>
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
        <div id="caribe-section">
          <h3>Caribe</h3>
          <CintaArticulos data={dataCintaArticulos}></CintaArticulos>
        </div>
        <br />
        <Departamentos></Departamentos>
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
        <Noticias data={dataNoticias}></Noticias>
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
