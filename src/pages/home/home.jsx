import React, { useState, useEffect } from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import proyectosBanner from "../../assets/icons/ProyectosBanner.png";
import energiaBanner from "../../assets/icons/banner2.png";
import potencialBanner from "../../assets/icons/potencialBanner.png";
import irradiacionBanner from "../../assets/icons/IrradiacionBanner.png";
import vientosBanner from "../../assets/icons/VientosBanner.png";
import generalBanner from "../../assets/icons/GeneralBanner.png";
import Multimedia from "../../components/multimedia/multimedia";
import noticias2 from "../../assets/icons/noticias2.png";
import noticias3 from "../../assets/icons/noticias3.png";
import caribe1 from "../../assets/icons/caribe1.png";
import caribe2 from "../../assets/icons/caribe2.png";
import caribe3 from "../../assets/icons/caribe3.png";
import destacado from "../../assets/icons/destacado.png";
import destacado2 from "../../assets/icons/destacado2.png";
import dataOpinion from "../../components/opinion/data.json";
import dataNoticias from "../../components/noticias/data";
import Destacados from "../../components/destacados/destacados";
import CintaArticulos from "../../components/cintaArticulos/cintaArticulos";
import Departamentos from "../../components/departamentos/departamentos";
import Noticias from "../../components/noticias/noticias";
import Profundidad from "../../components/profundidad/profundidad";
import Opinion from "../../components/opinion/opinion";
import TextDivider from "../../components/textDivider/textDivider";
import reportaje from "../../assets/icons/reportaje.png"
import { color } from "highcharts";

const dataDestacados = [
  {
    to: "/",
    img: "https://estaticos.elcolombiano.com/binrepository/780x1170/0c0/780d565/none/11101/MSFA/ricardo-sierra-lider-de-celsia-10_45304754_20240608133543.jpg",
    titulo:
      "“Preocupa que está faltando energía en el país”: Ricardo Sierra, presidente de Celsia",
    desc: "El empresario le pidió al Gobierno Nacional señales regulatorias claras para que llegue la inversión que el desarrollo energético necesita, unos US$7.000 millones.",
    antetitulo: "",
    color: "rgba(80, 166, 56, 1)",
  },
  {
    to: "/",
    img: noticias2,
    titulo:
      "Con licencia ambiental de Colectora, más de 1.000 MW de energía eólica se podrán conectar a la red nacional",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate  pulvinar porta. Pellentesque vel iaculis nisi. Sed pellentesque sem  vitae neque commodo, at imperdiet ex ullamcorper",
    antetitulo: "LA GUAJIRA",
    color: "rgba(80, 166, 56, 1)",
  },
  {
    to: "/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkI8rEVQkrF1KmxGUNaZTspjW1N3M1VuOOaA&s",
    titulo:
      "Consumo de petróleo, gas y carbón se mantendrá alto en el mundo ¿qué pasa con la transición energética?",
    antetitulo: "NO RENOVABLES",
    color: "rgba(31, 100, 191, 1)",
  },
];

const dataCintaArticulos = [
  {
    to: "/",
    img: caribe1,
    desc: "Consumo de energía aumentó en Colombia, con mayor demanda en el Caribe",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "CARIBE",
  },
  {
    to: "/",
    img: caribe2,
    desc: "Los gobernadores del Caribe confirman la creación de empresa con énfasis en energías limpias",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "CARIBE",
  },
  {
    to: "/",
    img: caribe3,
    desc: "Las bondades del Caribe para ser epicentro de energías limpias",
    color: "rgba(80, 166, 56, 1)",
    antetitulo: "ATLÁNTICO",
  },
];

const Home = () => {
  const gif = [
    {
      link_url: "/mapas/proyectos",
      img_url: proyectosBanner,
    },
    {
      link_url: "#",
      img_url: energiaBanner,
    },
    {
      link_url: "/mapas/potencial",
      img_url: vientosBanner,
    },
    // {
    //   link_url: "/mapas/general",
    //   img_url: generalBanner,
    // },
    // {
    //   link_url: "/mapas/potencial",
    //   img_url: vientosBanner,
    // },
    // {
    //   link_url: "/mapas/proyectos",
    //   img_url: irradiacionBanner,
    // },
    // {
    //   link_url: "/mapas/general",
    //   img_url: generalBanner,
    // },
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
        i = i + 1;
      }
    }, 4000);

    return () => {
      clearInterval(gifInterval);
      i = 0;
      setGifI(i);
    };
  }, [mapa]);

  return (
    <div className="Home" id="Home">
      <div className="home-main-background">
        <Link
          style={{ width: "100%", position: "relative" }}
          to={gif[gifI]?.link_url}
        >
          <img src={gif[gifI]?.img_url} alt="plano escaneado" />

          {gifI == 0 && (
            <div className="home-main-title-overlay">
              <h1 className="m-0" style={{ color: "#193559" }}>
                CARIBE POTENCIA ENERGÉTICA
              </h1>
              <br />
              <h2 className="m-0" style={{ color: "#193559" }} id="banner-text">
                Mapa energético de la Costa Atlántica. Encuentre los proyectos
                de energías renovables y no renovables y su infraestructura en
                los departamentos del Caribe
              </h2>
            </div>
          )}
          {gifI == 1 && (
            <div
              className="home-main-title-overlay"
              id="home-main-title-overlay1"
            >
              <h1
                className="m-0"
                style={{ color: "#FFFFFF" }}
                id="banner-text2"
              >
                Cómo el deterioro de las redes de transmisión están afectando
                las tarifas del luz de los usuarios del Caribe
              </h1>
            </div>
          )}
          {gifI == 2 && (
            <div
              className="home-main-title-overlay"
              id="home-main-title-overlay2"
            >
              <h2
                className="m-0"
                style={{ color: "#193559" }}
                id="banner-text3"
              >
                Por qué la Guajira tiene los mejores vientos de América y que
                impacto tendría en las energías renovables del país.
              </h2>
            </div>
          )}
        </Link>
        {/* <img src={region} alt="marca de agua Construyendo Civilidad"></img> */}
      </div>
      <div className="home-content">
        <Destacados data={dataDestacados}></Destacados>
      </div>
      <br />
      <h2
        style={{
          textAlign: "center",
          margin: "50px auto",
          width: "50%",
          borderBottom: "2px solid black",
        }}
      >
        MAPA ENERGÉTICO
      </h2>
      <iframe
        src="https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=457f892fe6bc48ed942fb1f7df813244"
        style={{ width: "100%", height: "70vh" }}
      ></iframe>
      <br />
      <br />
      <br />
      <div className="home-content">
        <div id="caribe-section">
          <h3 className="sectionTitle">Caribe</h3>
          <CintaArticulos data={dataCintaArticulos}></CintaArticulos>
        </div>
        <br />
        <Departamentos></Departamentos>
        <br />
        <br />
      </div>
      <div className="home-content">
        <Noticias data={dataNoticias} title={"Noticias"}></Noticias>
      </div>
      <br />
      <h2
        style={{
          textAlign: "center",
          margin: "50px auto",
          width: "50%",
          borderBottom: "2px solid black",
        }}
      >
        INFRAESTRUCTURA ENERGÉTICA DEL CARIBE
      </h2>
      <iframe
        src="https://www.arcgis.com/apps/dashboards/f412e9a68608423dbba5bb00da64b420"
        style={{ width: "100%", height: "80vh" }}
      ></iframe>
      <br />
      <br />

      {/* <h2
        style={{
          textAlign: "center",
          margin: "50px auto",
          width: "50%",
          borderBottom: "2px solid black",
        }}
      >
        Potencial eólico y solar del Caribe
      </h2>
      <iframe
        src="https://mercadostech.maps.arcgis.com/apps/instant/sidebar/index.html?appid=0e41ba45e6ba41d5a92f52bc4f6b36e7"
        style={{ width: "100%", height: "80vh" }}
      ></iframe>
      <br />
      <br /> */}
      <Profundidad
        data={{
          type: 'EN PROFUNDIDAD',
          color: '#fff8e5',
          img: "https://www.minenergia.gov.co/media/images/El_ingeniero_Andres_Camacho_se_posesiona_como_n.original.jpg",
          titulo:
            "“La meta del Gobierno Nacional es producir un millón de barriles de petróleo diarios”",
          desc: "El ministro de Minas y Energía, Omar Andrés Camacho resaltó que una de las claves para que Ecopetrol mejore sus utilidades es la diversificación de su producción.",
        }}
      ></Profundidad>
      <div className="home-content">
        <br />
        <br />
        <Multimedia></Multimedia>
      </div>
      <br />
      {/* <br /> */}
      <div className="home-content" style={{background: 'rgba(255, 248, 229, 1)', width: '100%', padding: '20px 10%'}}>
        <Opinion data={dataOpinion}></Opinion>
      </div>
      <br />
      
      <Profundidad
        data={{
          type: 'INFORMES E INVESTIGACIONES',
          color: '#fff',
          img: reportaje,
          titulo:
            "Alza en tarifas de energía está impactando el empleo: Fenalco Bolívar",
          desc: "El gremio de comerciantes pidió al Gobierno nacional respuestas definitivas sobre el tema.",
        }}
      ></Profundidad>
      <br />
      <div id="videos-container">
        <div className="home-content">
          <h3 className="sectionTitle">Videos</h3>
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
