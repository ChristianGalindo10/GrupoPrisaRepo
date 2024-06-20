import React, { useState, useEffect } from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import proyectosBanner from "../../assets/icons/proyectosBanner.png";
import potencialBanner from "../../assets/icons/potencialBanner.png";
import generalBanner from "../../assets/icons/generalBanner.png";
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
import { color } from "highcharts";

const dataDestacados = [
  {
    to: "/",
    img: "https://estaticos.elcolombiano.com/binrepository/780x1170/0c0/780d565/none/11101/MSFA/ricardo-sierra-lider-de-celsia-10_45304754_20240608133543.jpg",
    titulo: "“Preocupa que está faltando energía en el país”: Ricardo Sierra, presidente de Celsia",
    desc: "El empresario le pidió al Gobierno Nacional señales regulatorias claras para que llegue la inversión que el desarrollo energético necesita, unos US$7.000 millones.",
    antetitulo: "",
    color: "rgba(80, 166, 56, 1)"
  },
  {
    to: "/",
    img: noticias2,
    titulo: "Con licencia ambiental de Colectora, más de 1.000 MW de energía eólica se podrá conectar a la red nacional",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate  pulvinar porta. Pellentesque vel iaculis nisi. Sed pellentesque sem  vitae neque commodo, at imperdiet ex ullamcorper",
    antetitulo: "LA GUAJIRA",
    color: "rgba(80, 166, 56, 1)"
  },
  {
    to: "/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkI8rEVQkrF1KmxGUNaZTspjW1N3M1VuOOaA&s",
    titulo: "Consumo de petróleo, gas y carbón se mantendrá alto en el mundo ¿qué pasa con la transición energética?",
    antetitulo: "NO RENOVABLES",
    color: "rgba(31, 100, 191, 1)"
  }
]

const dataCintaArticulos = [
  {
    to: "/",
    img: caribe1,
    desc: "Consumo de energía aumentó en Colombia, con mayor demanda en el Caribe",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "CARIBE"
  },
  {
    to: "/",
    img: caribe2,
    desc: "Los gobernadores del Caribe confirman la creación de empresa con énfasis en energías limpias",
    color: "rgba(31, 100, 191, 1)",
    antetitulo: "CARIBE"
  },
  {
    to: "/",
    img: caribe3,
    desc: "Las bondades del Caribe para ser epicentro de energías limpias",
    color: "rgba(80, 166, 56, 1)",
    antetitulo: "ATLÁNTICO"
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
        <Link style={{ width: "100%", position: 'relative' }} to={gif[gifI]?.link_url}>
          <img src={gif[gifI]?.img_url} alt="plano escaneado" />
          <div className="home-main-title-overlay">
            <h2 className="m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h2>
          </div>
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
      <Profundidad data={
          {
            img: "https://www.minenergia.gov.co/media/images/El_ingeniero_Andres_Camacho_se_posesiona_como_n.original.jpg",
            titulo: "“La meta del Gobierno Nacional es producir un millón de barriles de petróleo diarios”",
            desc: "El ministro de Minas y Energía, Omar Andrés Camacho resaltó que una de las claves para que Ecopetrol mejore sus utilidades es la diversificación de su producción."
          }
        }></Profundidad>
      <div className="home-content">
        <br />
        <br />
        <Multimedia></Multimedia>
        <br />
        <br />
        <Opinion data={dataOpinion}></Opinion>
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
